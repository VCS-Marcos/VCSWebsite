import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Cloud, Database, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CloudPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 bg-[#F5F7FA] overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="max-w-2xl">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6">
                                    Scalable Cloud Infrastructure
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Cloud <span className="text-burgundy">Services</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Accelerate your digital transformation with our comprehensive cloud solutions. From migration to management, we help you leverage the power of the cloud to achieve greater agility and scalability.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold text-lg">
                                    Start Your Migration
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                                        alt="Cloud Services"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24">
                <div className="container-custom grid md:grid-cols-3 gap-12">
                    {[
                        { icon: Zap, title: "Agility", text: "Deploy resources in minutes and scale on-demand to meet changing business needs." },
                        { icon: Database, title: "Efficiency", text: "Reduce capital expenditure and only pay for the resources you actually use." },
                        { icon: Shield, title: "Resilience", text: "Built-in redundancy and disaster recovery capabilities for your critical data." }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 h-full text-center">
                                <div className="w-16 h-16 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.text}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-10 text-[#1A1A1A]">Modern <span className="text-burgundy">Cloud Solutions</span></h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    "AWS & Azure Migration",
                                    "Hybrid Cloud Strategies",
                                    "Cloud Cost Optimization",
                                    "Serverless Computing",
                                    "Containerization (Docker/K8s)",
                                    "Cloud Security Audits",
                                    "Managed Database Services",
                                    "DevOps Automation"
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 group">
                                        <CheckCircle className="w-5 h-5 text-burgundy flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-muted-foreground font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1500"
                                alt="Cloud Infrastructure"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CloudPage;
