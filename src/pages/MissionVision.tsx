import { motion } from "framer-motion";
import { Heart, RefreshCw, Eye, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const values = [
  { icon: Heart, label: "Trust", description: "Building relationships rooted in honesty and mutual respect." },
  { icon: RefreshCw, label: "Consistency", description: "Delivering reliable quality and service, every single time." },
  { icon: Eye, label: "Transparency", description: "Open communication and fair dealings with every partner." },
  { icon: Handshake, label: "Long-term Partnerships", description: "Growing together with our brands and retailers for years to come." },
];

const MissionVision = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      subtitle="What Drives Us"
      title="Mission & Vision"
      description="Our guiding principles for building India's most trusted garment network."
    />

    <section className="py-12 md:py-18 bg-background texture-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border rounded-sm p-8"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Our Mission</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Simplify & Strengthen</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To simplify and strengthen the wholesale garment supply chain through trust and efficiency.
              We aim to be the most reliable bridge between India's leading apparel brands and the
              retailers who bring fashion to every household.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card border border-border rounded-sm p-8"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Our Vision</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Lead the Market</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become a leading B2B garment marketplace in India — setting the standard for quality,
              reliability, and transparency in the wholesale apparel distribution industry.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Our Values</p>
            <h2 className="font-display text-3xl font-bold text-foreground">What We Stand For</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-card border border-border rounded-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                  <v.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{v.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default MissionVision;
