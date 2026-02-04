import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Phone, Headphones, Globe, Mic, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pabx = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 bg-[#F5F7FA] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/[0.03] rounded-l-[10rem]" />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="max-w-2xl">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6">
                                    Communication Simplified
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    PABX <span className="text-burgundy">Systems</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Modern VoIP and telecommunication systems designed for clear, seamless team communication globally. We provide scalable infrastructure that grows with your business voice requirements.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold text-lg">
                                    Get a Free Quote
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
                                        alt="PABX Systems"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Benefits */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom grid md:grid-cols-3 gap-12">
                    {[
                        { icon: Headphones, title: "HD Audio Quality", text: "Crystal clear voice transmission even across international connections." },
                        { icon: Globe, title: "Global Reach", text: "Scale your communication infrastructure across multiple branches globally." },
                        { icon: Mic, title: "Unified Voice", text: "Integrate with your existing software and collaborative workflows." }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-burgundy text-white rounded-xl flex items-center justify-center shadow-burgundy">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Feature Split */}
            <section className="py-24">
                <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <ScrollReveal>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1500" alt="Meeting" />
                                <div className="absolute inset-0 bg-burgundy/20" />
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="lg:w-1/2">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-8">Powerful Communication Features</h2>
                            <div className="grid gap-6">
                                {[
                                    "IP-PBX & Hosted VoIP Solutions",
                                    "Call Routing & Automated Attendant",
                                    "Conference Calling & Video Integration",
                                    "Mobile App & Softphone Support",
                                    "Call Recording & Quality Monitoring",
                                    "Maintenance & Performance Optimization"
                                ].map((text) => (
                                    <div key={text} className="flex items-center gap-4 group">
                                        <CheckCircle className="w-6 h-6 text-burgundy flex-shrink-0 transition-transform group-hover:scale-125" />
                                        <span className="text-lg text-slate-700 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-8 text-[#1A1A1A]">Empower Your Team Together</h2>
                        <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                            Discuss Communication Needs
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pabx;
