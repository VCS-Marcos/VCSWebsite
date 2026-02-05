import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/vcslogo.png";

const footerLinks = {
  solutions: [
    { label: "Server Solutions", href: "/services/servers" },
    { label: "Networking", href: "/services/networking" },
    { label: "Cloud Services", href: "/services/cloud" },
    { label: "Video Surveillance", href: "/services/video-surveillance" },
    { label: "Telecom Solutions", href: "/services/telecom" },
    { label: "Cybersecurity", href: "/services/security" },
  ],
  xerox: [
    { label: "Home Office Printers", href: "/xerox#home-office" },
    { label: "Workgroup Printers", href: "/xerox#medium-workgroups" },
    { label: "Enterprise Solutions", href: "/xerox#heavy-duty" },
    { label: "Authorized Support", href: "/xerox#benefits" },
  ],
  software: [
    { label: "VCS HRS (Payroll)", href: "/software/hrs" },
    { label: "AstroNET (Tourism)", href: "/software/astronet" },
    { label: "POS Solutions", href: "/software/pos" },
    { label: "Custom Development", href: "/software/custom" },
    { label: "Software Licensing", href: "/software/licensing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy text-white/90">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="VCS Logo" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for comprehensive IT solutions. From infrastructure to software development, we deliver excellence.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@vcs.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-burgundy-light" />
                info@vcs.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-burgundy-light" />
                +123 456 7890
              </a>
              <p className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-burgundy-light flex-shrink-0 mt-0.5" />
                123 Tech Street, Innovation City
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Software</h3>
            <ul className="space-y-3">
              {footerLinks.software.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Xerox */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Xerox</h3>
            <ul className="space-y-3">
              {footerLinks.xerox.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} VCS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full bg-white/10 hover:bg-burgundy-light transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
