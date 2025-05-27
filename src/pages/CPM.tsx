
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const CPM = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cloud Posture Management{" "}
              <span className="text-security-purple">(CPM)</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Continuously monitors your cloud infrastructure for misconfigurations, compliance violations, and security risks. Provides real-time visibility into your cloud security posture across AWS, Azure, and Google Cloud platforms.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-cloud support (AWS, Azure, GCP)</li>
                <li>• Real-time configuration monitoring</li>
                <li>• Compliance framework mapping</li>
                <li>• Infrastructure as Code (IaC) scanning</li>
                <li>• Automated remediation suggestions</li>
                <li>• Risk prioritization and scoring</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-8 py-3 text-base font-medium">
                Try CPM Now
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-8 py-3 text-base font-medium">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center" 
              alt="Person working on cloud security"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPM;
