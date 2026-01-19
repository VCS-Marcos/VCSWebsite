import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Clock, Globe, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting partnerships with our clients, understanding their unique needs.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace new technologies and innovative approaches to solve complex challenges.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Our clients count on us for consistent, dependable IT support and solutions.",
  },
];

const milestones = [
  { year: "2009", title: "Company Founded", description: "Started with a vision to deliver quality IT solutions." },
  { year: "2012", title: "Xerox Partnership", description: "Became authorized Xerox distributor." },
  { year: "2015", title: "Software Division", description: "Launched in-house software development." },
  { year: "2018", title: "Cloud Services", description: "Expanded to cloud solutions and managed services." },
  { year: "2022", title: "Regional Expansion", description: "Extended operations across the region." },
  { year: "2024", title: "500+ Clients", description: "Celebrating serving over 500 businesses." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Trusted IT Partner Since 2009
              </h1>
              <p className="text-xl text-white/70">
                We've been empowering businesses with innovative technology solutions for over 15 years.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 500, suffix: "+", label: "Clients Served" },
              { value: 50, suffix: "+", label: "Team Members" },
              { value: 99.9, suffix: "%", label: "Uptime" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Building Technology Solutions That Matter
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2009, VCS has grown from a small IT services company to a comprehensive managed service provider. Our journey has been driven by a commitment to delivering exceptional technology solutions that help businesses thrive.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Today, we serve over 500 clients across various industries, providing everything from server infrastructure and networking to custom software development and Xerox document solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Our Vision</h4>
                      <p className="text-sm text-muted-foreground">To be the leading IT solutions provider in the region.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Our Mission</h4>
                      <p className="text-sm text-muted-foreground">Empowering businesses through innovative technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-primary/40" />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl bg-primary flex items-center justify-center p-6">
                    <p className="text-primary-foreground font-display font-bold text-3xl text-center">15+ Years</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl bg-tech-blue flex items-center justify-center p-6">
                    <p className="text-white font-display font-bold text-3xl text-center">500+ Clients</p>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-subtle flex items-center justify-center">
                    <Award className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="card-elevated p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Key Milestones
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.1}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <div className={`flex-1 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                      <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary hidden lg:block" />
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our IT solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
