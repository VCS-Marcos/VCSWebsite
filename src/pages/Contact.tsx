import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+123 456 7890", "+123 456 7891"],
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vcs.com", "support@vcs.com"],
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Tech Street", "Innovation City, IC 12345"],
    description: "Visit us anytime",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 1pm"],
    description: "Emergency support 24/7",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Warm professional gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-slate-800" />
        
        {/* Abstract communication elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Flowing curves */}
          <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,200 Q250,100 500,200 T1000,200" stroke="white" strokeWidth="1" fill="none" />
            <path d="M0,400 Q250,300 500,400 T1000,400" stroke="white" strokeWidth="1" fill="none" />
            <path d="M0,600 Q250,500 500,600 T1000,600" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-primary-foreground/10 rounded-full blur-[80px]" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-[0.08]" />
        
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 mx-auto">
                <Mail className="w-4 h-4" />
                Contact Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-foreground">{detail}</p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Get in Touch
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="+123 456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="servers">Server Solutions</option>
                      <option value="networking">Networking</option>
                      <option value="software">Software Development</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="cctv">CCTV Solutions</option>
                      <option value="pabx">PABX Systems</option>
                      <option value="xerox">Xerox Products</option>
                      <option value="managed-it">Managed IT</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold disabled:opacity-70"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12 h-full">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Why Work With Us?
                </h3>
                <ul className="space-y-6">
                  {[
                    { title: "15+ Years Experience", description: "Trusted by 500+ businesses across various industries." },
                    { title: "24/7 Support", description: "Round-the-clock technical support for critical issues." },
                    { title: "Certified Experts", description: "Our team holds certifications from leading technology vendors." },
                    { title: "Custom Solutions", description: "Tailored IT solutions designed for your specific needs." },
                    { title: "Competitive Pricing", description: "Enterprise-grade solutions at competitive rates." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Map Integration Available</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
