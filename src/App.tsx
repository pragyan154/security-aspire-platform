
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SAST from "./pages/SAST";
import DAST from "./pages/DAST";
import CPM from "./pages/CPM";
import SecretDetection from "./pages/SecretDetection";
import VulnerableComponents from "./pages/VulnerableComponents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sast" element={<SAST />} />
          <Route path="/dast" element={<DAST />} />
          <Route path="/cpm" element={<CPM />} />
          <Route path="/secret-detection" element={<SecretDetection />} />
          <Route path="/vulnerable-components" element={<VulnerableComponents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
