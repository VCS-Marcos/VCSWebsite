import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Database, Server, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DataCenters = () => {
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
                                    Critical Infrastructure
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Data Center <span className="text-burgundy">Solutions</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Design, build, and manage data center infrastructure that meets your performance and compliance requirements. We provide high-availability environments for your mission-critical applications.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold">
                                    Consult Infrastructure Team
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=2000"
                                        alt="Data Center"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: Database, title: "Colocation", text: "Secure housing for your hardware in our managed facilities." },
                            { icon: Shield, title: "Physical Security", text: "Biometric access and 24/7 surveillance for your equipment." },
                            { icon: Zap, title: "Power Redundancy", text: "UPS and generator backup systems for zero-interruption service." }
                        ].map((item, i) => (
                            <div key={item.title} className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-4 text-[#1A1A1A]">{item.title}</h3>
                                <p className="text-muted-foreground">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DataCenters;
