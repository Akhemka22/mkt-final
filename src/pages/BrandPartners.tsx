import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import Maravillosa from "../assets/Maravillosa.png";
import Balajee from "../assets/Balajee.png";
import Alliance from "../assets/Alliance.png";
import Citeman from "../assets/Citeman.png";
import ODDI from "../assets/ODDI.png";
import ZoomClub from "../assets/ZoomClub.png";
import Saanvikaa from "../assets/Saanvikaa.png";
import Okasa from "../assets/Okasa.png";
import Girlyy from "../assets/Girlyy.png";
import Borgo from "../assets/Borgo.png";
import Moffi from "../assets/Moffi.png";
import Pinklane from "../assets/Pinklane.png";
import ty99 from "../assets/9ty9.png";
import Stylogy from "../assets/Stylogy.png";
import Nuway from "../assets/Nu-way.png";
import Maximino from "../assets/Maximino.png";
import Acrobatica from "../assets/Acrobatica.png";
import Code16 from "../assets/Code16.png";
import Freemind from "../assets/Freemind.png";
import Maitri from "../assets/Maitri.png";


// 🔹 Brand data
const brands = [
  { name: "Maravillosa", logo: Maravillosa },
  { name: "Balajee", logo: Balajee },
  { name: "Alliance", logo: Alliance },
  { name: "Citeman", logo: Citeman },
  { name: "ODDI", logo: ODDI },
  { name: "ZoomClub", logo: ZoomClub },
  { name: "Saanvikaa", logo: Saanvikaa },
  { name: "Okasa", logo: Okasa },
  { name: "Girlyy", logo: Girlyy },
  { name: "Borgo", logo: Borgo },
  { name: "Moffi", logo: Moffi },
  { name: "Pinklane", logo: Pinklane },
  { name: "9ty9", logo: ty99 },
  { name: "Stylogy", logo: Stylogy },
  { name: "Nu-way", logo: Nuway },
  { name: "Maximino", logo: Maximino },
  { name: "Acrobatica", logo: Acrobatica },
  { name: "Code16", logo: Code16 },
  { name: "Freemind", logo: Freemind },
  { name: "Maitri", logo: Maitri },
];

const BrandPartners = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      subtitle="Our Network"
      title="Brand Partners"
      description="We are proud to partner with India's most prestigious garment brands."
    />

    <section className="py-10 md:py-14 bg-background texture-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.04 * i }}
              className="bg-card border border-border rounded-sm p-6 flex items-center justify-center h-[100px] hover:shadow-md transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[50px] max-w-[120px] object-contain transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default BrandPartners;
