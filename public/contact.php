<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
/*header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');*/

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit;
}

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

// ===== CONFIG =====
$SMTP_HOST = 'smtp.office365.com';
$SMTP_PORT = 587;
$SMTP_USER = 'formmail@switch.sc';
$SMTP_PASS = '';
$TO_EMAIL = 'tech@switch.sc';
// ==================

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
  echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
  exit;
}

// ===== HONEYPOT =====
if (!empty($data['website_url'])) {
  echo json_encode(['success' => true]);
  exit;
}

// ===== TIMESTAMP CHECK =====
// ⚠️ TEMPORARY: disabled while verifying email delivery
/*
$submit_time = intval($data['_submit_time'] ?? 0);
if ($submit_time && (time() - $submit_time) < 2) {
    echo json_encode(['success' => true]);
    exit;
}
*/

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$service = trim($data['service'] ?? '');
$phone = trim($data['phone'] ?? '');
$company = trim($data['company'] ?? '');

if (!$name || !$email || strlen($message) < 10) {
  echo json_encode(['success' => false, 'message' => 'Validation failed']);
  exit;
}

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host = $SMTP_HOST;
  $mail->SMTPAuth = true;
  $mail->Username = $SMTP_USER;
  $mail->Password = $SMTP_PASS;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = $SMTP_PORT;

  // ⚠️ TEMPORARY DEBUG (remove later)
  $mail->SMTPDebug = 2;
  $mail->Debugoutput = 'error_log';

  $mail->setFrom($SMTP_USER, 'VCS Website');
  $mail->addAddress($TO_EMAIL);
  $mail->addReplyTo($email, $name);
  $mail->isHTML(true);
  $mail->CharSet = 'UTF-8';
  $mail->Encoding = 'base64';

  $mail->Subject = "New Website Inquiry | VCS";

  $mail->Body = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #e0e0e0;
    }
    .header {
      background: #3A477D;
      color: #ffffff;
      padding: 16px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
      color: #333333;
      font-size: 14px;
    }
    .content h2 {
      color: #3A477D;
      margin-top: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    td {
      padding: 8px 6px;
      border-bottom: 1px solid #eeeeee;
      vertical-align: top;
    }
    .label {
      font-weight: bold;
      width: 160px;
      color: #3A477D;
    }
    .message-box {
      margin-top: 10px;
      background: #f9f9f9;
      padding: 12px;
      border-radius: 4px;
      white-space: pre-wrap;
    }
    .footer {
      background: #f0f0f0;
      padding: 14px;
      text-align: center;
      font-size: 12px;
      color: #555555;
    }
    .footer a {
      color: #3A477D;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">VCS Website Contact Form</div>

    <div class="content">
      <h2>New Inquiry Received</h2>
      <p>You have received a new message via the VCS website contact form.</p>

      <table>
        <tr><td class="label">Name</td><td>' . htmlspecialchars($name) . '</td></tr>
        <tr><td class="label">Email</td><td>' . htmlspecialchars($email) . '</td></tr>
        <tr><td class="label">Phone</td><td>' . htmlspecialchars($phone) . '</td></tr>
        <tr><td class="label">Company</td><td>' . htmlspecialchars($company) . '</td></tr>
        <tr><td class="label">Service Interested</td><td>' . htmlspecialchars($service) . '</td></tr>
      </table>

      <h2 style="margin-top:20px;">Message:</h2>
      <div class="message-box">' . nl2br(htmlspecialchars($message)) . '</div>

      <p style="margin-top:16px; font-size:13px; color:#666;">
        This message was sent from the VCS website contact form.
      </p>
    </div>

    <div class="footer">
      <p>Victoria Computer Services (VCS) | IT Solutions Provider in Seychelles</p>
      <p>Tel: +248 4676000 | <a href="mailto:info@vcs.sc">info@vcs.sc</a> | <a href="https://www.vcs.sc">vcs.sc</a></p>
      <p>Please do not reply to this automated message.</p>
    </div>
  </div>
</body>
</html>';


  $mail->AltBody = $message;

  $mail->send();

  echo json_encode(['success' => true, 'message' => 'Email sent']);
} catch (Exception $e) {
  error_log("Mailer error: " . $mail->ErrorInfo);
  echo json_encode([
    'success' => false,
    'message' => 'Mailer error: ' . $mail->ErrorInfo
  ]);
}
