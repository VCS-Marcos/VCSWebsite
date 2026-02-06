import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Award, Users } from "lucide-react";
import Counter from "@/components/ui/Counter";

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 35, suffix: "+", label: "Years Experience" },
];

const featureCards = [
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security and reliability",
    variant: "light" as const,
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
    variant: "dark" as const,
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "35+ years of IT excellence and innovation",
    variant: "light" as const,
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  variant: "light" | "dark";
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, variant, delay }: FeatureCardProps) => {
  const isLight = variant === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: isLight
          ? "0 25px 50px -12px rgba(139, 29, 44, 0.2)"
          : "0 25px 50px -12px rgba(139, 29, 44, 0.4)"
      }}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 ${isLight
        ? "bg-white border border-border/50 shadow-card hover:border-burgundy/30 hover:shadow-xl"
        : "bg-gradient-to-br from-primary to-burgundy-dark text-white shadow-lg hover:shadow-2xl"
        }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 ${isLight
        ? "bg-primary/10 group-hover:bg-primary/20"
        : "bg-white/20 group-hover:bg-white/30"
        }`}>
        <Icon className={`w-6 h-6 ${isLight ? "text-primary" : "text-white"}`} />
      </div>
      <h3 className={`font-display font-semibold text-lg mb-2 transition-colors duration-200 ${isLight ? "text-foreground" : "text-white"
        }`}>
        {title}
      </h3>
      <p className={`text-sm transition-colors duration-200 ${isLight ? "text-muted-foreground" : "text-white/80"}`}>
        {description}
      </p>
    </motion.div>
  );
};

const StatCard = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="text-center"
  >
    <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
      <Counter end={value} suffix={suffix} />
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-warm-gray/30">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-tech-blue/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              Authorized Xerox Distributor
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Empowering Your Business with{" "}
              <span className="text-primary">Advanced IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              As a full-service managed IT provider, we deliver comprehensive technology solutions including infrastructure, security, software development, and exclusive Xerox products to drive your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-primary border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={0.5 + index * 0.1}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Top row - 2 cards */}
              <div className="col-span-1 pt-8">
                <FeatureCard {...featureCards[0]} delay={0.3} />
              </div>
              <div className="col-span-1">
                <FeatureCard {...featureCards[1]} delay={0.4} />
              </div>

              {/* Bottom row - 1 card + stat */}
              <div className="col-span-1">
                <FeatureCard {...featureCards[2]} delay={0.5} />
              </div>
              <div className="col-span-1 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(139, 29, 44, 0.2)"
                  }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white to-warm-gray/30 border border-border/50 shadow-card cursor-pointer transition-all duration-200 hover:border-burgundy/20 hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    Certified Partners
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Authorized by global tech leaders
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
