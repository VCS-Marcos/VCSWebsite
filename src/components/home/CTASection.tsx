import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import networkBg from "@/assets/network-bg.jpg";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={networkBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Ready to Transform Your Business?
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="text-gradient-tech">Amazing Together</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Partner with us to leverage cutting-edge technology solutions that drive growth, efficiency, and innovation for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
