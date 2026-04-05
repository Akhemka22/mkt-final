import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import BranchesSection from "@/components/BranchesSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <BrandsSection />
      <AboutSection />
      <PillarsSection />
      <BranchesSection />
      <WhyWorkWithUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
