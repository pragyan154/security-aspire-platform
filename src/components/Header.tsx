
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Security
            </h1>
          </div>

          {/* Navigation Menu - Centered */}
          <nav className="hidden md:flex items-center bg-gray-900 rounded-full px-8 py-3 space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">Product</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">Solutions</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">Pricing</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">Resources</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">About</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">Contact</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-16 bg-transparent border-0 text-gray-700 focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="es">ES</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>

            {/* Login Link */}
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm font-medium">
              Login
            </a>

            {/* Start for Free Button */}
            <Button className="bg-security-purple hover:bg-security-purple/90 text-white rounded-lg px-6 py-2.5 text-sm font-medium transition-all duration-200">
              Start for Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
