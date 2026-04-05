import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Gem, Truck, Users, TrendingUp, Award } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Unwavering Trust", description: "Transparent dealings and ethical practices form the backbone of every relationship we build.", hoverDetail: "Built on transparency and long-term business relationships." },
  { icon: Gem, title: "Premium Quality", description: "Rigorous quality checks ensure every garment meets the highest industry standards before dispatch.", hoverDetail: "Strict quality checks across all products we distribute." },
  { icon: Truck, title: "Reliable Delivery", description: "Our robust logistics network ensures on-time delivery across India, every single time.", hoverDetail: "Pan-India fulfilment with real-time tracking." },
  { icon: Users, title: "Strong Partnerships", description: "We nurture long-term relationships with brands and retailers built on mutual growth and respect.", hoverDetail: "500+ brands and 10,000+ retailers trust us." },
  { icon: TrendingUp, title: "Market Intelligence", description: "18 years of industry expertise helps us anticipate trends and guide our partners to success.", hoverDetail: "Data-driven insights for smarter inventory decisions." },
  { icon: Award, title: "Brand Excellence", description: "We represent only the finest brands, curating collections that resonate with today's consumers.", hoverDetail: "Handpicked labels that define quality and style." },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" className="py-12 md:py-18 bg-secondary texture-diagonal" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
            Our Foundation
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            The Pillars We Stand On
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-card rounded-sm p-7 border border-border hover:border-accent/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
              {/* Hover reveal line */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden">
                  <div className="pt-3 mt-3 border-t border-accent/20">
                    <p className="text-xs text-accent tracking-wide font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {pillar.hoverDetail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
