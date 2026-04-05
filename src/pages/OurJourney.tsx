import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const milestones = [
  {
    year: "2007",
    title: "Company Founded",
    description:
      "M Khemka Trading Pvt Ltd was established in Kolkata with a vision to bring trust and reliability to India's wholesale garment industry.",
  },
  {
    year: "2016",
    title: "Business Expansion Phase",
    description:
      "Forged partnerships with India's leading apparel brands including Raymond, Peter England, Allen Solly, and Van Heusen — becoming an authorised distributor across multiple categories.",
  },
  {
    year: "2020",
    title: "Strengthening Network & Growth",
    description:
      "Extended our distribution network beyond West Bengal, serving retailers and businesses across multiple states with efficient logistics and reliable supply chains.",
  },
  {
    year: "2021",
    title: "Barabazar Branch Established",
    description:
      "Opened our office in Kolkata's bustling Barabazar commercial district, expanding our reach to a wider network of retailers and wholesalers.",
  },
  {
    year: "Present",
    title: "Continuing to Grow Strongly",
    description:
      "Continuing to expand our network, strengthen partnerships, and serve businesses across India with consistency and trust.",
    isPresent: true,
  },
];

const OurJourney = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      subtitle="Our Story"
      title="Our Journey"
      description="From a single office in Kolkata to a pan-India distribution network."
    />

    <section className="py-12 md:py-18 bg-background texture-linen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className={`absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-1 z-10 rounded-full border-2 border-background ${
                (m as any).isPresent ? "w-4 h-4 bg-accent ring-4 ring-accent/20" : "w-3 h-3 bg-accent"
              }`} />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <span className={`text-xs tracking-[0.3em] uppercase font-semibold ${
                  (m as any).isPresent ? "text-primary font-bold" : "text-accent"
                }`}>
                  {m.year}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-1.5">
                  {m.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default OurJourney;
