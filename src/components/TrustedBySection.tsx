
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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gray-600 text-lg font-medium">
            These cloud-native companies sleep better at night
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="opacity-40 hover:opacity-60 transition-opacity duration-300"
            >
              {/* Placeholder company logos */}
              <div 
                className="bg-gray-400 rounded-lg flex items-center justify-center text-white font-semibold text-sm"
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
