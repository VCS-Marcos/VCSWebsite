import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Shield, Users, Monitor, Lock, ArrowRight, Zap, Bell, Database, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const AccessControl = () => {
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
                                    Secure Entry Management
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Access Control <span className="text-burgundy">Solutions</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Our Access Control Solution helps organizations securely manage and monitor entry to physical spaces. It ensures that only authorized individuals can access specific areas, based on predefined rules such as identity, location, and time.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold text-lg">
                                    Request a Demo
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="/img/services/access-control.jpg"
                                        alt="Access Control Solutions"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* What the Solution Includes */}
            <section className="py-24">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold mb-4">What the Solution Includes</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Advanced technology combining authentication, monitoring, and centralized management.</p>
                        </div>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Multi-Factor Authentication",
                                description: "Supports biometric authentication (face, fingerprint), access cards, PINs, mobile credentials, and QR codes."
                            },
                            {
                                icon: Lock,
                                title: "Flexible Access Rules",
                                description: "Control access based on users, departments, zones, schedules, and security policies."
                            },
                            {
                                icon: Monitor,
                                title: "Centralized Management",
                                description: "Manage doors, users, and permissions across one or multiple locations from a single interface."
                            },
                            {
                                icon: Zap,
                                title: "Scalable Architecture",
                                description: "Suitable for growing organizations, supporting large numbers of users, devices, and access points."
                            },
                            {
                                icon: Shield,
                                title: "Secure Communication",
                                description: "Encrypted data transfer ensures high levels of system and data security."
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={item.title} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all h-full group">
                                    <div className="w-14 h-14 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <ScrollReveal>
                                <h2 className="font-display text-4xl font-bold mb-8">How It Works</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Access is granted or denied based on who the user is, where they are trying to enter, and when the access request is made. Each access event is logged in real time, allowing administrators to track activity.
                                </p>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-2"><Users className="w-6 h-6 text-burgundy" /></div>
                                            <span className="text-xs font-bold uppercase">Credential</span>
                                        </div>
                                        <ArrowRight className="text-slate-300" />
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-2"><Lock className="w-6 h-6 text-burgundy" /></div>
                                            <span className="text-xs font-bold uppercase">Authentication</span>
                                        </div>
                                        <ArrowRight className="text-slate-300" />
                                        <div className="text-center">
                                            <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-2"><CheckCircle className="w-6 h-6 text-burgundy" /></div>
                                            <span className="text-xs font-bold uppercase">Granted / Denied</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="order-1 lg:order-2">
                            <ScrollReveal delay={0.2}>
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img src="/img/services/access-flow.jpg" alt="Access Flow" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Security Features */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-8">Advanced Security Features</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Anti-Passback", desc: "Prevents credential misuse by requiring an exit before the same entry can be used again." },
                                    { title: "Man-Trap and Two-Person Rules", desc: "Enhanced security for high-risk areas requiring multiple points of verification." },
                                    { title: "First-In / Dead-Man Zone Rules", desc: "Controlled access environments for maximum safety and accountability." },
                                    { title: "Zone-Based Occupancy Tracking", desc: "Know exactly who is inside your facility and where they are at all times." },
                                    { title: "Time-Based Permissions", desc: "Automatically manage access based on shifts, holidays, or specific time windows." }
                                ].map((feature) => (
                                    <div key={feature.title} className="flex gap-4 group">
                                        <CheckCircle className="w-6 h-6 text-burgundy flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A1A1A]">{feature.title}</h4>
                                            <p className="text-muted-foreground">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
                                <Shield className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                                <h3 className="text-2xl font-bold mb-6">Real-Time Monitoring & Alerts</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <Bell className="w-6 h-6 text-burgundy-light mb-2" />
                                        <h4 className="font-bold text-sm">Instant Alerts</h4>
                                        <span className="text-xs text-white/60">Email, SMS, & WhatsApp</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <Monitor className="w-6 h-6 text-burgundy-light mb-2" />
                                        <h4 className="font-bold text-sm">Live Status</h4>
                                        <span className="text-xs text-white/60">Door status & occupancy</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <Database className="w-6 h-6 text-burgundy-light mb-2" />
                                        <h4 className="font-bold text-sm">Detailed Logs</h4>
                                        <span className="text-xs text-white/60">Full audit trails</span>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <Cpu className="w-6 h-6 text-burgundy-light mb-2" />
                                        <h4 className="font-bold text-sm">Integrations</h4>
                                        <span className="text-xs text-white/60">CCTV & Fire Systems</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Seamless Integrations */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-16">Seamless Integrations</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { title: "Video Surveillance", icon: Monitor },
                                { title: "Fire Alarms", icon: Bell },
                                { title: "Turnstiles", icon: Lock },
                                { title: "ERP Systems", icon: Database }
                            ].map((item) => (
                                <div key={item.title} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <item.icon className="w-10 h-10 text-burgundy mx-auto mb-4" />
                                    <h4 className="font-bold">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="bg-navy rounded-[3rem] px-8 py-20 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy/10 blur-[100px]" />
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-8">Ready to Secure Your Premises?</h2>
                            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                                Implementing this solution ensures enhanced security, operational efficiency, and centralized control for your organization.
                            </p>
                            <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                                Talk to Our Experts
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

export default AccessControl;
