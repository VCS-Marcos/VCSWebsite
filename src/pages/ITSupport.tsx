import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Headphones, Settings, Wrench, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ITSupport = () => {
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
                                    Expert Technical Assistance
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Telescopic <span className="text-burgundy">Support</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Reliable technical support whenever you need it. Our dedicated team is ready to solve your IT challenges, from immediate troubleshooting to long-term infrastructure maintenance.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold">
                                    Get Instant Support
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative flex justify-center">
                            <ScrollReveal delay={0.2}>
                                <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
                                        alt="IT Support"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Tiers */}
            <section className="py-24">
                <div className="container-custom grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Clock, title: "Remote Support", text: "Instant technical resolution via secure remote access tools." },
                        { icon: Headphones, title: "On-Site Support", text: "Expert technicians at your location for hardware and complex issues." },
                        { icon: Settings, title: "Regular Maintenance", text: "Scheduled system health checks and optimizations to prevent issues." }
                    ].map((item, i) => (
                        <div key={item.title} className="p-10 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all">
                            <div className="w-14 h-14 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ITSupport;
