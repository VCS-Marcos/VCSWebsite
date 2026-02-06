<?php
// ====== CONFIGURATION ======
// Microsoft 365 SMTP Settings
$SMTP_HOST = 'smtp.office365.com';
$SMTP_PORT = 587;
$SMTP_USER = 'formmail@switch.sc'; // KEEP AS IS per instructions (using existing mailer)
$SMTP_PASS = 'Password123';        // KEEP AS IS per instructions
$TO_EMAIL = 'info@vcsinet.com';   // Updated to VCS email

// Security Settings
$ENABLE_RATE_LIMIT = true;
$RATE_LIMIT = 5; // Max submissions per hour per IP
$MIN_SUBMISSION_TIME = 2; // Minimum seconds to fill form (blocks instant bots)
$ENABLE_HONEYPOT = true;
$HONEYPOT_FIELD = 'website_url'; // Hidden field name
// ===========================

// Enable CORS with strict checks
$allowed_origins = ['https://vcsinet.com', 'https://www.vcsinet.com', 'http://localhost:8080'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Load PHPMailer
if (file_exists(__DIR__ . '/PHPMailer/src/Exception.php')) {
    require_once __DIR__ . '/PHPMailer/src/Exception.php';
    require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/src/SMTP.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Start output buffering
ob_start();

try {
    // ====== SECURITY CHECKS ======

    // 0. Referer Check (Anti-CSRF/Hotlinking)
    // 0. Referer Check (Anti-CSRF/Hotlinking)
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if (
        !empty($referer) &&
        strpos($referer, 'vcsinet.com') === false &&
        strpos($referer, 'localhost') === false &&
        strpos($referer, '127.0.0.1') === false
    ) {
        // Fail silently or generic error
        throw new Exception("Invalid request source: $referer");
    }

    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    // 1. Honeypot
    if ($ENABLE_HONEYPOT) {
        if (isset($data[$HONEYPOT_FIELD]) && !empty(trim($data[$HONEYPOT_FIELD]))) {
            // Fake success
            echo json_encode(['success' => true, 'message' => 'Message sent!']);
            exit();
        }
    }

    // 2. Rate Limiting
    if ($ENABLE_RATE_LIMIT) {
        $ip = $_SERVER['REMOTE_ADDR'];
        $rate_key = 'rate_' . md5($ip);
        $rate_dir = __DIR__ . '/.ratelimit';
        $rate_file = $rate_dir . '/' . $rate_key;

        if (!is_dir($rate_dir)) {
            @mkdir($rate_dir, 0755, true);
        }

        if (file_exists($rate_file)) {
            $attempts = json_decode(file_get_contents($rate_file), true);
            $current_time = time();
            $attempts = array_filter($attempts, function ($time) use ($current_time) {
                return ($current_time - $time) < 3600;
            });

            if (count($attempts) >= $RATE_LIMIT) {
                http_response_code(429);
                echo json_encode(['success' => false, 'message' => 'Too many submissions. Please try again in an hour.']);
                exit();
            }

            $attempts[] = $current_time;
            file_put_contents($rate_file, json_encode($attempts));
        } else {
            file_put_contents($rate_file, json_encode([time()]));
        }
    }

    // 3. Validation
    if (empty($data))
        throw new Exception('No data received.');

    // Time check
    if ($MIN_SUBMISSION_TIME > 0 && isset($data['_submit_time'])) {
        $submit_time = intval($data['_submit_time']);
        if ((time() - $submit_time) < $MIN_SUBMISSION_TIME) {
            // Fake success
            echo json_encode(['success' => true, 'message' => 'Message sent!']);
            exit();
        }
    }

    // ====== DATA EXTRACTION & STRICT VALIDATION ======

    $name = clean_input($data['name'] ?? '');
    $email = clean_input($data['email'] ?? '');
    $phone = clean_input($data['phone'] ?? '');
    $company = clean_input($data['company'] ?? '');
    $service = clean_input($data['service'] ?? 'general');
    $message = clean_input($data['message'] ?? '');

    $errors = [];

    // Name: letters, dots, spaces, hyphens. 2-50 chars.
    if (!preg_match("/^[a-zA-Z\s\-\.]{2,50}$/", $name)) {
        $errors[] = 'Invalid name format.';
    }

    // Email: Strict filter
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address.';
    }

    // Phone: Optional, but if present must be valid chars
    if (!empty($phone) && !preg_match("/^[\d\s\-\+\(\)]{7,20}$/", $phone)) {
        $errors[] = 'Invalid phone number.';
    }

    // Message: 10-2000 chars, check for malicious tags
    if (strlen($message) < 10 || strlen($message) > 2000) {
        $errors[] = 'Message must be between 10 and 2000 characters.';
    }
    // Simple anti-spam: check for url bbcode or excessive links
    if (preg_match('/\[url=/i', $message) || substr_count($message, 'http') > 3) {
        $errors[] = 'Message rejected as spam.';
    }

    if (!empty($errors)) {
        throw new Exception(implode(' ', $errors));
    }

    // Service mapping
    $service_map = [
        'general' => 'General Inquiry',
        'servers' => 'Server Solutions',
        'networking' => 'Networking',
        'software' => 'Software Development',
        'cloud' => 'Cloud Services',
        'xerox' => 'Xerox Solutions',
        'managed-it' => 'Managed IT Services'
    ];
    $service_display = $service_map[$service] ?? $service;

    // ====== EMAIL SENDING ======

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = $SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = $SMTP_USER;
    $mail->Password = $SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $SMTP_PORT;

    $mail->setFrom($SMTP_USER, 'VCS Website Contact Form');
    $mail->addAddress($TO_EMAIL);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "VCS Website Inquiry: $name - $service_display";

    $mail->Body = create_email_body($name, $email, $phone, $company, $service_display, $message);
    $mail->AltBody = create_text_body($name, $email, $phone, $company, $service_display, $message);

    if ($mail->send()) {
        log_submission($_SERVER['REMOTE_ADDR'], $email, true);
        echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    } else {
        throw new Exception('Mailer Error: ' . $mail->ErrorInfo);
    }

} catch (Exception $e) {
    log_submission($_SERVER['REMOTE_ADDR'], $data['email'] ?? 'unknown', false, $e->getMessage());
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
} finally {
    ob_end_flush();
}

// ====== FUNCTIONS ======

function clean_input($data)
{
    // Strip tags first to remove any HTML
    $data = strip_tags($data);
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

function create_email_body($name, $email, $phone, $company, $service, $msg)
{
    return "
    <html>
    <body style='font-family: Arial, sans-serif; color: #333;'>
        <h2 style='color: #800020;'>New VCS Website Inquiry</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Company:</strong> " . ($company ?: 'N/A') . "</p>
        <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
        <p><strong>Phone:</strong> " . ($phone ?: 'N/A') . "</p>
        <p><strong>Service:</strong> $service</p>
        <hr>
        <h3>Message:</h3>
        <p style='white-space: pre-wrap; background: #f9f9f9; padding: 15px;'>$msg</p>
    </body>
    </html>";
}

function create_text_body($name, $email, $phone, $company, $service, $msg)
{
    return "New Inquiry\n\nName: $name\nCompany: $company\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$msg";
}

function log_submission($ip, $email, $success, $err = '')
{
    $status = $success ? 'SUCCESS' : 'FAIL';
    $entry = date('Y-m-d H:i:s') . " [$status] IP:$ip Email:$email Error:$err\n";
    @file_put_contents(__DIR__ . '/logs/submissions.log', $entry, FILE_APPEND);
}
?>