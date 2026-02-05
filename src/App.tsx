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
import VideoSurveillance from "./pages/VideoSurveillance";
import Telecom from "./pages/Telecom";
import AccessControl from "./pages/AccessControl";
import TimeAttendance from "./pages/TimeAttendance";
import Cloud from "./pages/Cloud";
import Security from "./pages/Security";
import DataCenters from "./pages/DataCenters";
import ITSupport from "./pages/ITSupport";
import HRS from "./pages/software/HRS";
import POS from "./pages/software/POS";
import AstroNET from "./pages/software/AstroNET";
import CustomSoftware from "./pages/software/CustomSoftware";
import Licensing from "./pages/software/Licensing";
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
          <Route path="/services/video-surveillance" element={<VideoSurveillance />} />
          <Route path="/services/telecom" element={<Telecom />} />
          <Route path="/services/access-control" element={<AccessControl />} />
          <Route path="/services/time-attendance" element={<TimeAttendance />} />
          <Route path="/services/cloud" element={<Cloud />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/data-centers" element={<DataCenters />} />
          <Route path="/services/support" element={<ITSupport />} />
          <Route path="/xerox" element={<Xerox />} />
          <Route path="/xerox/*" element={<Xerox />} />
          <Route path="/software" element={<Software />} />
          <Route path="/software/hrs" element={<HRS />} />
          <Route path="/software/pos" element={<POS />} />
          <Route path="/software/astronet" element={<AstroNET />} />
          <Route path="/software/custom" element={<CustomSoftware />} />
          <Route path="/software/licensing" element={<Licensing />} />
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
