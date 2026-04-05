import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "17+", label: "Years of Trust" },
  { value: "500+", label: "Brand Partners" },
  { value: "10K+", label: "Clients Served" },
  { value: "Pan India", label: "Distribution" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-14 md:py-20 bg-background texture-paper" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.15] mb-5">
              A Legacy Built on{" "}
              <span className="text-gradient-brand italic">Quality & Trust</span>
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                M Khemka Trading Pvt Ltd has been a cornerstone of India's B2B garment industry 
                since 2007. From our headquarters in Metiabruz, Kolkata, we have built enduring 
                relationships with hundreds of brands and thousands of retailers across the nation.
              </p>
              <p>
                We specialize in the wholesale distribution of premium garments — from everyday 
                essentials to high-fashion collections. Our commitment to quality inspection, 
                timely delivery, and transparent business practices has earned us the trust of 
                India's most respected apparel brands.
              </p>
              <p>
                With a deep understanding of market trends and an unwavering focus on customer 
                satisfaction, we bridge the gap between manufacturers and retailers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-card rounded-sm p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient-brand font-display">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground tracking-widest uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
