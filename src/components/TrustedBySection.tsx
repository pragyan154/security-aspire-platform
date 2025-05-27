
const TrustedBySection = () => {
  const companyLogos = [
    { name: "TechCorp", width: "120" },
    { name: "CloudBase", width: "100" },
    { name: "DevSecure", width: "140" },
    { name: "DataFlow", width: "110" },
    { name: "CyberShield", width: "130" },
    { name: "SecureOps", width: "115" }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-gray-600 text-lg font-medium">
            These cloud-native companies trust Security
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-80 transition-opacity duration-200"
            >
              {/* Placeholder company logos */}
              <div 
                className="bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-semibold"
                style={{ width: `${company.width}px`, height: "40px" }}
              >
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
