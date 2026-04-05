import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CompanyOverview from "./pages/CompanyOverview.tsx";
import OurJourney from "./pages/OurJourney.tsx";
import MissionVision from "./pages/MissionVision.tsx";
import Operations from "./pages/Operations.tsx";
import BrandPartners from "./pages/BrandPartners.tsx";
import Products from "./pages/Products.tsx";

const queryClient = new QueryClient();

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToSection = () => {
        const element = document.querySelector(hash);

        if (element) {
          const rect = element.getBoundingClientRect();

          const y =
            window.pageYOffset +
            rect.top -
            window.innerHeight / 2 +
            rect.height / 2;

          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/brand-partners" element={<BrandPartners />} />
          <Route path="/products" element={<Products />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
