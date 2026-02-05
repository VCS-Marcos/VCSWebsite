import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityPage = () => {
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
                                    Enterprise Cybersecurity
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Advanced <span className="text-burgundy">Security</span>
                                </h1>
                                <p className="text-xl text-gray-700 leading-relaxed mb-10">
                                    Protect your digital assets with our comprehensive cybersecurity solutions. We provide end-to-end protection, from threat detection to incident response, ensuring your business stays resilient.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold">
                                    Request Security Audit
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                                    <img
                                        src="/img/services/cybersecurity.jpg"
                                        alt="Cybersecurity"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-24">
                <div className="container-custom text-center mb-16">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-6 text-[#1A1A1A]">Our Security Pillars</h2>
                    </ScrollReveal>
                </div>

                <div className="container-custom grid md:grid-cols-4 gap-8">
                    {[
                        { icon: Eye, title: "Monitoring", text: "24/7 visibility into your network traffic and behavior." },
                        { icon: Lock, title: "Prevention", text: "Advanced filtering and access controls to block threats." },
                        { icon: AlertTriangle, title: "Detection", text: "AI-driven analysis to identify complex zero-day attacks." },
                        { icon: Shield, title: "Protection", text: "Continuous patching and hardening of your infrastructure." }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all h-full text-center">
                                <div className="w-14 h-14 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Services Include */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-12 text-center text-[#1A1A1A]">Comprehensive Services</h2>
                            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    "Managed Firewall Services",
                                    "Endpoint Protection (EDR)",
                                    "Vulnerability Assessments",
                                    "Security Awareness Training",
                                    "Incident Response Planning",
                                    "Compliance Management",
                                    "Data Loss Prevention (DLP)",
                                    "Identity & Access Management"
                                ].map((text) => (
                                    <div key={text} className="flex items-center gap-4 group">
                                        <CheckCircle className="w-6 h-6 text-burgundy flex-shrink-0" />
                                        <span className="text-lg text-slate-700 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-8">Stay Ahead of Modern Threats</h2>
                        <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                            Consult a Security Expert
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SecurityPage;
