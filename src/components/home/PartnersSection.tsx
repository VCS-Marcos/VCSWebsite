import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const partners = [
  { name: "Xerox", logo: "/logos/xerox.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Cisco", logo: "/logos/cisco.png" },
  { name: "Dell", logo: "/logos/dell.png" },
  { name: "VMware", logo: "/logos/vmware.png" },
  { name: "AWS", logo: "/logos/aws.png" },
  { name: "Zoho", logo: "/logos/zoho.png" },
  { name: "Symantec", logo: "/logos/symantec.png" },
  { name: "Matrix Comsec", logo: "/logos/matrix.png" },
  { name: "Kaspersky", logo: "/logos/kaspersky.png" },
  { name: "Veeam", logo: "/logos/veeam.png" },
  { name: "Sophos", logo: "/logos/sophos.png" },
  { name: "Fortinet", logo: "/logos/fortinet.png" },
  { name: "APC", logo: "/logos/apc.png" },
  { name: "Supermicro", logo: "/logos/supermicro.png" },
  { name: "Broadcom", logo: "/logos/broadcom.png" },
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Strategic Global Partners</h2>
            <div className="w-16 h-1 bg-burgundy mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Infinite scroll effect */}
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-20 items-center"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 md:w-60 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center p-6 h-32"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain max-h-24"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
