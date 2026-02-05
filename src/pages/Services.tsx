import { Link } from "react-router-dom";
import { Server, Network, Code, Shield, Cctv, Phone, Cloud, Settings, Database, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import serverRoom from "@/assets/server-room.jpg";

const services = [
  {
    title: "Server Solutions",
    description: "Enterprise-grade server infrastructure setup, maintenance, and optimization. We design and implement robust server environments that power your business operations with reliability and scalability.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1500&auto=format&fit=crop",
    features: ["Server Installation & Configuration", "Virtualization Solutions", "Storage Solutions", "Backup & Recovery"],
    href: "/services/servers",
  },
  {
    title: "Network Infrastructure",
    description: "Build a secure, high-performance network infrastructure that connects your organization. From LAN to WAN, we design networks that scale with your business.",
    image: "/img/services/network-infrastructure.jpg",
    features: ["Network Design & Implementation", "Wireless Solutions", "Network Security", "Performance Optimization"],
    href: "/services/networking",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business requirements. From web applications to enterprise systems, we build software that drives efficiency.",
    image: "/img/services/software-development.jpg",
    features: ["Web Application Development", "Mobile Applications", "Enterprise Systems", "API Development"],
    href: "/services/software",
  },
  {
    title: "Cloud Services",
    description: "Seamlessly migrate to the cloud or optimize your existing cloud infrastructure. We support AWS, Azure, Google Cloud, and hybrid environments.",
    image: "/img/services/cloud-services.jpg",
    features: ["Cloud Migration", "Cloud Management", "Cost Optimization", "Multi-Cloud Strategy"],
    href: "/services/cloud",
  },
  {
    title: "Video Surveillance Solutions",
    description: "Comprehensive surveillance and security camera systems with advanced analytics. Protect your premises with modern monitoring technology.",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=1500&auto=format&fit=crop",
    features: ["IP Camera Systems", "Video Analytics", "Remote Monitoring", "Mobile App Access"],
    href: "/services/video-surveillance",
  },
  {
    title: "Telecom Solutions",
    description: "Modern business communication systems with VoIP integration. Upgrade to unified communications for better collaboration.",
    image: "/img/services/telecom-solutions.jpg",
    features: ["IP PBX Systems", "VoIP Solutions", "Unified Communications", "Call Center Solutions"],
    href: "/services/telecom",
  },
  {
    title: "Access Control Solutions",
    description: "Securely manage and monitor entry to physical spaces with advanced authentication and real-time monitoring.",
    image: "/img/services/access-control.jpg",
    features: ["Biometric Authentication", "Flexible Access Rules", "Centralized Management", "Scalable Architecture"],
    href: "/services/access-control",
  },
  {
    title: "Time & Attendance",
    description: "Automate workforce management and attendance tracking to reduce errors and streamline payroll processes.",
    image: "/img/services/time-attendance.jpg",
    features: ["Automated Tracking", "Shift Management", "Leave Management", "Customizable Reports"],
    href: "/services/time-attendance",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions. From threat detection to incident response, we keep your business safe.",
    image: "/img/services/cybersecurity.jpg",
    features: ["Security Assessments", "Threat Detection", "Incident Response", "Compliance Management"],
    href: "/services/security",
  },
  {
    title: "Managed IT Services",
    description: "24/7 IT management and proactive support to keep your systems running smoothly. Focus on your business while we handle the technology.",
    image: "/img/services/managed-it.jpg",
    features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support", "IT Consulting"],
    href: "/services/managed-it",
  },
  {
    title: "Data Center Solutions",
    description: "Design, build, and manage data center infrastructure that meets your performance and compliance requirements.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1500&auto=format&fit=crop",
    features: ["Data Center Design", "Colocation Services", "Disaster Recovery", "Infrastructure Management"],
    href: "/services/data-centers",
  },
  {
    title: "IT Support",
    description: "Responsive technical support when you need it most. Our expert team is ready to resolve issues quickly and efficiently.",
    image: "/img/services/it-support.jpg",
    features: ["Remote Support", "On-Site Support", "Hardware Support", "Software Support"],
    href: "/services/support",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-burgundy/5 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6">
                Redefining Technology
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Our Specialized <span className="text-burgundy">IT Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering organizations through innovative infrastructure, secure networking, and tailored software solutions designed for the future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <ScrollReveal key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div>
                      <h2 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">
                        {service.title}
                      </h2>
                      <div className="w-20 h-1.5 bg-burgundy rounded-full" />
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 group">
                          <CheckCircle className="w-5 h-5 text-burgundy flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-foreground font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link
                        to={service.href}
                        className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold group"
                      >
                        Explore Detail
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} group`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1A1A1A] text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8">
              Transform Your <span className="text-burgundy-light">Vision</span> Into Reality
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Our experts are ready to design a solution tailored to your unique business needs. Let's build something great together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-burgundy text-white font-bold hover:bg-burgundy-dark transition-all shadow-burgundy hover:scale-105"
            >
              Consult Our Team
              <ArrowRight className="w-6 h-6" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
