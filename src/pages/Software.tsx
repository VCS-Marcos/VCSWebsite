import { Link } from "react-router-dom";
import { Users, MonitorSmartphone, MapPin, Code, Award, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const softwareProducts = [
  {
    title: "VCS HRS Solution",
    description: "A comprehensive in-house–developed Human Resource & Payroll Solution designed to simplify employee management while ensuring full compliance with local employment regulations.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1500&auto=format&fit=crop",
    features: ["Payroll Processing", "Leave Management", "Statutory Compliance", "Employee Records"],
    href: "/software/hrs",
  },
  {
    title: "Point of Sale (POS) Solution",
    description: "Feature-rich, scalable retail management system designed to streamline sales operations for hospitality, retail, and quick-service businesses.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1500&auto=format&fit=crop",
    features: ["Fast Sales Processing", "Multi-Device Support", "Inventory Control", "Loyalty Systems"],
    href: "/software/pos",
  },
  {
    title: "AstroNET",
    description: "Powerful in-house–developed Inbound Tour Operations Management System that integrates reservations, operations, and accounting into one unified platform.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1500&auto=format&fit=crop",
    features: ["Reservation Management", "Rate Configuration", "Operations Tracking", "B2B Online Portal"],
    href: "/software/astronet",
  },
  {
    title: "Custom Application Development",
    description: "End-to-end custom development services, designing and building software solutions tailored precisely to your unique business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop",
    features: ["Web Applications", "Mobile Applications", "Enterprise Systems", "System Integration"],
    href: "/software/custom",
  },
  {
    title: "Software Licensing",
    description: "Genuine software licenses for globally recognized technology brands, including Sage, QuickBooks, Adobe, Autodesk, and more.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1500&auto=format&fit=crop",
    features: ["Authorized Partner", "License Advisory", "New & Renewals", "Multi-Brand Procurement"],
    href: "/software/licensing",
  },
];

const Software = () => {
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
                In-House & Partner Solutions
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Our <span className="text-burgundy">Software Ecosystem</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From specialized in-house systems like AstroNET and VCS HRS to global authorized software licensing, we provide the technology to power your growth.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Software List */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-32">
            {softwareProducts.map((product, index) => (
              <ScrollReveal key={product.title}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div>
                      <h2 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">
                        {product.title}
                      </h2>
                      <div className="w-20 h-1.5 bg-burgundy rounded-full" />
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 group">
                          <CheckCircle className="w-5 h-5 text-burgundy flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-foreground font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link
                        to={product.href}
                        className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold group"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} group`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={product.image}
                        alt={product.title}
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
              Need a <span className="text-burgundy-light">Custom Solution</span>?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Our development team specializes in building applications tailored to unique business challenges. Let's discuss your requirements.
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

export default Software;
