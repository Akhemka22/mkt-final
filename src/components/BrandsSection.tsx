import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 🔹 Import logos (make sure these exist in src/assets)
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

const BrandsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="brands"
      className="py-12 md:py-18 bg-background texture-linen"
      ref={ref}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
            Our Network
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
            Trusted by Leading Brands
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            We partner with India's most prestigious garment brands, distributing quality apparel across the nation.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="bg-card border border-border rounded-sm h-[100px] flex items-center justify-center p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[55px] max-w-[120px] object-contain transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsSection;