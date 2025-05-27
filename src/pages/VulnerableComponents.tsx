
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const VulnerableComponents = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Vulnerable Components{" "}
              <span className="text-security-purple">Analysis</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Analyzes third-party components such as libraries, frameworks, and dependencies for known vulnerabilities. Akido does Reachability Analysis, triages to filter out false positives, and provides clear remediation advice and auto-fix.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Software Composition Analysis (SCA)</li>
                <li>• Reachability analysis for accurate results</li>
                <li>• License compliance monitoring</li>
                <li>• Automated dependency updates</li>
                <li>• SBOM (Software Bill of Materials) generation</li>
                <li>• Integration with package managers</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-8 py-3 text-base font-medium">
                Try Component Analysis
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-8 py-3 text-base font-medium">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center" 
              alt="MacBook with code showing component analysis"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VulnerableComponents;
