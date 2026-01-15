import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import xeroxPrinter from "@/assets/xerox-printer.jpg";

const features = [
  "Authorized Exclusive Distributor",
  "Full Product Range Available",
  "Expert Installation & Support",
  "Genuine Parts & Supplies",
  "Training & Consultation",
  "Maintenance Contracts",
];

export const XeroxSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Xerox Partner
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Official Xerox{" "}
                <span className="text-gradient">Authorized Distributor</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As the exclusive authorized distributor of Xerox products in the country, we bring you the complete range of world-class printing and document solutions backed by expert support and genuine supplies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/xerox"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-semibold group"
                >
                  Explore Xerox Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/xerox/brochures"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-semibold"
                >
                  Download Brochures
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-tech-blue/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={xeroxPrinter}
                  alt="Xerox Multifunction Printer"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
                  <p className="text-white font-display font-semibold text-xl">
                    Latest Xerox Products
                  </p>
                  <p className="text-white/70 text-sm">
                    Multifunction printers for every business need
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default XeroxSection;
