import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Server, Database, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/server-solutions.jpg";

const Servers = () => {
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
                                    Enterprise Infrastructure
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Server <span className="text-burgundy">Infrastructure</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Robust, scalable, and secure server solutions designed to power your business applications. From on-premise hardware to hybrid cloud environments, we ensure your data is accessible and resilient.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold">
                                    Discuss Your Needs
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={heroImg}
                                        alt="Server Infrastructure"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24">
                <div className="container-custom text-center mb-16">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-6 text-[#1A1A1A]">Our Server Specializations</h2>
                    </ScrollReveal>
                </div>

                <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Server,
                            title: "Physical Servers",
                            description: "High-performance rack and tower servers for on-site infrastructure."
                        },
                        {
                            icon: Database,
                            title: "Storage Solutions",
                            description: "NAS, SAN, and unified storage to manage your growing data assets."
                        },
                        {
                            icon: Zap,
                            title: "Virtualization",
                            description: "Consolidate workloads and maximize efficiency with VMware or Hyper-V."
                        },
                        {
                            icon: Shield,
                            title: "Backup & Recovery",
                            description: "Bulletproof data protection and disaster recovery planning."
                        }
                    ].map((item, i) => (
                        <ScrollReveal key={item.title} delay={i * 0.1}>
                            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full">
                                <div className="w-14 h-14 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center mb-6 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-3 text-[#1A1A1A]">{item.title}</h3>
                                <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Deep Dive */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal>
                                <h2 className="font-display text-4xl font-bold mb-8 text-[#1A1A1A]">Performance & <span className="text-burgundy">Reliability</span></h2>
                                <div className="space-y-6">
                                    {[
                                        "Customized Hardware Configurations",
                                        "Redundant Power & Cooling Systems",
                                        "Advanced Remote Management Tools",
                                        "ON-Site/Remote Support",
                                        "OS Installation & Optimization",
                                        "Ongoing Maintenance & Patching",
                                        "Scalable Hybrid Cloud Integration"
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-4 h-4 text-burgundy" />
                                            </div>
                                            <span className="text-lg text-slate-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="overflow-hidden rounded-2xl h-48 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" className="h-full w-full object-cover transition-transform duration-500" alt="Circuit" />
                                </div>
                                <div className="overflow-hidden rounded-2xl h-64 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000" className="h-full w-full object-cover transition-transform duration-500" alt="Data" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="overflow-hidden rounded-2xl h-64 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1551703599-6b3e8c7eef12?auto=format&fit=crop&q=80&w=1000" className="h-full w-full object-cover transition-transform duration-500" alt="Tech" />
                                </div>
                                <div className="overflow-hidden rounded-2xl h-48 shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" className="h-full w-full object-cover transition-transform duration-500" alt="Lab" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-8">Ready to Build Your Infrastructure?</h2>
                        <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                            Start Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Servers;
