import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Flo Pro</div>
          <div className="text-sm text-muted-foreground hidden sm:block">Pool Service</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors">Services</a>
          <a href="#about" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors">About</a>
          <a href="#testimonials" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors">Reviews</a>
          <a href="#contact" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors">Contact</a>
        </nav>

        {/* Call Button Desktop */}
        <div className="hidden md:block">
          <Button size="sm" data-testid="button-call-desktop">
            <span className="font-semibold">Call (941) 555-POOL</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#services" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#testimonials" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-sm hover-elevate active-elevate-2 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button size="sm" className="w-fit" data-testid="button-call-mobile">
              <span className="font-semibold">Call (941) 555-POOL</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}