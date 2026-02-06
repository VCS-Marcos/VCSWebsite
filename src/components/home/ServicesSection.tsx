import { Link } from "react-router-dom";
import { Server, Network, Code, Shield, Cctv, Phone, Cloud, Settings, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: Server,
    title: "Server Infrastructure",
    description: "Robust cloud, hybrid, and on-premise server management ensuring high availability and data integrity.",
    href: "/services/servers",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamlessly migrate to the cloud or optimize your existing cloud infrastructure with multi-cloud strategies.",
    href: "/services/cloud",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description: "Enterprise-grade network architecture design, implementation, and security for seamless connectivity.",
    href: "/services/networking",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications tailored specifically to your unique business logic and workflows.",
    href: "/services/software",
  },
  {
    icon: Cctv,
    title: "Video Surveillance",
    description: "Advanced IP-based surveillance systems with remote monitoring for comprehensive physical security.",
    href: "/services/video-surveillance",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    description: "Proactive 24/7 monitoring, maintenance, and support for your entire IT ecosystem to minimize downtime.",
    href: "/services/managed-it",
    highlighted: true,
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-[#FDFCFB] relative overflow-hidden">
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
              From infrastructure to software, we provide end-to-end technology solutions that empower your business to thrive.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link
                to={service.href}
                className="group p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300 bg-[#F5E6E8] text-burgundy group-hover:bg-burgundy group-hover:text-white`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="text-burgundy font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-outline inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold"
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
