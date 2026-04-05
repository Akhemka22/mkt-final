import logo from "@/assets/mkt-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background texture-diagonal">
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="M Khemka Trading" className="h-14 w-auto mb-3 brightness-0 invert" />
            <p className="text-background/50 text-xs leading-relaxed tracking-wide">
              India's trusted B2B partner for premium garment trading since 2007.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base font-semibold mb-3 tracking-wide">Quick Links</h4>
            <div className="space-y-1.5">
              {["About", "Brands", "Branches", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/#${link.toLowerCase()}`}
                  className="block text-xs text-background/50 hover:text-background transition-colors duration-300 tracking-wider uppercase"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-base font-semibold mb-3 tracking-wide">Head Office</h4>
            <div className="space-y-1 text-xs text-background/50 tracking-wide">
              <p>5th Floor, Onex Central, 12, Syed Salley St</p>
              <p>Barabazar, Kolkata, West Bengal 700073</p>
              <p className="pt-1.5">office@mktpvt.ltd</p>
              <p>+91 83340 38247</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} M Khemka Trading Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-background/30 tracking-[0.3em] uppercase font-display italic">We Serve Trust</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
