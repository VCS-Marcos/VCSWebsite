import { useState } from "react";
import { Link } from "react-router-dom";
import { Printer, FileText, Download, ArrowRight, Phone, Mail, Award, Settings, Headphones, Package, GraduationCap, Wrench, RefreshCw, CreditCard, ZoomIn, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import xeroxPrinter from "@/assets/xerox-printer.jpg";
import xeroxB235 from "@/assets/xerox-b235.png";
import xeroxC325 from "@/assets/xerox-c325.png";
import xeroxB415 from "@/assets/xerox-b415.png";
import xeroxC415 from "@/assets/xerox-c415.png";
import xeroxB7100 from "@/assets/xerox-b7100.png";
import xeroxC7100 from "@/assets/xerox-c7100.png";
import xeroxC8200 from "@/assets/xerox-c8200.png";
import xeroxB8200 from "@/assets/xerox-b8200.png";

const productCategories = [
  {
    title: "Home Office & Small Teams",
    description: "Compact, affordable, and easy-to-use solutions designed to fit into small spaces while delivering professional results.",
    ctaLabel: "Contact Us for Details",
    ctaLink: "/contact",
    products: [
      {
        name: "Xerox B235",
        type: "Black & White MFP",
        description: "Reliable and efficient, perfect for personal or small team use.",
        image: xeroxB235,
        brochureLink: "/brochures/xerox-b235-brochure.pdf"
      },
      {
        name: "Xerox C325",
        type: "Color MFP",
        description: "Vibrant color and cloud connectivity in a footprint that fits anywhere.",
        image: xeroxC325,
        brochureLink: "/brochures/xerox-c325-brochure.pdf"
      },
    ],
  },
  {
    title: "Medium Workgroups",
    description: "Robust performers that balance performance, security, and document management features for growing teams.",
    ctaLabel: "Contact Us for Details",
    ctaLink: "/contact",
    products: [
      {
        name: "Xerox B415",
        type: "Black & White MFP",
        description: "High-productivity mono printer with advanced workflow features.",
        image: xeroxB415,
        brochureLink: "/brochures/xerox-b415-brochure.pdf"
      },
      {
        name: "Xerox C415",
        type: "Color MFP",
        description: "Exceptional color quality and reliability for busy office environments.",
        image: xeroxC415,
        brochureLink: "/brochures/xerox-c415-brochure.pdf"
      },
    ],
  },
  {
    title: "Heavy Duty / Enterprise",
    description: "High-volume powerhouses with advanced finishing, scalability, and security for large scale document production.",
    ctaLabel: "Contact Us for Details",
    ctaLink: "/contact",
    products: [
      {
        name: "Xerox B7100 Series",
        type: "Black & White MFP",
        description: "Enterprise-grade performance with seamless fleet integration.",
        image: xeroxB7100,
        brochureLink: "/brochures/xerox-b7100-brochure.pdf"
      },
      {
        name: "Xerox C7100 Series",
        type: "Color MFP",
        description: "Versatile and secure, designed for high-impact communication.",
        image: xeroxC7100,
        brochureLink: "/brochures/xerox-c7100-brochure.pdf"
      },
      {
        name: "Xerox C8200 Series",
        type: "Color MFP",
        description: "Unmatched color precision and professional-grade finishing.",
        image: xeroxC8200,
        brochureLink: "/brochures/xerox-c8200-brochure.pdf"
      },
      {
        name: "Xerox B8200 Series",
        type: "Digital Press",
        description: "Production-level speeds and quality for the most demanding environments.",
        image: xeroxB8200,
        brochureLink: "/brochures/xerox-b8200-brochure.pdf"
      },
    ],
  },
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
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#F5F7FA] overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  Authorized Xerox Partner
                </span>
                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                  Xerox Document <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  As the exclusive authorized distributor of Xerox products, we bring you world-class printing and document solutions backed by expert support.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/contact"
                    className="btn-primary px-8 py-4 rounded-full font-bold"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img
                  src={xeroxPrinter}
                  alt="Xerox Printer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
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
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Explore Our Products
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Tailored Printing Solutions for Every Need
              </h2>
              <p className="text-lg text-muted-foreground">
                Categorized by usage type to help you find the perfect Xerox model for your workspace.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {productCategories.map((category, catIndex) => (
              <div
                key={category.title}
                id={catIndex === 0 ? "home-office" : catIndex === 1 ? "medium-workgroups" : "heavy-duty"}
                className="relative scroll-mt-32"
              >
                <ScrollReveal>
                  <div className="mb-12 border-b border-border pb-8">
                    <div className="max-w-3xl">
                      <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {category.products.map((product, prodIndex) => (
                    <ScrollReveal key={product.name} delay={prodIndex * 0.1}>
                      <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                        <div
                          className="aspect-[4/3] overflow-hidden relative bg-white p-4 cursor-pointer group/img"
                          onClick={() => setSelectedProduct({ name: product.name, image: product.image })}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold rounded-full shadow-sm border border-border">
                              {product.type}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 flex items-center justify-center transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                              <ZoomIn className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h4 className="font-display text-xl font-bold text-foreground mb-2">
                            {product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                            {product.description}
                          </p>

                          <div className="mt-auto pt-6 border-t border-border">
                            <a
                              href={product.brochureLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold shadow-burgundy group/btn"
                            >
                              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                              Download Brochure
                            </a>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
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

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-none shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video sm:aspect-square md:aspect-video bg-white flex items-center justify-center p-8">
            {selectedProduct && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-w-full max-h-full object-contain"
              />
            )}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-border">
              <p className="font-display font-bold text-foreground">{selectedProduct?.name}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Xerox;
