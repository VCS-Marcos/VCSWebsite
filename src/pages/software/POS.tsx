import { ArrowRight, CheckCircle, MonitorSmartphone, ShoppingCart, BarChart3, Users, Zap, Languages, Printer, CreditCard, ShieldCheck, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";

const POS = () => {
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
                                    POS & Retail Management Solution
                                </span>
                                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Smart <span className="text-burgundy">Retail</span> Sales
                                </h1>
                                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                    A feature-rich, scalable POS system designed to streamline sales operations for hospitality, retail, and quick-service businesses.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all shadow-xl">
                                        Request a Demo
                                    </Link>
                                    <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-burgundy text-burgundy rounded-full font-bold hover:bg-burgundy/5 transition-all">
                                        View Pricing Plans
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1500&auto=format&fit=crop"
                                        alt="POS Terminal"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <div className="inline-flex p-3 rounded-2xl bg-burgundy/10 text-burgundy mb-4">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold font-display text-[#1A1A1A] mb-6">Key Capabilities</h2>
                            <p className="text-lg text-muted-foreground">Comprehensive features focused on transaction speed, inventory control, and operational efficiency.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: ShoppingCart, title: "Fast Sales Processing", desc: "Efficiently handle transactions in cafes, restaurants, retail shops, and more." },
                            { icon: MonitorSmartphone, title: "Multi-Device Support", desc: "Works on Windows PCs, tablets, handheld devices (iPads), and dedicated POS terminals." },
                            { icon: Languages, title: "Multilingual Interface", desc: "System supports multiple languages concurrently for diverse staff environments." },
                            { icon: Printer, title: "Hardware Compatible", desc: "Runs on standard retail hardware including barcode scanners, printers, and scales." },
                            { icon: CreditCard, title: "Integrated Payments", desc: "Process credit card transactions directly without needing separate terminals." },
                            { icon: Users, title: "Loyalty System", desc: "Build loyalty with credit-based rewards and bonus promotions automatically." },
                            { icon: Tag, title: "Stock Level Alerts", desc: "View and manage inventory with visual stock indicators in real time at the point of sale." },
                            { icon: ShieldCheck, title: "Photo ID Confirmation", desc: "Match user images at login to prevent unauthorized use and enhance security." },
                            { icon: BarChart3, title: "Advanced Reporting", desc: "Secure audit trails and extensive reporting options for management insights." }
                        ].map((feature, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="p-8 bg-[#F9FAFB] rounded-3xl border border-border hover:border-burgundy/30 transition-all duration-300">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-burgundy">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-muted/30">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold font-display text-[#1A1A1A] mb-8">How It Works</h2>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-16">
                            This solution centralizes your sales ecosystem by capturing each transaction at the point of sale and connecting it with inventory, customer accounts, kitchen operations, and reporting tools.
                        </p>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-5 gap-4 items-center mb-16">
                        {[
                            { step: "Order", desc: "Capture Sale" },
                            { step: "Process", desc: "Verify Items" },
                            { step: "Payment", desc: "Secure Checkout" },
                            { step: "Update", desc: "Stock Tracking" },
                            { step: "Report", desc: "Insights" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                                    {idx + 1}
                                </div>
                                <h4 className="font-bold text-[#1A1A1A]">{item.step}</h4>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                {idx < 4 && <div className="hidden lg:block absolute left-[calc(20%*(idx+1))] top-[50%] w-0.5 h-0 bg-transparent" />}
                            </div>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-border">
                            <p className="text-xl italic text-muted-foreground">
                                "The system supports mixed hardware environments — from countertop terminals to handheld devices — enabling seamless order capture and fulfillment across multiple areas or departments."
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Business Value Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">Business Benefits</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Faster Transactions", desc: "Intuitive UI and fast hardware support boost service speed." },
                                        { title: "Lower Operational Costs", desc: "Runs on existing hardware and eliminates separate terminals." },
                                        { title: "Reduced Errors & Fraud", desc: "Weight verification and photo ID confirmation enhance accuracy." },
                                        { title: "Improved Engagement", desc: "Loyalty features and customer displays encourage repeat business." },
                                        { title: "Better Inventory Control", desc: "Real-time alerts and integration with procurement systems." }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                                                <p className="text-muted-foreground">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1500&auto=format&fit=crop"
                                    alt="Restaurant Operations"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-[#1A1A1A] text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-8">Ready to Streamline Your <span className="text-burgundy-light">Sales</span>?</h2>
                        <p className="text-xl text-white/60 mb-12">
                            Join hundreds of businesses using our POS solution to optimize their retail and hospitality operations.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" className="px-12 py-5 bg-burgundy text-white rounded-full font-bold text-lg hover:bg-burgundy-dark transition-all shadow-burgundy">
                                Request a Demo
                            </Link>
                            <Link to="/contact" className="px-12 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default POS;
