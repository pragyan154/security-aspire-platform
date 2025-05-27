
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const DAST = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dynamic Application Security Testing{" "}
              <span className="text-security-purple">(DAST)</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Tests running applications from the outside by simulating attacks against web applications and APIs. Identifies runtime vulnerabilities like authentication bypasses, session management issues, and configuration problems that only appear when the application is running.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Black-box testing approach</li>
                <li>• API and web application scanning</li>
                <li>• Authentication and session testing</li>
                <li>• OWASP Top 10 vulnerability detection</li>
                <li>• Real-time scanning of live applications</li>
                <li>• Minimal false positives</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-8 py-3 text-base font-medium">
                Try DAST Now
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-8 py-3 text-base font-medium">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center" 
              alt="Circuit board representing dynamic testing"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DAST;
