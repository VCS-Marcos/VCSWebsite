import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Clock, ArrowRight, CheckCircle } from "lucide-react";
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


const About = () => {
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
                About Us
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Your Trusted <span className="text-burgundy">IT Partner</span> Since 1991
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We've been empowering organizations through innovative infrastructure, secure networking, and tailored software solutions for over 35 years.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-burgundy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 35, suffix: "+", label: "Years Experience" },
              { value: 500, suffix: "+", label: "Clients Served" },
              { value: 50, suffix: "+", label: "Team Members" },
              { value: 99.9, suffix: "%", label: "Uptime" },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-4">
                    Our Story
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                    Building Technology Solutions That Matter
                  </h2>
                  <div className="w-20 h-1.5 bg-burgundy rounded-full mb-8" />
                </div>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1991, VCS (Victoria Computer Services Pty Ltd) has grown from a small IT services company to a comprehensive managed service provider. Our journey has been driven by a commitment to delivering exceptional technology solutions that help businesses thrive.
                  </p>
                  <p>
                    Today, we serve over 500 clients across various industries, providing everything from server infrastructure and networking to custom software development and Xerox document solutions.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-burgundy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-1">Our Vision</h4>
                      <p className="text-sm text-muted-foreground">To be the leading IT solutions provider in the region.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-burgundy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-1">Our Mission</h4>
                      <p className="text-sm text-muted-foreground">Empowering businesses through innovative technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500&auto=format&fit=crop"
                      alt="VCS Office Building"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="aspect-square rounded-[2rem] bg-burgundy flex flex-col items-center justify-center p-6 text-white text-center shadow-xl">
                    <p className="text-4xl font-bold mb-2">35+</p>
                    <p className="font-medium opacity-80 uppercase tracking-wider text-xs">Years of Excellence</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square rounded-[2rem] bg-[#F5F7FA] flex items-center justify-center p-8 shadow-inner">
                    <img src="/logos/xerox.png" alt="Xerox Partner" className="w-full h-auto opacity-80" />
                  </div>
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500&auto=format&fit=crop"
                      alt="VCS Team"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
                What Drives Us
              </h2>
              <div className="w-20 h-1.5 bg-burgundy rounded-full mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="group bg-white rounded-3xl p-10 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-burgundy/5 flex items-center justify-center mb-8 group-hover:bg-burgundy transition-all duration-500">
                    <value.icon className="w-8 h-8 text-burgundy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Round 3 */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Background elements for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-burgundy/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-burgundy/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#800020 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="text-left space-y-8">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6">
                    Partner With Excellence
                  </span>
                  <h2 className="font-display text-5xl sm:text-6xl font-bold text-[#1A1A1A] leading-[1.1] mb-8">
                    Ready to Elevate Your <br />
                    <span className="text-burgundy">Business Technology?</span>
                  </h2>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Join 500+ industry leaders who trust VCS for their critical infrastructure,
                  bespoke software, and premium Xerox document solutions.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-burgundy text-white font-bold hover:bg-burgundy-dark transition-all shadow-xl shadow-burgundy/20 hover:scale-105 active:scale-95"
                  >
                    Start a Conversation
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#F5F7FA] text-[#1A1A1A] font-bold border border-border/50 hover:bg-white hover:border-burgundy/30 transition-all hover:scale-105 active:scale-95"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Decorative Visual Element */}
                <div className="aspect-square relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-burgundy/10 via-white to-burgundy/5 border border-burgundy/10 p-1">
                  <div className="absolute inset-0 bg-white rounded-[2.9rem] m-1 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                      <div className="w-24 h-24 rounded-3xl bg-burgundy mb-8 flex items-center justify-center shadow-lg shadow-burgundy/20">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Dedicated Support Team</h4>
                      <p className="text-muted-foreground">Expert assistance available 24/7 for all your technology needs.</p>

                      <div className="grid grid-cols-2 gap-4 w-full mt-10">
                        <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-border/50">
                          <p className="text-3xl font-bold text-burgundy mb-1">99%</p>
                          <p className="text-sm font-medium opacity-70">Client Satisfaction</p>
                        </div>
                        <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-border/50">
                          <p className="text-3xl font-bold text-burgundy mb-1">35+</p>
                          <p className="text-sm font-medium opacity-70">Years of Trust</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating status badges */}
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-2xl border border-border/50 animate-float hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1A1A1A]">Certified Experts</p>
                      <p className="text-[10px] text-muted-foreground uppercase">Global Partners</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-burgundy text-white p-6 rounded-3xl shadow-2xl animate-float-delayed hidden sm:block">
                  <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Trusted By</p>
                  <p className="text-2xl font-bold">500+ Businesses</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
