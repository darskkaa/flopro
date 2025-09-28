import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from '@assets/flopro_logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Mobile-First Logo Banner - Dark Theme */}
      <div className="w-full">
        {/* Top Row - Massive Logo and Call Button */}
        <div className="flex items-center justify-between px-4 py-4 bg-background">
          {/* Logo - MASSIVE and Centered */}
          <div className="flex-1 flex justify-center">
            <img 
              src={logoImage} 
              alt="Flo Pro Pool Service" 
              className="h-32 w-auto sm:h-40 md:h-48 lg:h-56 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Call Button - Always Visible */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-lg shadow-xl ml-4"
            data-testid="button-call-mobile"
            onClick={() => window.location.href = 'tel:+19415557665'}
          >
            <Phone className="h-5 w-5 mr-2" />
            <span className="text-sm sm:text-base font-bold">(941) 555-POOL</span>
          </Button>
        </div>

        {/* Company Name Banner - Dark Theme */}
        <div className="bg-primary text-primary-foreground py-3 px-4">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Flo Pro Pool Service</h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90 mt-1">Professional Pool Care & Maintenance</p>
          </div>
        </div>

        {/* Navigation Row - Dark Theme */}
        <div className="bg-card/90 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-3">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8">
              <a href="#services" className="text-sm font-semibold text-foreground hover:text-primary px-4 py-2 rounded-md transition-colors hover:bg-accent">Services</a>
              <a href="#about" className="text-sm font-semibold text-foreground hover:text-primary px-4 py-2 rounded-md transition-colors hover:bg-accent">About</a>
              <a href="#testimonials" className="text-sm font-semibold text-foreground hover:text-primary px-4 py-2 rounded-md transition-colors hover:bg-accent">Reviews</a>
              <a href="#contact" className="text-sm font-semibold text-foreground hover:text-primary px-4 py-2 rounded-md transition-colors hover:bg-accent">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-center">
              <Button
                variant="ghost"
                size="lg"
                className="text-foreground hover:bg-accent hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMenuOpen ? <X className="h-6 w-6 mr-2" /> : <Menu className="h-6 w-6 mr-2" />}
                <span className="font-bold text-base">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown - Dark Theme */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-3">
            <a 
              href="#services" 
              className="text-base font-semibold text-foreground hover:bg-accent hover:text-primary px-6 py-4 rounded-lg transition-colors border-l-4 border-transparent hover:border-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-base font-semibold text-foreground hover:bg-accent hover:text-primary px-6 py-4 rounded-lg transition-colors border-l-4 border-transparent hover:border-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-base font-semibold text-foreground hover:bg-accent hover:text-primary px-6 py-4 rounded-lg transition-colors border-l-4 border-transparent hover:border-primary" 
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="text-base font-semibold text-foreground hover:bg-accent hover:text-primary px-6 py-4 rounded-lg transition-colors border-l-4 border-transparent hover:border-primary" 
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