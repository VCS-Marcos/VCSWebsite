import { Link } from "react-router-dom";
import { Server, Network, Code, Shield, Cctv, Phone, Cloud, Settings, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Server,
    title: "Server Solutions",
    description: "Enterprise-grade server infrastructure setup, maintenance, and optimization for peak performance.",
    href: "/services/servers",
    color: "from-primary to-burgundy-light",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Secure, scalable networking solutions including LAN, WAN, and wireless implementations.",
    href: "/services/networking",
    color: "from-tech-blue to-tech-blue-light",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web apps to enterprise systems.",
    href: "/services/software",
    color: "from-primary to-tech-blue",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, management, and optimization across AWS, Azure, and Google Cloud platforms.",
    href: "/services/cloud",
    color: "from-tech-blue to-primary",
  },
  {
    icon: Cctv,
    title: "CCTV Solutions",
    description: "Comprehensive surveillance systems with advanced analytics and remote monitoring capabilities.",
    href: "/services/cctv",
    color: "from-burgundy-dark to-primary",
  },
  {
    icon: Phone,
    title: "PABX Systems",
    description: "Modern business phone systems with VoIP integration and unified communications.",
    href: "/services/pabx",
    color: "from-primary to-burgundy-dark",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security solutions and monitoring.",
    href: "/services/security",
    color: "from-navy to-primary",
  },
  {
    icon: Settings,
    title: "Managed IT",
    description: "24/7 IT management and support to keep your business running smoothly.",
    href: "/services/managed-it",
    color: "from-primary to-navy",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive IT Solutions for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From infrastructure to software, we provide end-to-end technology solutions that empower your business to thrive in the digital age.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <Link
                to={service.href}
                className="group card-elevated p-6 h-full flex flex-col hover:border-primary/30"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-semibold"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
