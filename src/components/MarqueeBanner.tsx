import { motion } from "framer-motion";

const brands = [
  "Maravillosa", "Balajee Enterprises", "Alliance", "Citéman",
  "ODDI Original", "ZoomClub", "Saanvikaa", "Okasa Knitwears",
  "Girlyy", "Borgo Jeans Co.", "Moffi", "Pinklane", 
  "9ty9 Clothing Co", "Stylogy", "Nu-way", "Maximino",
  "Acrobatica Militare", "Code16", "Freemind Originals", "Maitri",
];

const MarqueeBanner = () => {
  const duplicated = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-5 bg-secondary border-y border-gold/15 overflow-hidden">
      <div className="absolute inset-0 texture-diagonal opacity-50" />
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {duplicated.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="text-xs font-semibold tracking-[0.35em] uppercase text-muted-foreground/60 flex items-center gap-10"
          >
            {brand}
            <span className="w-1.5 h-1.5 rotate-45 bg-gold/40 inline-block" />
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeBanner;
