import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Store, Network, Handshake } from "lucide-react";

const columns = [
  {
    icon: Store,
    title: "For Retailers",
    description: "Reliable bulk supply and consistent pricing",
  },
  {
    icon: Network,
    title: "For Brands",
    description: "Strong distribution network and market reach",
  },
  {
    icon: Handshake,
    title: "For Partners",
    description: "Transparent and scalable business model",
  },
];

const WhyWorkWithUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-14 md:py-20 bg-muted/30 texture-paper" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3"
          >
            Why Businesses Work With Us
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            We focus on building long-term wholesale relationships with consistency and reliability.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-sm bg-gradient-brand flex items-center justify-center mx-auto">
                <col.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {col.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {col.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
