import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const stats = [
  { value: "18+", label: "Years of Trust" },
  { value: "500+", label: "Brand Partners" },
  { value: "10K+", label: "Clients Served" },
  { value: "Pan India", label: "Distribution" },
];

const CompanyOverview = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      subtitle="About Us"
      title="Company Overview"
      description="A trusted name in India's wholesale garment industry since 2007."
    />

    <section className="py-12 md:py-18 bg-background texture-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            M Khemka Trading Pvt Ltd has been a trusted name in India's wholesale garment industry
            since 2007. Founded with a vision to streamline the B2B garment supply chain, the
            company has grown from a single operation in Kolkata's historic Metiabruz district to a
            pan-India distribution network serving thousands of retailers and businesses.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our expertise lies in sourcing, quality inspection, and distribution of premium branded
            garments — from everyday essentials to high-fashion collections. We work closely with
            India's most respected apparel brands, ensuring that every piece meets our stringent
            quality standards before reaching our retail partners.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With a deep understanding of market dynamics, seasonal trends, and regional preferences,
            we bridge the gap between manufacturers and retailers. Our commitment to transparent
            business practices, timely deliveries, and long-term partnerships has positioned us as
            one of the most reliable names in the Indian garment wholesale ecosystem.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-sm p-6 text-center border border-border shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient-brand font-display">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs text-muted-foreground tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CompanyOverview;
