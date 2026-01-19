import { Link } from "react-router-dom";
import { Server, Network, Code, Shield, Cctv, Phone, Cloud, Settings, Database, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import serverRoom from "@/assets/server-room.jpg";

const services = [
  {
    icon: Server,
    title: "Server Solutions",
    description: "Enterprise-grade server infrastructure setup, maintenance, and optimization. We design and implement robust server environments that power your business operations with reliability and scalability.",
    features: ["Server Installation & Configuration", "Virtualization Solutions", "Storage Solutions", "Backup & Recovery"],
    href: "/services/servers",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Build a secure, high-performance network infrastructure that connects your organization. From LAN to WAN, we design networks that scale with your business.",
    features: ["Network Design & Implementation", "Wireless Solutions", "Network Security", "Performance Optimization"],
    href: "/services/networking",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business requirements. From web applications to enterprise systems, we build software that drives efficiency.",
    features: ["Web Application Development", "Mobile Applications", "Enterprise Systems", "API Development"],
    href: "/services/software",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Seamlessly migrate to the cloud or optimize your existing cloud infrastructure. We support AWS, Azure, Google Cloud, and hybrid environments.",
    features: ["Cloud Migration", "Cloud Management", "Cost Optimization", "Multi-Cloud Strategy"],
    href: "/services/cloud",
  },
  {
    icon: Cctv,
    title: "CCTV Solutions",
    description: "Comprehensive surveillance and security camera systems with advanced analytics. Protect your premises with modern monitoring technology.",
    features: ["IP Camera Systems", "Video Analytics", "Remote Monitoring", "Access Control Integration"],
    href: "/services/cctv",
  },
  {
    icon: Phone,
    title: "PABX Systems",
    description: "Modern business communication systems with VoIP integration. Upgrade to unified communications for better collaboration.",
    features: ["IP PBX Systems", "VoIP Solutions", "Unified Communications", "Call Center Solutions"],
    href: "/services/pabx",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions. From threat detection to incident response, we keep your business safe.",
    features: ["Security Assessments", "Threat Detection", "Incident Response", "Compliance Management"],
    href: "/services/security",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description: "24/7 IT management and proactive support to keep your systems running smoothly. Focus on your business while we handle the technology.",
    features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support", "IT Consulting"],
    href: "/services/managed-it",
  },
  {
    icon: Database,
    title: "Data Center Solutions",
    description: "Design, build, and manage data center infrastructure that meets your performance and compliance requirements.",
    features: ["Data Center Design", "Colocation Services", "Disaster Recovery", "Infrastructure Management"],
    href: "/services/data-centers",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "Responsive technical support when you need it most. Our expert team is ready to resolve issues quickly and efficiently.",
    features: ["Remote Support", "On-Site Support", "Hardware Support", "Software Support"],
    href: "/services/support",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background with image texture */}
        <div className="absolute inset-0">
          <img src={serverRoom} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-primary/80" />
        </div>
        
        {/* Animated geometric patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] border border-white/10 rounded-full" />
          <div className="absolute top-1/4 -right-10 w-[400px] h-[400px] border border-white/5 rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-tech-blue/15 rounded-full blur-[120px]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Our Solutions
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comprehensive IT Solutions for Your Business
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                From infrastructure to software, we deliver end-to-end technology solutions that power your success.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ScrollReveal key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-tech-blue/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                      <service.icon className="w-32 h-32 text-primary/20" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your IT needs and discover how we can help transform your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
