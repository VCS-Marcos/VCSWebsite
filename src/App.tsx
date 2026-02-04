import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Xerox from "./pages/Xerox";
import Software from "./pages/Software";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ManagedIT from "./pages/ManagedIT";
import Servers from "./pages/Servers";
import Networking from "./pages/Networking";
import Cctv from "./pages/Cctv";
import Pabx from "./pages/Pabx";
import Cloud from "./pages/Cloud";
import Security from "./pages/Security";
import DataCenters from "./pages/DataCenters";
import ITSupport from "./pages/ITSupport";
import ScrollToTop from "./components/ui/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/managed-it" element={<ManagedIT />} />
          <Route path="/services/servers" element={<Servers />} />
          <Route path="/services/networking" element={<Networking />} />
          <Route path="/services/software" element={<Software />} />
          <Route path="/services/cctv" element={<Cctv />} />
          <Route path="/services/pabx" element={<Pabx />} />
          <Route path="/services/cloud" element={<Cloud />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/data-centers" element={<DataCenters />} />
          <Route path="/services/support" element={<ITSupport />} />
          <Route path="/xerox" element={<Xerox />} />
          <Route path="/xerox/*" element={<Xerox />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
