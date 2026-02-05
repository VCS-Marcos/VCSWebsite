import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ManagedIT = () => {
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
                                    24/7 Proactive Support
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Managed IT <span className="text-burgundy">Services</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Focus on growing your business while we handle your technology. Our managed IT services provide proactive monitoring, maintenance, and support to ensure your systems are always running at peak performance.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold">
                                        Book a Consultation
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="/img/services/managed-it.jpg"
                                        alt="Managed IT Services"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Managed IT */}
            <section className="py-24">
                <div className="container-custom text-center mb-16">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-6">Why Partner With Us?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We don't just fix problems; we prevent them. Our proactive approach saves you time, money, and stress.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="container-custom grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Shield,
                            title: "Enhanced Security",
                            description: "Continuous monitoring and threat detection to keep your data safe and compliant."
                        },
                        {
                            icon: Clock,
                            title: "Reduced Downtime",
                            description: "Proactive maintenance ensures your systems stay up and running 24/7/365."
                        },
                        {
                            icon: Users,
                            title: "Expert Support",
                            description: "Access to a full team of IT specialists without the cost of an in-house department."
                        }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="p-10 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all h-full text-center">
                                <div className="w-16 h-16 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy group-hover:text-white transition-colors">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Services Include */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <ScrollReveal>
                                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-10 text-[#1A1A1A]">What's <span className="text-burgundy">Included</span></h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        "24/7 System Monitoring",
                                        "Security Patch Management",
                                        "Backup & Disaster Recovery",
                                        "Help Desk & Remote Support",
                                        "Cloud Infrastructure Management",
                                        "Strategic IT Consulting",
                                        "Vendor Management",
                                        "Annual Technology Audits"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 group">
                                            <CheckCircle className="w-6 h-6 text-burgundy flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-lg text-muted-foreground font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="order-1 lg:order-2 group">
                            <div className="aspect-square rounded-full border-2 border-burgundy/20 p-8 relative overflow-hidden transition-all duration-700 bg-slate-50">
                                <div className="absolute inset-0 bg-burgundy/5 animate-pulse" />
                                <img
                                    src="/img/services/it-team.jpg"
                                    alt="IT Team"
                                    className="rounded-full w-full h-full object-cover shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container-custom bg-burgundy rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32" />

                    <ScrollReveal>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Ready for Peace of Mind?</h2>
                        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                            Contact us today for a free IT assessment and discover how our managed services can transform your operations.
                        </p>
                        <Link to="/contact" className="bg-white text-burgundy px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-3 group">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ManagedIT;
