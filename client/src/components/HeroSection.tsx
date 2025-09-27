import { useState } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import heroImage from '@assets/generated_images/Pristine_luxury_pool_hero_image_41f38e94.png';

export default function HeroSection() {
  const [address, setAddress] = useState("");
  const [verificationResult, setVerificationResult] = useState<"checking" | "covered" | "expanding" | null>(null);

  const handleCheckAvailability = () => {
    if (!address.trim()) return;
    
    setVerificationResult("checking");
    // Simulate API call
    setTimeout(() => {
      const isInServiceArea = address.toLowerCase().includes("port charlotte") || 
                              address.toLowerCase().includes("punta gorda") ||
                              address.toLowerCase().includes("33948") ||
                              address.toLowerCase().includes("33950");
      
      setVerificationResult(isInServiceArea ? "covered" : "expanding");
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Crystal clear swimming pool" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Guarantee Badge */}
          <Badge variant="outline" className="bg-background/10 border-white/20 text-white backdrop-blur-sm mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            100% Crystal Clear Guarantee
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Worry-Free Pool Flow
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
            The <span className="text-primary font-semibold">best-in-class pool service</span> in Port Charlotte & Punta Gorda.
            Crystal clear guarantee with digital service reports.
          </p>

          {/* Geo-Verification Tool */}
          <div className="bg-background/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Check Service Availability Now
            </h3>
            
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your address or zip code"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-background/20 border-white/20 text-white placeholder:text-white/60"
                data-testid="input-address"
              />
              
              <Button 
                onClick={handleCheckAvailability}
                disabled={!address.trim() || verificationResult === "checking"}
                className="w-full"
                data-testid="button-check-availability"
              >
                {verificationResult === "checking" ? "Checking..." : "Check Availability"}
              </Button>

              {/* Verification Results */}
              {verificationResult === "covered" && (
                <div className="bg-primary/20 border border-primary/30 rounded-md p-4">
                  <p className="text-primary font-semibold">🎉 You're Covered! See Plans</p>
                  <p className="text-sm text-white/80 mt-1">We provide premium service in your area</p>
                  <Button size="sm" className="mt-3" data-testid="button-see-plans">
                    Get Your Quote
                  </Button>
                </div>
              )}

              {verificationResult === "expanding" && (
                <div className="bg-accent/20 border border-accent/30 rounded-md p-4">
                  <p className="text-accent-foreground font-semibold">We're Expanding Soon!</p>
                  <p className="text-sm text-white/80 mt-1">Join our waitlist for early access</p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 bg-background/20 border-white/20 text-white placeholder:text-white/60"
                    data-testid="input-email-waitlist"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-background/10 border-white/20 text-white hover:bg-background/20 backdrop-blur-sm">
              View Our Services
            </Button>
            <p className="text-sm text-white/70">Serving Port Charlotte • Punta Gorda • West Charlotte County</p>
          </div>
        </div>
      </div>
    </section>
  );
}