
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import SecuritySections from "@/components/SecuritySections";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <SecuritySections />
    </div>
  );
};

export default Index;
