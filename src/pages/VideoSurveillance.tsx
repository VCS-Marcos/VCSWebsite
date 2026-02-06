import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Cctv, Shield, Smartphone, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/video-surveillance.jpg";

const VideoSurveillance = () => {
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
                                    Intelligent Surveillance
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Video Surveillance <span className="text-burgundy">Solutions</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Protect what matters most with advanced IP-based surveillance systems. Our solutions offer high-definition video, remote monitoring, and intelligent analytics to give you complete peace of mind.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold text-lg">
                                    Free Site Survey
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src={heroImg}
                                        alt="Video Surveillance Solutions"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Monitor,
                            title: "IP-Based High Definition",
                            description: "Crystal clear 4K footage with superior night vision for 24/7 clarity."
                        },
                        {
                            icon: Smartphone,
                            title: "Remote Monitoring",
                            description: "View live feeds and manage alerts from your smartphone or tablet anywhere."
                        },
                        {
                            icon: Shield,
                            title: "Smart Analytics",
                            description: "Facial recognition, motion detection, and object counting features."
                        },
                        {
                            icon: Cctv,
                            title: "Complete Integration",
                            description: "Seamlessly connect with your access control and alarm systems."
                        }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all h-full text-center group">
                                <div className="w-16 h-16 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Banner */}
            <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-slate-100">
                <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight text-[#1A1A1A]">Experience <span className="text-burgundy">Total Control</span> Over Your Premises</h2>
                            <div className="space-y-6">
                                {[
                                    "Cloud-Based Recording & Storage",
                                    "AI-Powered Human & Vehicle Detection",
                                    "Multiple User Access Control",
                                    "Automatic Software Updates",
                                    "Maintenance & Performance Testing",
                                    "Data Privacy & Compliance Alignment"
                                ].map((text) => (
                                    <div key={text} className="flex items-center gap-4 group">
                                        <CheckCircle className="w-6 h-6 text-burgundy flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg text-muted-foreground font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="lg:w-1/2 group">
                        <div className="relative overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 bg-burgundy blur-[100px] opacity-10 animate-pulse pointer-events-none" />
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1500" alt="Tech Setup" className="w-full h-full object-cover shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-slate-50 rounded-[3rem] px-8 py-20 text-center">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-8">Start Protecting Your Business Today</h2>
                            <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                                Contact Security Specialist
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VideoSurveillance;
