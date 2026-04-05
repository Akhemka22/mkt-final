import { motion } from "framer-motion";
import { Shirt, Sparkles, Baby, Sun, Snowflake, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import menswearImg from "@/assets/products-menswear.jpg";
import womenswearImg from "@/assets/products-womenswear.jpg";
import kidswearImg from "@/assets/products-kidswear.jpg";
import summerImg from "@/assets/products-summer.jpg";
import winterImg from "@/assets/products-winter.jpg";
import eidImg from "@/assets/products-eid.jpg";
import durgaPujaImg from "@/assets/products-durga-puja.jpg";
import diwaliImg from "@/assets/products-diwali.jpg";

const categories = [
  {
    title: "Men's Wear",
    icon: Shirt,
    description: "Premium formal and casual wear for the modern gentleman.",
    image: menswearImg,
    imageAlt: "Men's formal and casual wear collection",
    items: [
      "Formal Shirts", "Casual Shirts", "Trousers & Chinos", "Blazers & Suits",
      "T-Shirts & Polos", "Denim & Jeans", "Kurta & Ethnic Wear", "Innerwear & Loungewear",
    ],
  },
  {
    title: "Women's Wear",
    icon: Sparkles,
    description: "Elegant and contemporary apparel for every occasion.",
    image: womenswearImg,
    imageAlt: "Women's ethnic and western wear collection",
    items: [
      "Sarees & Blouses", "Salwar Kameez", "Kurtis & Tunics", "Lehengas & Gowns",
      "Western Tops & Dresses", "Jeans & Palazzos", "Ethnic Dupattas & Stoles", "Innerwear & Loungewear",
    ],
  },
  {
    title: "Kids Wear",
    icon: Baby,
    description: "Comfortable, colourful clothing for children of all ages.",
    image: kidswearImg,
    imageAlt: "Kids clothing collection",
    items: [
      "Boys' Shirts & T-Shirts", "Girls' Frocks & Dresses", "Kids' Ethnic Wear", "School Uniforms",
      "Infant & Toddler Sets", "Denim & Casual Bottoms", "Party Wear", "Nightwear & Sleepwear",
    ],
  },
];

const seasonalCategories = [
  {
    title: "Summer Collection",
    icon: Sun,
    image: summerImg,
    imageAlt: "Summer clothing collection with light fabrics and vibrant prints",
    description: "Light, breathable fabrics and vibrant prints designed for comfort and style in warm weather.",
    items: ["Cotton Kurtas", "Linen Shirts", "Light Chinos", "Printed Sarees", "Floral Dresses", "Kids' Summer Sets"],
  },
  {
    title: "Winter Collection",
    icon: Snowflake,
    image: winterImg,
    imageAlt: "Winter clothing collection with warm woolen and velvet garments",
    description: "Warm, layered essentials featuring rich textures and deep tones for the colder months.",
    items: ["Woollen Blazers", "Shawls & Stoles", "Sweaters & Cardigans", "Velvet Kurtas", "Quilted Jackets", "Kids' Winterwear"],
  },
];

const festiveCategories = [
  {
    title: "Eid Collection",
    image: eidImg,
    imageAlt: "Elegant ethnic wear for Eid celebration",
    items: ["Sherwanis", "Embroidered Kurtas", "Pathani Suits", "Hijab & Abaya Sets"],
    imageLeft: true,
  },
  {
    title: "Durga Puja Collection",
    image: durgaPujaImg,
    imageAlt: "Traditional ethnic wear for Durga Puja",
    items: ["Designer Sarees", "Silk Kurtis", "Festive Lehengas", "Traditional Dhotis"],
    imageLeft: false,
  },
  {
    title: "Diwali Collection",
    image: diwaliImg,
    imageAlt: "Bright festive clothing for Diwali celebration",
    items: ["Brocade Kurtas", "Velvet Blazers", "Gold-thread Sarees", "Kids' Festive Sets"],
    imageLeft: true,
  },
];

const ItemCard = ({ item }: { item: string }) => (
  <div className="bg-card border border-border rounded-md px-5 py-4 text-sm text-foreground/80 tracking-wide shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
    {item}
  </div>
);

const Products = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      subtitle="Our Catalogue"
      title="Products"
      description="A comprehensive range of branded garments across every category and season."
    />

    {/* Main categories */}
    {categories.map((cat, ci) => (
      <section
        key={cat.title}
        className={`py-12 md:py-18 ${ci % 2 === 0 ? "bg-background texture-linen" : "bg-secondary/30 texture-diagonal"}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 ${ci % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="overflow-hidden rounded-md border border-border shadow-sm md:[direction:ltr]">
                <img src={cat.image} alt={cat.imageAlt} loading="lazy" width={800} height={512}
                  className="w-full object-cover aspect-[16/10] hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:[direction:ltr]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-gradient-brand flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
                </div>
                <div className="w-12 h-px bg-accent mb-4" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{cat.description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {cat.items.map((item, i) => <ItemCard key={i} item={item} />)}
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* Seasonal Collections */}
    <section className="py-12 md:py-18 bg-secondary/30 texture-diagonal">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-brand flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Seasonal Collections</h2>
            </div>
            <div className="w-12 h-px bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Season-specific ranges crafted for comfort, style, and weather-appropriate dressing throughout the year.
            </p>
          </motion.div>

          <div className="space-y-16">
            {seasonalCategories.map((sc, si) => (
              <motion.div
                key={sc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 * si }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${si % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="overflow-hidden rounded-md border border-border shadow-sm md:[direction:ltr]">
                  <img src={sc.image} alt={sc.imageAlt} loading="lazy" width={1024} height={640}
                    className="w-full object-cover aspect-[16/10] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="md:[direction:ltr]">
                  <div className="flex items-center gap-3 mb-3">
                    <sc.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">{sc.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{sc.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {sc.items.map((item, i) => <ItemCard key={i} item={item} />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Festive Collections */}
    <section className="py-12 md:py-18 bg-background texture-linen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-brand flex items-center justify-center">
                <Star className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Festive Collections</h2>
            </div>
            <div className="w-12 h-px bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Celebrate every occasion with our curated festive ranges — elegant, vibrant, and crafted for the spirit of each festival.
            </p>
          </motion.div>

          <div className="space-y-16">
            {festiveCategories.map((fc, fi) => (
              <motion.div
                key={fc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 * fi }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${!fc.imageLeft ? "md:[direction:rtl]" : ""}`}
              >
                <div className="overflow-hidden rounded-md border border-border shadow-sm md:[direction:ltr]">
                  <img src={fc.image} alt={fc.imageAlt} loading="lazy" width={1024} height={640}
                    className="w-full object-cover aspect-[16/10] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="md:[direction:ltr]">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 flex items-center gap-3">
                    <span className="w-8 h-px bg-accent" />
                    {fc.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {fc.items.map((item, i) => <ItemCard key={i} item={item} />)}
                  </div>
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

export default Products;
