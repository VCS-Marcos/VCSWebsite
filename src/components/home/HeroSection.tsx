import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark gradient background with image texture */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-primary/80" />
      </div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] border border-white/5 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-tech-blue/15 rounded-full blur-[150px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.05]" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Authorized Xerox Distributor
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Empowering Your Business with{" "}
              <span className="text-gradient-tech">Advanced IT</span>{" "}
              Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              As a full-service managed IT provider, we deliver comprehensive technology solutions including infrastructure, security, software development, and exclusive Xerox products to drive your business forward.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white text-primary hover:bg-white/90 transition-all shadow-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
