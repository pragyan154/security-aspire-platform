
import { Button } from "@/components/ui/button";
import DashboardMockup from "./DashboardMockup";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Security, your affordable{" "}
            <span className="text-gray-900">
              ASPM platform
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Scan your code, containers and cloud. Security combines different scanning techniques to detect any kind of vulnerability and alerts you when it's critical to fix.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-8 py-3 text-base font-medium transition-all duration-200">
              Start for Free
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-8 py-3 text-base font-medium transition-all duration-200">
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
