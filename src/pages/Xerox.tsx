import { Link } from "react-router-dom";
import { Printer, FileText, Download, ArrowRight, Phone, Mail, Award, Settings, Headphones, Package, GraduationCap, Wrench, RefreshCw, CreditCard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import xeroxPrinter from "@/assets/xerox-printer.jpg";

const productCategories = [
  {
    title: "Multifunction Printers",
    description: "All-in-one printing, copying, scanning, and faxing solutions for businesses of all sizes.",
    products: [
      { name: "Xerox VersaLink C7100 Series", type: "Color MFP" },
      { name: "Xerox AltaLink C8100 Series", type: "Color MFP" },
      { name: "Xerox PrimeLink C9100 Series", type: "Color MFP" },
      { name: "Xerox VersaLink B7100 Series", type: "Mono MFP" },
    ],
  },
  {
    title: "Production Printers",
    description: "High-volume printing solutions for commercial print operations and enterprise environments.",
    products: [
      { name: "Xerox Iridesse Production Press", type: "Digital Press" },
      { name: "Xerox Versant 4100 Press", type: "Digital Press" },
      { name: "Xerox PrimeLink B9100", type: "Production" },
      { name: "Xerox Nuvera", type: "Production" },
    ],
  },
  {
    title: "Desktop Printers",
    description: "Compact and efficient printers for personal and small office use.",
    products: [
      { name: "Xerox C310", type: "Color Printer" },
      { name: "Xerox B310", type: "Mono Printer" },
      { name: "Xerox C410", type: "Color Printer" },
      { name: "Xerox B410", type: "Mono Printer" },
    ],
  },
];

const brochures = [
  { title: "Multifunction Printers Catalog 2024", size: "2.4 MB" },
  { title: "Production Printing Solutions", size: "3.1 MB" },
  { title: "Desktop Printers Overview", size: "1.8 MB" },
  { title: "Managed Print Services", size: "2.2 MB" },
  { title: "Xerox Supplies & Consumables", size: "1.5 MB" },
];

const benefits = [
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Our team is fully certified to deploy, configure, and maintain complex Xerox environments.",
  },
  {
    icon: Settings,
    title: "Seamless Integration",
    description: "We ensure new hardware integrates perfectly with your existing IT infrastructure and security policies.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "24/7 monitoring and proactive maintenance to keep your print fleet running smoothly.",
  },
  {
    icon: Package,
    title: "Genuine Parts & Supplies",
    description: "Access to authentic Xerox consumables and replacement parts for optimal performance.",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Training",
    description: "End-user and administrator training to maximize productivity with your Xerox solutions.",
  },
  {
    icon: Wrench,
    title: "Maintenance Contracts",
    description: "Flexible service agreements tailored to your business needs and budget requirements.",
  },
  {
    icon: RefreshCw,
    title: "Trade-in Programs",
    description: "Upgrade your old equipment with our competitive trade-in offers and recycling services.",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "Easy payment plans and leasing options to help you acquire the technology you need.",
  },
];

const Xerox = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-warm-gray/30">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-tech-blue/5 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Authorized Xerox Partner
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Xerox Document Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  As the exclusive authorized distributor of Xerox products, we bring you world-class printing and document solutions backed by expert support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="#brochures"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-primary border-2 border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    Download Brochures
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
                <img
                  src={xeroxPrinter}
                  alt="Xerox Printer"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Us for Xerox Products?
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the full benefits of purchasing from an authorized distributor.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.05}>
                <div className="bg-card rounded-2xl border border-border p-6 h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Product Range
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Explore Our Xerox Products
              </h2>
              <p className="text-lg text-muted-foreground">
                From desktop printers to high-volume production presses, we have the right solution for your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <div className="card-elevated p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Printer className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.products.map((product) => (
                      <li key={product.name} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="font-medium text-foreground">{product.name}</span>
                        <span className="text-sm text-muted-foreground">{product.type}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="btn-outline w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
                  >
                    Get Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brochures */}
      <section id="brochures" className="section-padding bg-card">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Resources
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Download Brochures & Specifications
              </h2>
              <p className="text-lg text-muted-foreground">
                Get detailed information about our Xerox products.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {brochures.map((brochure, index) => (
              <ScrollReveal key={brochure.title} delay={index * 0.05}>
                <button className="w-full card-elevated p-6 text-left group hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground mb-1">{brochure.title}</h3>
                      <p className="text-sm text-muted-foreground">PDF • {brochure.size}</p>
                    </div>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Need Help Choosing the Right Xerox Product?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Our Xerox specialists are ready to help you find the perfect solution for your business needs.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send Inquiry
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Xerox;
