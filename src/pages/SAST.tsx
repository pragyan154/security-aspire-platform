
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const SAST = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Static Application Security Testing{" "}
              <span className="text-security-purple">(SAST)</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Scans your source code for security vulnerabilities such as SQL injection, XSS, buffer overflows and other security risks. Checks against popular CVE databases. It works out-of-the-box and supports all languages. AI SAST Autofix helps you remediate vulnerabilities. (Includes confidence level).
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time code scanning during development</li>
                <li>• Support for 25+ programming languages</li>
                <li>• CVE database integration</li>
                <li>• AI-powered automatic vulnerability fixes</li>
                <li>• Confidence level scoring for each finding</li>
                <li>• IDE integration and CI/CD pipeline support</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-8 py-3 text-base font-medium">
                Try SAST Now
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-8 py-3 text-base font-medium">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center" 
              alt="Code analysis visualization"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAST;
