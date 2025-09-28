import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from '@assets/flopro_logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
      {/* Mobile-First Logo Banner */}
      <div className="w-full">
        {/* Top Row - Logo and Call Button */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-sm">
          {/* Logo - Much Larger and Centered */}
          <div className="flex-1 flex justify-center">
            <img 
              src={logoImage} 
              alt="Flo Pro Pool Service" 
              className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] object-contain"
            />
          </div>
          
          {/* Call Button - Always Visible */}
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded-lg shadow-lg ml-4"
            data-testid="button-call-mobile"
            onClick={() => window.location.href = 'tel:+19415557665'}
          >
            <Phone className="h-4 w-4 mr-1" />
            <span className="text-xs sm:text-sm">(941) 555-POOL</span>
          </Button>
        </div>

        {/* Company Name Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4">
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Flo Pro Pool Service</h1>
            <p className="text-xs sm:text-sm opacity-90">Professional Pool Care & Maintenance</p>
          </div>
        </div>

        {/* Navigation Row */}
        <div className="bg-white/90 backdrop-blur-sm border-t border-blue-100">
          <div className="container mx-auto px-4 py-2">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8">
              <a href="#services" className="text-sm font-semibold text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md transition-colors">Services</a>
              <a href="#about" className="text-sm font-semibold text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md transition-colors">About</a>
              <a href="#testimonials" className="text-sm font-semibold text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-semibold text-blue-700 hover:text-blue-900 px-3 py-2 rounded-md transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-700 hover:bg-blue-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMenuOpen ? <X className="h-5 w-5 mr-2" /> : <Menu className="h-5 w-5 mr-2" />}
                <span className="font-semibold">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <a 
              href="#services" 
              className="text-sm font-semibold text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-md transition-colors border-l-4 border-transparent hover:border-blue-500" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-sm font-semibold text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-md transition-colors border-l-4 border-transparent hover:border-blue-500" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-semibold text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-md transition-colors border-l-4 border-transparent hover:border-blue-500" 
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-sm font-semibold text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-md transition-colors border-l-4 border-transparent hover:border-blue-500" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}