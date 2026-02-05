import { ArrowRight, CheckCircle, Award, ShieldCheck, HelpCircle, FileText, Globe, ShoppingBag, Landmark, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";

const Licensing = () => {
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
                                    Authorized Software Licensing Partner
                                </span>
                                <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Genuine <span className="text-burgundy">Software</span> Solutions
                                </h1>
                                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                    Access industry-leading tools for accounting, design, engineering, and business productivity with genuine licenses from globally recognized technology brands.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all shadow-xl">
                                        Request a Quote
                                    </Link>
                                    <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-burgundy text-burgundy rounded-full font-bold hover:bg-burgundy/5 transition-all">
                                        Talk to Specialists
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1500&auto=format&fit=crop"
                                        alt="Software Licensing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* International Brands Section */}
            <section className="py-24 bg-white">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold font-display text-[#1A1A1A] mb-4 text-center">International Software Brands We Offer</h2>
                        <p className="text-lg text-muted-foreground mb-16">We procure and support licensed solutions from the world's most trusted software providers.</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                            {[
                                { name: "Sage", url: "/logos/sage.png" },
                                { name: "QuickBooks", url: "/logos/quickbooks.png" },
                                { name: "Adobe", url: "/logos/adobe.svg" },
                                { name: "Autodesk", url: "/logos/autodesk.svg" },
                                { name: "CorelDRAW", url: "/logos/coreldraw.png" }
                            ].map((brand, idx) => (
                                <div key={idx} className="h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                                    <span className="text-2xl font-bold font-display text-muted-foreground">{brand.name}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Software Categories Section */}
            <section className="py-24 bg-muted/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Landmark,
                                title: "Accounting & Business",
                                brands: "Sage | QuickBooks",
                                desc: "Financial accounting, payroll, and tax-ready solutions for small to large enterprises."
                            },
                            {
                                icon: ShoppingBag,
                                title: "Creative & Design",
                                brands: "Adobe | CorelDRAW",
                                desc: "Professional tools for graphic design, illustration, and digital content creation for teams."
                            },
                            {
                                icon: Award,
                                title: "Engineering & CAD",
                                brands: "Autodesk",
                                desc: "Advanced design and modeling solutions for architecture, engineering, and manufacturing."
                            }
                        ].map((category, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="p-10 bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl transition-shadow group h-full">
                                    <div className="w-14 h-14 bg-burgundy/10 text-burgundy rounded-2xl flex items-center justify-center mb-8 group-hover:bg-burgundy group-hover:text-white transition-colors">
                                        <category.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 font-display">{category.title}</h3>
                                    <p className="text-burgundy text-sm font-bold mb-6 uppercase tracking-wider">{category.brands}</p>
                                    <p className="text-muted-foreground leading-relaxed">{category.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Provide Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">What We Provide</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We go beyond procurement. Our licensing experts help you right-size your software investment and manage the entire lifecycle.
                                </p>
                                <div className="grid gap-6">
                                    {[
                                        { title: "Genuine & Compliant Licenses", icon: ShieldCheck },
                                        { title: "Renewals & Version Upgrades", icon: Zap },
                                        { title: "License Advisory & Right-Sizing", icon: HelpCircle },
                                        { title: "Subscription & Perpetual Options", icon: FileText },
                                        { title: "Centralized Brand Procurement", icon: Globe }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                                            <item.icon className="w-6 h-6 text-burgundy" />
                                            <span className="font-bold text-lg font-display">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1500&auto=format&fit=crop"
                                    alt="Licensing Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Buy From Us Section */}
            <section className="py-24 bg-burgundy text-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-4xl font-bold font-display">Why Buy Your Software From Us?</h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    "Single point of contact for multiple global brands",
                                    "Local expertise with international licensing models",
                                    "Assistance with compliance and renewals",
                                    "Bundle licenses with implementation & support"
                                ].map((reason, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <CheckCircle className="w-6 h-6 text-white/40 flex-shrink-0 mt-1" />
                                        <p className="text-lg text-white/80 leading-snug">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 p-10 rounded-[2rem] border border-white/20 flex flex-col justify-center">
                            <p className="text-white/60 text-sm mb-6 leading-relaxed italic">
                                "Sage®, QuickBooks®, Adobe®, Autodesk®, CorelDRAW® and all related product names and logos are trademarks or registered trademarks of their respective owners."
                            </p>
                            <Link to="/contact" className="w-full py-5 bg-white text-burgundy rounded-full font-bold text-lg hover:bg-white/90 transition-all text-center shadow-xl">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Licensing;
