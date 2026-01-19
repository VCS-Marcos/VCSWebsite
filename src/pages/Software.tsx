import { Link } from "react-router-dom";
import { Code, Monitor, Smartphone, Database, Cloud, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const solutions = [
  {
    icon: Monitor,
    title: "Enterprise Resource Planning (ERP)",
    description: "Comprehensive ERP solutions to streamline your business operations, from inventory to finance.",
    features: ["Inventory Management", "Financial Accounting", "HR Management", "Supply Chain"],
  },
  {
    icon: Database,
    title: "Customer Relationship Management",
    description: "CRM solutions that help you build stronger customer relationships and drive sales growth.",
    features: ["Sales Pipeline", "Customer Analytics", "Marketing Automation", "Support Tickets"],
  },
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Tailored web applications built to address your specific business challenges and workflows.",
    features: ["Responsive Design", "API Integrations", "Real-time Features", "Secure Authentication"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that extend your business reach to mobile users.",
    features: ["iOS & Android", "Offline Support", "Push Notifications", "GPS & Location"],
  },
  {
    icon: Cloud,
    title: "Cloud-Based Solutions",
    description: "Modern cloud applications with scalability, reliability, and accessibility built-in.",
    features: ["Auto-scaling", "High Availability", "Data Backup", "Global CDN"],
  },
];

const technologies = [
  "React", "Node.js", "Python", ".NET", "Java", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes", "TypeScript"
];

const Software = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Tech-inspired dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-tech-blue/80 to-slate-800" />
        
        {/* Code-inspired background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating code brackets */}
          <div className="absolute top-32 left-20 text-[200px] font-mono text-white/5 select-none">&lt;/&gt;</div>
          <div className="absolute bottom-20 right-20 text-[150px] font-mono text-white/5 select-none">{ }</div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-tech-blue/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
        
        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue/20 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue/20 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Software Solutions
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                In-House Software Development
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                We build custom software solutions that solve real business problems. From enterprise applications to mobile apps, our team delivers excellence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white text-slate-900 hover:bg-white/90 transition-all shadow-lg group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Technologies */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-muted-foreground text-sm font-medium mr-4">Technologies we use:</span>
              {technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Software Solutions We Deliver
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to deployment, we build software that drives business value.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-tech-blue/10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                      <solution.icon className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How We Deliver Your Software
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your requirements and define the project scope." },
              { step: "02", title: "Design", description: "Our team creates wireframes and prototypes for your approval." },
              { step: "03", title: "Development", description: "We build your solution using agile methodology with regular updates." },
              { step: "04", title: "Deployment", description: "We deploy, test, and provide ongoing support for your solution." },
            ].map((phase, index) => (
              <ScrollReveal key={phase.step} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-display font-bold text-primary/10 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Have a Software Project in Mind?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with custom software solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Software;
