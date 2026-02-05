import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Server, Network, Code, Shield, Cctv, Phone, Printer, MonitorSmartphone, Cloud, Database, Settings, Headphones, FileText, Users, Building, Award, Mail, MapPin } from "lucide-react";
import logo from "@/assets/vcslogo.png";

const navItems = [
  {
    label: "Solutions",
    href: "/services",
    megaMenu: true,
    sections: [
      {
        title: "Infrastructure",
        items: [
          { label: "Server Solutions", href: "/services/servers", icon: Server, description: "Enterprise server setup & management" },
          { label: "Networking", href: "/services/networking", icon: Network, description: "Secure network infrastructure" },
          { label: "Cloud Services", href: "/services/cloud", icon: Cloud, description: "Cloud migration & management" },
          { label: "Data Centers", href: "/services/data-centers", icon: Database, description: "Data center solutions" },
        ]
      },
      {
        title: "Security & Communication",
        items: [
          { label: "Video Surveillance Solutions", href: "/services/video-surveillance", icon: Cctv, description: "Advanced security camera systems" },
          { label: "Access Control Solutions", href: "/services/access-control", icon: Shield, description: "Secure entry management" },
          { label: "Time & Attendance", href: "/services/time-attendance", icon: MonitorSmartphone, description: "Workforce management solutions" },
          { label: "Telecom Solutions", href: "/services/telecom", icon: Phone, description: "Business phone systems" },
          { label: "Cybersecurity", href: "/services/security", icon: Shield, description: "Protect your digital assets" },
        ]
      },
      {
        title: "Software & Support",
        items: [
          { label: "Software Development", href: "/services/software", icon: Code, description: "Custom software solutions" },
          { label: "Managed IT Services", href: "/services/managed-it", icon: Settings, description: "24/7 IT management" },
          { label: "IT Support", href: "/services/support", icon: Headphones, description: "Technical support services" },
        ]
      }
    ]
  },
  {
    label: "Xerox",
    href: "/xerox",
    megaMenu: true,
    sections: [
      {
        title: "Xerox Products",
        items: [
          { label: "Multifunction Printers", href: "/xerox/multifunction", icon: Printer, description: "All-in-one printing solutions" },
          { label: "Production Printers", href: "/xerox/production", icon: Printer, description: "High-volume printing" },
          { label: "Desktop Printers", href: "/xerox/desktop", icon: MonitorSmartphone, description: "Office & personal printers" },
        ]
      },
      {
        title: "Resources",
        items: [
          { label: "Product Catalog", href: "/xerox/catalog", icon: FileText, description: "Browse all Xerox products" },
          { label: "Brochures & Specs", href: "/xerox/brochures", icon: FileText, description: "Download product brochures" },
        ]
      }
    ]
  },
  {
    label: "Software",
    href: "/software",
    megaMenu: true,
    sections: [
      {
        title: "In-House Solutions",
        items: [
          { label: "VCS HRS", href: "/software/hrs", icon: Users, description: "HR & Payroll Management" },
          { label: "AstroNET", href: "/software/astronet", icon: MapPin, description: "Tour Operations System" },
          { label: "Custom Applications", href: "/software/custom", icon: Code, description: "Tailored software development" },
        ]
      },
      {
        title: "Partner Solutions",
        items: [
          { label: "POS Solutions", href: "/software/pos", icon: MonitorSmartphone, description: "Retail & Retail Management" },
          { label: "Software Licensing", href: "/software/licensing", icon: Award, description: "Authorized brand licensing" },
        ]
      }
    ]
  },
  {
    label: "About Us",
    href: "/about",
    megaMenu: false,
  },
  {
    label: "Contact",
    href: "/contact",
    megaMenu: false,
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-xl shadow-card border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="VCS Logo"
              className="h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${location.pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {item.megaMenu && item.sections && (
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-card rounded-2xl border border-border shadow-card-hover p-6 min-w-[600px]">
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {item.sections.map((section) => (
                              <div key={section.title}>
                                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                  {section.title}
                                </h3>
                                <ul className="space-y-1">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        to={subItem.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted transition-colors group/item"
                                      >
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                          <span className="block text-sm font-medium text-foreground">
                                            {subItem.label}
                                          </span>
                                          <span className="block text-xs text-muted-foreground">
                                            {subItem.description}
                                          </span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-muted text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <Link
                to="/contact"
                className="btn-primary block text-center px-6 py-3 rounded-full text-sm font-semibold mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
