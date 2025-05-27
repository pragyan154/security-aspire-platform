
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header = () => {
  return (
    <header className="w-full bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-security-purple to-security-blue bg-clip-text text-transparent">
              Security
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">Product</a>
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">Solutions</a>
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">Pricing</a>
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">Resources</a>
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">About</a>
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">Contact</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-16 bg-transparent border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>

            {/* Login Link */}
            <a href="#" className="text-white hover:text-security-purple transition-colors duration-200">
              Login
            </a>

            {/* Start for Free Button */}
            <Button className="bg-security-purple hover:bg-security-purple/80 text-white rounded-lg px-6 py-2 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start for Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
