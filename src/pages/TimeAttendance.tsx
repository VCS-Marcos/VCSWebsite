import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Clock, Calendar, FileText, Settings, ArrowRight, Zap, Bell, Database, Users } from "lucide-react";
import { Link } from "react-router-dom";

const TimeAttendance = () => {
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
                                    Automated Workforce Management
                                </span>
                                <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                                    Time & <span className="text-burgundy">Attendance</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    Our Time & Attendance Management Solution is designed to automate and streamline employee attendance tracking across organizations of all sizes. Replaces manual processes, reduces errors, and provides accurate data for payroll.
                                </p>
                                <Link to="/contact" className="btn-primary px-8 py-4 rounded-full font-bold text-lg">
                                    Get a Quote
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="relative">
                            <ScrollReveal delay={0.2}>
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                                    <img
                                        src="/img/services/time-attendance.jpg"
                                        alt="Time & Attendance Solutions"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-burgundy/5 pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold mb-4">Key Features</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Precision tools designed to handle complex attendance requirements.</p>
                        </div>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, title: "Automated Tracking", text: "Records employee check-ins and check-outs with precision." },
                            { icon: Settings, title: "Flexible Policies", text: "Define attendance rules tailored to departments and shifts." },
                            { icon: Calendar, title: "Shift Management", text: "Create and manage multiple shifts, breaks, and overtime rules." },
                            { icon: Users, title: "Leave Management", text: "Track leave applications, balances, and approvals with ease." }
                        ].map((item, i) => (
                            <ScrollReveal key={item.title} delay={i * 0.1}>
                                <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all h-full group">
                                    <div className="w-14 h-14 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-burgundy/5 skew-x-12" />
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold mb-4">How It Works</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {[
                            { step: "01", icon: Zap, title: "Capture Data", text: "Employees clock in/out using biometric, RFID, PIN, or mobile app." },
                            { step: "02", icon: Settings, title: "Process Rules", text: "Attendance data is processed based on shifts, policies, and leave entitlements." },
                            { step: "03", icon: FileText, title: "Generate Insights", text: "Managers access dashboards, reports, and alerts for payroll processing." }
                        ].map((item, i) => (
                            <div key={item.title} className="text-center relative">
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-white/5">{item.step}</span>
                                <div className="w-20 h-20 bg-burgundy rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h2 className="font-display text-4xl font-bold mb-8">Benefits of Our Solution</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Accurate Payroll Data", desc: "Reduces manual effort and errors in salary calculations." },
                                    { title: "Improved Productivity", desc: "Automates attendance workflows and reduces administrative tasks." },
                                    { title: "Real-Time Visibility", desc: "Live monitoring of attendance and exceptions." },
                                    { title: "Multi-Location Support", desc: "Works for single offices or remote sites and diverse work patterns." },
                                    { title: "Better Compliance", desc: "Supports record maintenance for auditing and regulatory needs." }
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1A1A1A]">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1500&auto=format&fit=crop" alt="Workforce Management" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <p className="text-lg font-bold">"Seamlessly connect with payroll, HRMS, and ERP systems."</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <h2 className="font-display text-4xl font-bold mb-8">Automate Your Attendance Today</h2>
                        <Link to="/contact" className="btn-primary px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 group">
                            Request a Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TimeAttendance;
