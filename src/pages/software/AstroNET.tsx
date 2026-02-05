import { ArrowRight, CheckCircle, Globe, Database, Briefcase, FileText, PieChart, Users, Settings, Zap, Layout, CreditCard } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";
import { useState } from "react";

const AstroNET = () => {
    const [activeTab, setActiveTab] = useState("Rates");

    const modules = {
        "Rates": {
            title: "Rate & Contract Management",
            features: [
                "Manage complex net rates, seasons, and markups",
                "Support multiple suppliers, hotels, and tour operators",
                "Supplement management and supplier cost control",
                "Automatic generation of confidential tariffs",
                "Clone rate structures to speed up contract creation"
            ],
            icon: CreditCard
        },
        "Reservations": {
            title: "Reservation Management",
            features: [
                "Full lifecycle management for FIT and Group reservations",
                "Generate Quotations, Pro-forma invoices, and Itineraries",
                "Vouchers and Final invoices/credit notes generation",
                "Reservation status tracking with integrated email logs",
                "Unified dashboard for booking visibility"
            ],
            icon: Layout
        },
        "Operations": {
            title: "Operations & Logistics",
            features: [
                "Automated arrival/departure and transfer lists",
                "Excursion schedules and hotel pick-up handling",
                "Driver and vehicle assignment with tracking",
                "Interfaces for airport representatives",
                "Domestic flight ticketing support"
            ],
            icon: Settings
        },
        "Packages": {
            title: "Package & Promotion Management",
            features: [
                "Combine accommodation, transfers, and excursions into packages",
                "Rule-based promotion creation with guided wizard",
                "Supplier-specific and client-specific promotions",
                "Automated package cost calculation and markup control",
                "Validity management by season and duration"
            ],
            icon: Zap
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-[#F5F7FA]">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="max-w-2xl">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6 border border-burgundy/20">
                                    In-House Inbound Tour Operations Management
                                </span>
                                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    VCS <span className="text-burgundy">AstroNET</span>
                                </h1>
                                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                    A powerful, unified platform that integrates reservations, contracting, operations, and accounting into one seamless tour operations ecosystem.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all shadow-xl">
                                        Request a Demo
                                    </Link>
                                    <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-burgundy text-burgundy rounded-full font-bold hover:bg-burgundy/5 transition-all">
                                        Partner with Us
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1500&auto=format&fit=crop"
                                        alt="Travel Operations"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-House Advantage Section */}
            <section className="py-24 bg-muted/30">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold font-display text-[#1A1A1A] mb-8">Built In-House. Built for Real-World Tour Operations</h2>
                        <div className="max-w-4xl mx-auto space-y-8">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                AstroNET was conceptualized, designed, and developed entirely in-house, allowing us full control over its architecture, scalability, and evolution. This enables us to continuously enhance the platform based on real customer needs.
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                                {[
                                    { icon: Zap, label: "End-to-End Automation" },
                                    { icon: Database, label: "Single Data Entry" },
                                    { icon: CheckCircle, label: "High Accuracy" },
                                    { icon: Globe, label: "Scalable Architecture" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-white rounded-2xl border border-border shadow-sm flex flex-col items-center">
                                        <item.icon className="w-8 h-8 text-burgundy mb-3" />
                                        <span className="font-bold text-sm">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Functional Modules Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-bold font-display text-[#1A1A1A] mb-6">Functional Modules</h2>
                            <p className="text-lg text-muted-foreground">Every component of AstroNET is designed to work in harmony, reducing manual communication and speeding up sales cycles.</p>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(modules).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === key ? "bg-burgundy text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                            >
                                {key}
                            </button>
                        ))}
                    </div>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-[#F9FAFB] border border-border rounded-[3rem] p-12 lg:p-20">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="w-16 h-16 bg-burgundy/10 text-burgundy rounded-2xl flex items-center justify-center mb-8">
                                        {(() => {
                                            const Icon = modules[activeTab as keyof typeof modules].icon;
                                            return <Icon className="w-8 h-8" />;
                                        })()}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-[#1A1A1A]">{modules[activeTab as keyof typeof modules].title}</h3>
                                    <ul className="space-y-4">
                                        {modules[activeTab as keyof typeof modules].features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-burgundy mt-1 flex-shrink-0" />
                                                <span className="text-lg text-muted-foreground leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <div className="absolute inset-0 bg-burgundy/5 pointer-events-none z-10" />
                                        <img
                                            src={
                                                activeTab === "Rates" ? "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1500&auto=format&fit=crop" :
                                                    activeTab === "Reservations" ? "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" :
                                                        activeTab === "Operations" ? "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1500&auto=format&fit=crop" :
                                                            "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop"
                                            }
                                            alt={activeTab}
                                            className="w-full aspect-[4/3] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* B2B Portal Highlight */}
            <section className="py-24 bg-[#1A1A1A] text-white">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <div className="inline-flex p-3 rounded-2xl bg-burgundy/20 text-burgundy-light mb-8">
                            <Globe className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-8">Online B2B Portal Integration</h2>
                        <p className="text-xl text-white/70 max-w-4xl mx-auto mb-12">
                            AstroNET goes beyond internal management with its secure online access for partner tour operators, enabling them to check real-time availability and make live bookings directly.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-8 text-left mb-16">
                            {[
                                { title: "Confidential Rates", desc: "Partners view their specific contracted rates securely." },
                                { title: "Live Availability", desc: "Eliminate back-and-forth emails with real-time room/seat checks." },
                                { title: "Direct Bookings", desc: "Automated entry into the internal AstroNET system." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-bold text-burgundy-light mb-3">{item.title}</h4>
                                    <p className="text-white/60">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Advanced Insights */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">Management & Statistical Insights</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our extensive reporting suite provides over 100 standard reports, offering deep multi-dimensional analysis for informed decision-making.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Track room nights and passenger statistics",
                                        "Revenue analysis by service, client, or market",
                                        "Visual dashboards for quick performance checks",
                                        "Supplier payment and client statement automation",
                                        "Exportable data for external audit systems"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <PieChart className="w-6 h-6 text-burgundy" />
                                            <span className="font-semibold text-lg">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=1500&auto=format&fit=crop"
                                    alt="Analytics Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-burgundy text-white text-center">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-8">Ready to Transform Your <span className="text-white/70">Tour Operations?</span></h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            AstroNET is a proof of our in-house development capability and domain expertise in the travel industry.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-burgundy rounded-full font-bold text-xl hover:bg-white/90 transition-all shadow-xl">
                            Talk to Our Experts
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AstroNET;
