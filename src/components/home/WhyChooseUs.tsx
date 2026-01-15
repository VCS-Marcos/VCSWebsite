import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";
import { Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your digital assets 24/7",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Guaranteed reliability with redundant systems and proactive monitoring",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "ISO certified processes with industry-leading best practices",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated specialists with decades of combined experience",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Team Members" },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Your Trusted Partner for{" "}
                <span className="text-gradient">IT Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                With over 15 years of experience, we've helped hundreds of businesses transform their IT infrastructure and achieve their digital goals.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right - Stats Grid */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-8 rounded-2xl ${
                    index % 2 === 0 ? "bg-gradient-subtle" : "bg-primary text-primary-foreground"
                  } ${index === 1 ? "translate-y-8" : ""} ${index === 3 ? "translate-y-8" : ""}`}
                >
                  <div className={`text-4xl sm:text-5xl font-display font-bold mb-2 ${
                    index % 2 === 0 ? "text-foreground" : ""
                  }`}>
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className={`text-sm ${index % 2 === 0 ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
