import { motion } from "framer-motion";

interface PageHeroProps {
  subtitle: string;
  title: string;
  description?: string;
}

const PageHero = ({ subtitle, title, description }: PageHeroProps) => (
  <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 overflow-visible bg-background">
    <div className="absolute inset-0 texture-linen" />
    <div className="absolute inset-0 texture-paper opacity-50" />
    <div className="absolute inset-0 texture-herringbone opacity-30" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--brand-deep)/0.04)_0%,_transparent_60%)]" />
    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_hsl(var(--gold-light)/0.08)_0%,_transparent_50%)]" />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 leading-[1.15] pb-1"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base"
        >
          {description}
        </motion.p>
      )}
      <div className="ornament-line max-w-[120px] mx-auto mt-4" />
    </div>
  </section>
);

export default PageHero;
