import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ProjectJourney from "./pages/ProjectJourney";
import AMC from "./pages/AMC";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AuManufacturingErp from "./pages/AuManufacturingErp";
import ErpAlternatives from "./pages/ErpAlternatives";
import ErpForSme from "./pages/ErpForSme";
import RealEstateCrm from "./pages/RealEstateCrm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/au-manufacturing-erp" element={<AuManufacturingErp />} />
          <Route path="/erp-alternatives" element={<ErpAlternatives />} />
          <Route path="/erp-for-sme" element={<ErpForSme />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project-journey" element={<ProjectJourney />} />
          <Route path="/amc" element={<AMC />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
