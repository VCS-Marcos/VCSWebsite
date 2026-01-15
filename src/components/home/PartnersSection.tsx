import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const partners = [
  { name: "Xerox", logo: "XEROX" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Cisco", logo: "CISCO" },
  { name: "Dell", logo: "DELL" },
  { name: "HP", logo: "HP" },
  { name: "VMware", logo: "VMware" },
  { name: "AWS", logo: "AWS" },
  { name: "Google Cloud", logo: "Google Cloud" },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/50 overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider mb-10">
            Trusted by leading brands worldwide
          </p>
        </ScrollReveal>

        {/* Infinite scroll effect */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-16 items-center"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <span className="font-display font-bold text-xl text-foreground/60 hover:text-primary transition-colors whitespace-nowrap">
                  {partner.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
