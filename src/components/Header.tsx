
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Security
            </Link>
          </div>

          {/* Navigation Menu - Centered */}
          <nav className="hidden md:flex items-center bg-gray-900 rounded-full px-8 py-3 space-x-8">
            <div className="relative group">
              <span className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium cursor-pointer">Product</span>
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-48">
                <div className="py-2">
                  <Link to="/sast" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SAST</Link>
                  <Link to="/dast" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DAST</Link>
                  <Link to="/cpm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CPM</Link>
                  <Link to="/secret-detection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Secret Detection</Link>
                  <Link to="/vulnerable-components" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vulnerable Components</Link>
                </div>
              </div>
            </div>
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
