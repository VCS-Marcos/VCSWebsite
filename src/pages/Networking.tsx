import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Network, Wifi, ShieldCheck, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Networking = () => {
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
                                    Connectivity for the Modern Office
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Networking <span className="text-burgundy">Solutions</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    A robust network is the backbone of your digital operation. We design, implement, and secure enterprise-grade networking solutions that ensure your team stays connected, no matter where they are.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold">
                                        Request Network Audit
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"
                                        alt="Networking Infrastructure"
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
                <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        {
                            icon: Network,
                            title: "LAN/WAN Design",
                            description: "Custom architecture for local and wide area networks built for speed and redundancy."
                        },
                        {
                            icon: Wifi,
                            title: "Wireless Solutions",
                            description: "Seamless Wi-Fi coverage for large offices, warehouses, and outdoor campus environments."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Network Security",
                            description: "Firewall management, VPN setup, and intrusion prevention to protect your perimeter."
                        },
                        {
                            icon: Globe,
                            title: "SD-WAN",
                            description: "Optimize your connectivity across multiple locations with intelligent traffic management."
                        },
                        {
                            icon: Network,
                            title: "Fiber Optics",
                            description: "High-speed backbone cabling for data centers and high-bandwidth requirements."
                        },
                        {
                            icon: Network,
                            title: "Maintenance",
                            description: "Continuous monitoring and proactive troubleshooting to prevent bottlenecks."
                        }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-burgundy/5 text-burgundy flex items-center justify-center">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#FDFCFB]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-10 text-[#1A1A1A]">Our Network <span className="text-burgundy">Lifecycle</span></h2>
                            <div className="space-y-12">
                                {[
                                    { step: "01", title: "Discovery & Analysis", text: "We survey your site and analyze your current bandwidth usage." },
                                    { step: "02", title: "Design & Planning", text: "Creating a detailed blueprint with redundancy and security at its core." },
                                    { step: "03", title: "Deployment", text: "Professional installation with minimal disruption to your daily operations." },
                                    { step: "04", title: "Management", text: "Ongoing 24/7 monitoring to ensure optimal performance and security." }
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-6 group">
                                        <div className="font-display text-3xl font-bold text-burgundy/20 group-hover:text-burgundy transition-colors">{item.step}</div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-[#1A1A1A]">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551703599-6b3e8c7eef12?auto=format&fit=crop&q=80&w=1500"
                                    alt="Network Lifecycle"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-8">Ready for a Faster, More Secure Network?</h2>
                        <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                            Start Your Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Networking;
