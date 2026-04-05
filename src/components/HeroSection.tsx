import { motion } from "framer-motion";
import logo from "@/assets/mkt-logo.png";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Layered luxury textures */}
        <div className="absolute inset-0 texture-linen" />
        <div className="absolute inset-0 texture-paper opacity-50" />
        <div className="absolute inset-0 texture-herringbone opacity-40" />
        <div className="absolute inset-0 texture-damask opacity-30" />

        {/* Deep navy radial accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--brand-deep)/0.04)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_hsl(var(--brand-light)/0.08)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_hsl(var(--gold-light)/0.1)_0%,_transparent_50%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,_hsl(var(--gold)/0.03)_0%,_transparent_70%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_hsl(var(--foreground)/0.04)_100%)]" />

        {/* Corner ornaments */}
        <div className="absolute top-12 left-12 w-28 h-28 border-t border-l border-[hsl(var(--gold)/0.2)]" />
        <div className="absolute top-12 right-12 w-28 h-28 border-t border-r border-[hsl(var(--gold)/0.2)]" />
        <div className="absolute bottom-12 left-12 w-28 h-28 border-b border-l border-[hsl(var(--gold)/0.2)]" />
        <div className="absolute bottom-12 right-12 w-28 h-28 border-b border-r border-[hsl(var(--gold)/0.2)]" />

        {/* Decorative gold lines */}
        <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.12)] to-transparent" />
        <div className="absolute top-1/4 right-0 w-24 h-px bg-gradient-to-l from-transparent via-[hsl(var(--gold)/0.12)] to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold)/0.12)] to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-transparent via-[hsl(var(--gold)/0.12)] to-transparent" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="M Khemka Trading (P) Ltd."
              className="h-32 md:h-48 w-auto mb-8 drop-shadow-md mx-auto translate-x-[24px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="h-px w-14 bg-[hsl(var(--gold)/0.4)]" />
            <span className="text-muted-foreground text-xs tracking-[0.4em] uppercase font-medium">
              Established 2007
            </span>
            <span className="h-px w-14 bg-[hsl(var(--gold)/0.4)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.15] tracking-tight"
          >
            We Serve{" "}
            <span className="text-gradient-brand italic inline-block pb-4">Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
          >
            India's premier B2B garment distribution partner — delivering quality, 
            integrity, and excellence since 2007.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="px-10 py-4 bg-gradient-brand text-primary-foreground rounded-sm text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/15"
            >
              Discover Our Story
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="px-10 py-4 border border-foreground/15 text-foreground rounded-sm text-sm font-semibold tracking-[0.2em] uppercase hover:bg-foreground/5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ornamental separator */}
      <div className="relative h-12 bg-background overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3">
          <div className="ornament-line w-28" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[hsl(var(--gold)/0.5)]" />
          <div className="ornament-line w-28" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
      </div>
    </>
  );
};

export default HeroSection;
