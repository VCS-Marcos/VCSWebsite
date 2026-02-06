import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+248 4676000"],
    description: "Mon-Fri from 8am to 4:30pm",
    href: "tel:+2484676000",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vcsinet.com", "sales@vcsinet.com"],
    description: "We reply within 24 hours",
    href: "mailto:info@vcsinet.com",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["VCS Building, Le Chantier", "Victoria, Seychelles"],
    description: "Visit us anytime",
    href: "https://www.google.com/maps/search/?api=1&query=VCS+Building+Le+Chantier+Victoria+Seychelles",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8am - 4:30pm", "Sat: 9am - 12pm"],
    description: "Closed on Sundays",
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
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#F5F7FA]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-burgundy/5 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-6">
                Contact Us
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Let's Start a <span className="text-burgundy">Conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind or need technical support? We're here to help. Reach out to the VCS team today.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white border-b border-border/50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? "_blank" : undefined}
                    rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block group p-8 rounded-3xl hover:bg-[#F5F7FA] transition-all duration-300 border border-transparent hover:border-border/50 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-burgundy/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-all duration-500">
                      <info.icon className="w-8 h-8 text-burgundy group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-[#1A1A1A] font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">{info.description}</p>
                  </a>
                ) : (
                  <div className="p-8 rounded-3xl hover:bg-[#F5F7FA] transition-all duration-300 border border-transparent hover:border-border/50 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-burgundy/5 flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                      <info.icon className="w-8 h-8 text-burgundy" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#1A1A1A] mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-[#1A1A1A] font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">{info.description}</p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            <ScrollReveal>
              <div>
                <div className="mb-12">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-semibold mb-4">
                    Send a Message
                  </span>
                  <h2 className="font-display text-4xl font-bold text-[#1A1A1A] mb-4">
                    How Can We Help?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and our specialized team will get back to you within 24 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1A1A1A]">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-border bg-[#F5F7FA] text-foreground focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1A1A1A]">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-border bg-[#F5F7FA] text-foreground focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                        placeholder="john@company.sc"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1A1A1A]">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-border bg-[#F5F7FA] text-foreground focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all"
                        placeholder="+248 123 4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#1A1A1A]">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-border bg-[#F5F7FA] text-foreground focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="servers">Server Solutions</option>
                        <option value="networking">Networking</option>
                        <option value="software">Software</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="xerox">Xerox Solutions</option>
                        <option value="managed-it">Managed IT</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1A1A1A]">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl border border-border bg-[#F5F7FA] text-foreground focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all resize-none"
                      placeholder="How can we assist you today?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full btn-primary flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-bold disabled:opacity-70 group shadow-burgundy"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        Message Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        Send Discovery Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground">
                    Visit our main office located in Victoria, Seychelles for in-person consultations.
                  </p>
                </div>
                <div className="flex-grow rounded-3xl overflow-hidden shadow-2xl border border-border/50 relative group min-h-[450px]">
                  <iframe
                    title="VCS Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.012345678901!2d55.451000!3d-4.623000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzcnMjIuOCJTIDU1wrAyNycwMy42IkU!5e0!3m2!1sen!2s!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-border/50 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-bold text-[#1A1A1A] mb-1">Victoria Computer Services (VCS)</p>
                    <p className="text-sm text-muted-foreground">VCS Building, Le Chantier, Victoria, Seychelles</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
