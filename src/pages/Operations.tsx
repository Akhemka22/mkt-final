import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import supplyChainImg from "@/assets/operations-supply-chain.jpg";
import logisticsImg from "@/assets/operations-logistics.jpg";
import distributionImg from "@/assets/operations-distribution.jpg";

const sections = [
  {
    id: "supply-chain",
    title: "Supply Chain",
    description:
      "Our supply chain is built to ensure seamless sourcing and movement of garments from manufacturers to markets. With a strong vendor network and efficient coordination, we maintain consistency, reduce delays, and ensure smooth operations at scale.",
    image: supplyChainImg,
    imageAlt: "Supply chain warehouse with organized garment storage",
    imageLeft: true,
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Our logistics network ensures timely and reliable delivery across regions. Through efficient planning and coordination, we handle bulk garment movement with precision, ensuring that our partners receive consistent supply without disruption.",
    image: logisticsImg,
    imageAlt: "Logistics fleet at distribution center",
    imageLeft: false,
  },
  {
    id: "distribution",
    title: "Distribution",
    description:
      "Our distribution system is designed to reach businesses across India efficiently. With a strong presence in key markets, we enable wide product availability and support our partners with reliable and scalable distribution.",
    image: distributionImg,
    imageAlt: "Pan-India distribution network",
    imageLeft: true,
  },
];

const Operations = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.getElementById(location.hash.substring(1))?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [location]);

  return (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      subtitle="How We Work"
      title="Our Operations"
      description="A streamlined approach to sourcing, quality, and distribution."
    />

    {sections.map((section, i) => (
      <section
        key={section.id}
        id={section.id}
        className={`py-12 md:py-18 ${i % 2 === 0 ? "bg-background texture-linen" : "bg-secondary texture-diagonal"}`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              section.imageLeft ? "" : "md:[direction:rtl]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: section.imageLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="md:[direction:ltr]"
            >
              <img
                src={section.image}
                alt={section.imageAlt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full rounded-sm border border-border shadow-sm object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: section.imageLeft ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:[direction:ltr]"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
                Operations
              </p>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    <Footer />
  </div>
  );
};

export default Operations;
