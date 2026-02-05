import { ArrowRight, CheckCircle, Shield, Users, Clock, CreditCard, FileText, BarChart, Settings, Lock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";

const HRS = () => {
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
                                    In-House Developed HR & Payroll Solution
                                </span>
                                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    VCS <span className="text-burgundy">HRS</span>
                                </h1>
                                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                    A comprehensive in-house–developed Human Resource & Payroll Solution designed to simplify employee management while ensuring full compliance with local employment regulations.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold transform hover:scale-105 transition-all shadow-xl">
                                        Request a Demo
                                    </Link>
                                    <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-burgundy text-burgundy rounded-full font-bold hover:bg-burgundy/5 transition-all">
                                        Talk to Our Team
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1500&auto=format&fit=crop"
                                        alt="VCS HRS Interface"
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
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
                                <img
                                    src="https://images.unsplash.com/photo-1600880212340-02d956ea0430?q=80&w=1500&auto=format&fit=crop"
                                    alt="HR Professionals Working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-8">
                                <div className="inline-flex p-3 rounded-2xl bg-burgundy/10 text-burgundy mb-4">
                                    <Settings className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">Built In-House for Compliance, Accuracy & Ease of Use</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    VCS HRS has been designed and developed entirely in-house, giving us complete control over regulatory compliance, system security, and functional enhancements. This allows us to quickly adapt the system to evolving employment laws and customer-specific requirements, while maintaining a user-friendly and reliable platform.
                                </p>
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm">
                                    <Shield className="w-10 h-10 text-burgundy mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Deep Compliance Expertise</h4>
                                        <p className="text-muted-foreground italic">"OWNING THE COMPLETE DEVELOPMENT LIFECYCLE MEANS WE DELIVER A SOLUTION THAT IS RELIABLE, ADAPTABLE, AND BUILT AROUND REAL OPERATIONAL NEEDS."</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Feature Grid Section */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl font-bold font-display text-[#1A1A1A] mb-6">Core Features & Capabilities</h2>
                            <p className="text-lg text-muted-foreground">Automating payroll, leave management, and employee administration so you can focus on your people.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: CreditCard, title: "Payroll Processing", desc: "Fully compliant with local tax regulations, statutory deductions, pensions, and commissions." },
                            { icon: Users, title: "Employee Management", desc: "Manage casual, contract, and permanent employees with centralized records and history." },
                            { icon: BarChart, title: "Allowances & Benefits", desc: "Configurable rules for different employee categories, benefits, and automated calculations." },
                            { icon: Lock, title: "Deductions & Loans", desc: "Flexible management of absenteeism, advances, and employee loans within payroll cycles." },
                            { icon: Clock, title: "Leave Management", desc: "Workflow-based leave requests, approval tracking, and automatic payroll impact integration." },
                            { icon: FileText, title: "Reporting & Compliance", desc: "XML uploads for statutory bodies, multi-currency support, and detailed management analysis." }
                        ].map((feature, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="p-10 bg-[#F9FAFB] rounded-3xl border border-border hover:shadow-xl transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-burgundy group-hover:text-white transition-colors duration-300">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Reporting & Insights */}
            <section className="py-24 bg-muted/30">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold font-display text-[#1A1A1A]">Reporting & Management Insights</h2>
                                <p className="text-lg text-muted-foreground">
                                    Gain complete visibility into your workforce costs and compliance status with our powerful reporting suite.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Automated payslip generation & distribution",
                                        "Detailed payroll summaries by department",
                                        "Employee cost analysis and cost centers",
                                        "Exportable compliance & statutory reports",
                                        "Audit-ready logs and historical tracking"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-burgundy/10 flex items-center justify-center">
                                                <CheckCircle className="w-4 h-4 text-burgundy" />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="bg-white p-4 rounded-[2rem] shadow-2xl border border-border overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=1500&auto=format&fit=crop"
                                    alt="Payroll Reporting Dashboard"
                                    className="w-full h-auto rounded-2xl"
                                />
                                <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-sm font-medium text-muted-foreground px-4 pb-4">
                                    <span>VCS HRS Reporting Engine</span>
                                    <div className="flex items-center gap-2 text-burgundy">
                                        <div className="w-2 h-2 bg-burgundy rounded-full animate-pulse" />
                                        <span>Live Analysis</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose VCS HRS */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-[#1A1A1A] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-burgundy/10 skew-x-12 transform translate-x-1/2" />
                        <div className="relative z-10 grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <h2 className="text-4xl font-bold font-display mb-6">Why Choose VCS HRS?</h2>
                                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                                    VCS HRS demonstrates our in-house application development expertise and our deep understanding of HR, payroll, and compliance requirements. By owning the complete development lifecycle, we deliver a solution that is reliable, adaptable, and built around real operational needs — not generic templates.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <CheckCircle className="w-6 h-6 text-burgundy-light" />
                                        <span className="font-semibold text-lg">Local Compliance Ready</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <CheckCircle className="w-6 h-6 text-burgundy-light" />
                                        <span className="font-semibold text-lg">Secure & Multi-user</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-burgundy text-white rounded-full font-bold text-xl hover:bg-burgundy-dark transition-all shadow-burgundy text-center">
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HRS;
