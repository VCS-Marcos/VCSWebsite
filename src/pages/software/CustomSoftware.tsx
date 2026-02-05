import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Layers, BarChart, Settings, Shield, Zap, Search, PenTool } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";

const CustomSoftware = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-[#F5F7FA]">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="max-w-2xl">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6 border border-burgundy/20">
                                    End-to-End Enterprise Engineering
                                </span>
                                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Custom <span className="text-burgundy">Application</span> Dev
                                </h1>
                                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                    Designing and building software solutions tailored precisely to your business needs, from concept and architecture to deployment and enhancement.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all shadow-xl">
                                        Start Your Project
                                    </Link>
                                    <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-burgundy text-burgundy rounded-full font-bold hover:bg-burgundy/5 transition-all">
                                        View Case Studies
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1500&auto=format&fit=crop"
                                        alt="Development Process"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl font-bold font-display text-[#1A1A1A] mb-6">What We Build</h2>
                            <p className="text-lg text-muted-foreground">Scalable, secure, and high-performance applications designed to solve real operational challenges.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Globe, title: "Web Applications", desc: "Business portals, dashboards, workflow systems, and enterprise platforms tailored for browsers." },
                            { icon: Layers, title: "Desktop Applications", desc: "Robust Windows-based applications for specialized and high-performance business operations." },
                            { icon: Smartphone, title: "Mobile Applications", desc: "Native Android and iOS apps for internal teams or customer-facing engagement." },
                            { icon: Zap, title: "Enterprise Systems", desc: "Large-scale, multi-user systems with complex workflows and multi-site integrations." },
                            { icon: BarChart, title: "Line-of-Business Apps", desc: "Tailored solutions replacing manual or spreadsheet-based processes with automation." },
                            { icon: Shield, title: "Secure Architectures", desc: "Built with security-first practices, data encryption, and role-based access control." }
                        ].map((feature, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="p-10 bg-[#F9FAFB] border border-border rounded-3xl group hover:bg-burgundy hover:text-white transition-all duration-300">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-burgundy group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 font-bold">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                    <p className="opacity-70 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Lifecycle Section */}
            <section className="py-24 bg-muted/30">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">Our Development Cycle</h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: Search, title: "Analysis & Design", desc: "Requirement mapping, process analysis, and user-centric experience design." },
                            { icon: PenTool, title: "Custom Engineering", desc: "Modular, scalable coding using modern technology stacks and secure practices." },
                            { icon: Settings, title: "System Integration", desc: "Connecting with ERP, HRMS, CRM, and third-party APIs for seamless flow." },
                            { icon: Zap, title: "Support & Growth", desc: "On-premise or cloud deployment with ongoing maintenance and feature upgrades." }
                        ].map((step, idx) => (
                            <div key={idx} className="relative group">
                                <ScrollReveal delay={idx * 0.1}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-24 h-24 rounded-[2rem] bg-white border border-border shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-burgundy transition-all duration-300">
                                            <step.icon className="w-10 h-10 text-burgundy" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 font-display">{step.title}</h4>
                                        <p className="text-muted-foreground text-sm px-4">{step.desc}</p>
                                    </div>
                                </ScrollReveal>
                                {idx < 3 && <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5 bg-burgundy/10" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1500&auto=format&fit=crop"
                                    alt="Collaborative Session"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">Why Choose Our Custom Services?</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Deep Domain Expertise", desc: "We build systems that reflect real operational workflows, not generic templates." },
                                        { title: "Fully In-House Team", desc: "Faster turnaround, better quality control, and long-term continuity for your project." },
                                        { title: "Flexible & Scalable", desc: "Solutions that grow and adapt as your organization's business needs change." },
                                        { title: "Long-Term Partnership", desc: "We don't just deliver; we evolve your application through ongoing support." }
                                    ].map((value, idx) => (
                                        <div key={idx} className="flex gap-4 p-6 rounded-3xl hover:bg-muted/50 transition-colors">
                                            <CheckCircle className="w-6 h-6 text-burgundy flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-xl mb-1 font-display">{value.title}</h4>
                                                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding bg-[#1A1A1A] text-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-burgundy to-burgundy-dark p-12 lg:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                        <ScrollReveal>
                            <h2 className="text-4xl sm:text-5xl font-bold font-display mb-10">Start Your Custom <span className="text-white/70">Project</span> Today</h2>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
                                Whether replacing legacy systems or building new customer portals, our team is ready to deliver your mission-critical enterprise system.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-12 py-5 bg-white text-burgundy rounded-full font-bold text-xl hover:bg-white/90 transition-all shadow-xl">
                                    Discuss Your Requirements
                                </Link>
                                <Link to="/contact" className="px-12 py-5 border-2 border-white/30 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                                    Get Pricing
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

export default CustomSoftware;
