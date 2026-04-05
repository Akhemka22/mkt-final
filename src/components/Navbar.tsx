import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/mkt-logo.png";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    dropdown: [
      { label: "Company Overview", href: "/company-overview" },
      { label: "Our Journey", href: "/our-journey" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Our Values", href: "/mission-vision" },
    ],
  },
  { label: "Network", href: "/brand-partners" },
  { label: "Products", href: "/products" },
  {
    label: "Operations",
    href: "/operations",
    dropdown: [
      { label: "Supply Chain", href: "/operations#supply-chain" },
      { label: "Logistics", href: "/operations#logistics" },
      { label: "Distribution", href: "/operations#distribution" },
    ],
  },
  { label: "Locations", href: "/#branches" },
  { label: "Contact", href: "/#contact" },
];

const DropdownMenu = ({
  items,
}: {
  items: { label: string; href: string }[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.96 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
  >
    <div className="min-w-[200px] rounded-md border border-border bg-card py-2 shadow-xl">
      {items.map((item, i) =>
        item.href.startsWith("/") ? (
          <Link
            key={i}
            to={item.href}
            className="block px-5 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors duration-200 tracking-wide"
          >
            {item.label}
          </Link>
        ) : (
          <a
            key={i}
            href={item.href}
            className="block px-5 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors duration-200 tracking-wide"
          >
            {item.label}
          </a>
        )
      )}
    </div>
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const handleNavClick = (item: NavItem, e: React.MouseEvent) => {
    if (item.dropdown) {
      e.preventDefault();
      return;
    }
    // Handle /#section links (cross-page scroll)
    if (item.href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.href.substring(2);
      if (window.location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
      return;
    }
    if (item.href.startsWith("/")) {
      e.preventDefault();
      navigate(item.href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="M.K. Trading" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href.startsWith("/") && !item.dropdown && !item.href.includes("#") ? (
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-foreground/70 hover:text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                    scrolled
                      ? "text-foreground/70 hover:text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
              )}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <DropdownMenu items={item.dropdown} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col items-center gap-2 py-6">
              {navItems.map((item) => (
                <div key={item.label} className="w-full text-center">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="inline-flex items-center gap-1 text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col items-center gap-1 py-2">
                              {item.dropdown.map((sub, i) =>
                                sub.href.startsWith("/") ? (
                                  <Link
                                    key={i}
                                    to={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm text-foreground/60 hover:text-primary transition-colors py-1.5"
                                  >
                                    {sub.label}
                                  </Link>
                                ) : (
                                  <a
                                    key={i}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm text-foreground/60 hover:text-primary transition-colors py-1.5"
                                  >
                                    {sub.label}
                                  </a>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="inline-block text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        setMobileOpen(false);
                        handleNavClick(item, e);
                      }}
                      className="inline-block text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
