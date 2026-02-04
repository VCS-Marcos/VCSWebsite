import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const partners = [
  { name: "Xerox", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Xerox_logo.svg/2560px-Xerox_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" },
  { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/2560px-Vmware.svg.png" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" },
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
