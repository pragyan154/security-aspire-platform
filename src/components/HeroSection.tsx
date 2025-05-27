
import { Button } from "@/components/ui/button";
import DashboardMockup from "./DashboardMockup";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Security, Your Affordable{" "}
            <span className="bg-gradient-to-r from-security-purple to-security-blue bg-clip-text text-transparent">
              ASPM Platform
            </span>
          </h1>
          
          <p className="text-xl text-light-gray leading-relaxed">
            Scan your code, containers, and cloud. Security helps you detect and fix vulnerabilities when it matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-security-purple hover:bg-security-purple/80 text-white rounded-lg px-8 py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Start for Free
            </Button>
            <Button variant="outline" className="border-security-purple text-security-purple hover:bg-security-purple hover:text-white rounded-lg px-8 py-3 text-lg transition-all duration-200">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Right Side - Dashboard Mockup */}
        <div className="flex justify-center">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
