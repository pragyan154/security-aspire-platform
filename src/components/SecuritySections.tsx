
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const SecuritySections = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    {
      id: "sast",
      title: "Static Application Security Testing (SAST)",
      description: "Scans your source code for security vulnerabilities such as SQL injection, XSS, buffer overflows and other security risks. Checks against popular CVE databases. It works out-of-the-box and supports all languages. AI SAST Autofix helps you remediate vulnerabilities. (Includes confidence level).",
      features: [
        "Real-time code scanning during development",
        "Support for 25+ programming languages",
        "CVE database integration",
        "AI-powered automatic vulnerability fixes",
        "Confidence level scoring for each finding",
        "IDE integration and CI/CD pipeline support"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "dast",
      title: "Dynamic Application Security Testing (DAST)",
      description: "Tests running applications from the outside by simulating attacks against web applications and APIs. Identifies runtime vulnerabilities like authentication bypasses, session management issues, and configuration problems that only appear when the application is running.",
      features: [
        "Black-box testing approach",
        "API and web application scanning",
        "Authentication and session testing",
        "OWASP Top 10 vulnerability detection",
        "Real-time scanning of live applications",
        "Minimal false positives"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "cpm",
      title: "Cloud Posture Management (CPM)",
      description: "Continuously monitors your cloud infrastructure for misconfigurations, compliance violations, and security risks. Provides real-time visibility into your cloud security posture across AWS, Azure, and Google Cloud platforms.",
      features: [
        "Multi-cloud support (AWS, Azure, GCP)",
        "Real-time configuration monitoring",
        "Compliance framework mapping",
        "Infrastructure as Code (IaC) scanning",
        "Automated remediation suggestions",
        "Risk prioritization and scoring"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "secret-detection",
      title: "Secret Detection & Management",
      description: "Automatically discovers and monitors sensitive data like API keys, passwords, certificates, and tokens across your codebase, repositories, and infrastructure. Prevents credential leaks and ensures secure secret management practices.",
      features: [
        "Real-time secret scanning in code repositories",
        "200+ secret pattern detection rules",
        "Git history analysis",
        "Integration with secret management tools",
        "Automated alert and notification system",
        "Custom regex pattern support"
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "vulnerable-components",
      title: "Vulnerable Components Analysis",
      description: "Analyzes third-party components such as libraries, frameworks, and dependencies for known vulnerabilities. Aikido does Reachability Analysis, triages to filter out false positives, and provides clear remediation advice and auto-fix.",
      features: [
        "Software Composition Analysis (SCA)",
        "Reachability analysis for accurate results",
        "License compliance monitoring",
        "Automated dependency updates",
        "SBOM (Software Bill of Materials) generation",
        "Integration with package managers"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.6; // Changed from /3 to *0.6
      
      // Check if we're at the top (show "About")
      if (window.scrollY < 200) { // Increased from 100 to 200
        setActiveSection("about");
        return;
      }
      
      // Check which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Only change when we're well into the section (past 40% of it)
          if (scrollPosition >= offsetTop + (offsetHeight * 0.4) && 
              scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const getActiveTitle = () => {
    if (activeSection === "about") {
      return "About";
    }
    
    const section = sections.find(s => s.id === activeSection);
    if (section) {
      // Extract the acronym or main part of the title
      if (section.id === "sast") return "SAST";
      if (section.id === "dast") return "DAST";
      if (section.id === "cpm") return "CPM";
      if (section.id === "secret-detection") return "Secret Detection";
      if (section.id === "vulnerable-components") return "Vulnerable Components";
    }
    return "About";
  };

  return (
    <div className="relative">
      {/* Fixed Top Header */}
      <div className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900 transition-all duration-300">
            {getActiveTitle()}
          </h2>
        </div>
      </div>

      {/* Sections */}
      <div className="pt-20 space-y-32">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {section.title.includes('(') ? (
                    <>
                      {section.title.split('(')[0].trim()}{" "}
                      <span className="text-security-purple">
                        ({section.title.split('(')[1]}
                      </span>
                    </>
                  ) : section.title.includes('&') ? (
                    <>
                      {section.title.split('&')[0].trim()} &{" "}
                      <span className="text-security-purple">
                        {section.title.split('&')[1].trim()}
                      </span>
                    </>
                  ) : (
                    <>
                      {section.title.split(' ').slice(0, -1).join(' ')}{" "}
                      <span className="text-security-purple">
                        {section.title.split(' ').slice(-1)[0]}
                      </span>
                    </>
                  )}
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                  <ul className="space-y-2 text-gray-600">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-8 py-3 text-base font-medium">
                    Try {section.id === 'secret-detection' ? 'Secret Detection' : 
                         section.id === 'vulnerable-components' ? 'Component Analysis' :
                         section.id.toUpperCase()} Now
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg px-8 py-3 text-base font-medium">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Image or Dashboard */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {section.id === 'sast' ? (
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/87ce0d6d-d846-4de6-b1d6-c040681102aa.png"
                      alt="Aikido Security Dashboard showing SAST, DAST, SCA, Secret Scanning, and Malware detection"
                      className="rounded-lg shadow-lg w-full max-w-4xl"
                    />
                  </div>
                ) : (
                  <img 
                    src={section.image}
                    alt={`${section.title} illustration`}
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SecuritySections;
