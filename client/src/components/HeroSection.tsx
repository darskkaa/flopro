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
      const addressLower = address.toLowerCase();
      
      // Check for specific cities and zip codes within 60 miles of 33954
      const isInServiceArea = 
        // Major cities within 60 miles of 33954
        addressLower.includes("port charlotte") || 
        addressLower.includes("punta gorda") ||
        addressLower.includes("north port") ||
        addressLower.includes("venice") ||
        addressLower.includes("englewood") ||
        addressLower.includes("arcadia") ||
        addressLower.includes("fort myers") ||
        addressLower.includes("cape coral") ||
        addressLower.includes("lehigh acres") ||
        addressLower.includes("bonita springs") ||
        addressLower.includes("naples") ||
        addressLower.includes("estero") ||
        addressLower.includes("labelle") ||
        addressLower.includes("clewiston") ||
        addressLower.includes("immokalee") ||
        // Zip codes within 60 miles of 33954
        addressLower.includes("33948") || // Port Charlotte
        addressLower.includes("33950") || // Punta Gorda
        addressLower.includes("33952") || // Port Charlotte
        addressLower.includes("33953") || // Port Charlotte
        addressLower.includes("33954") || // Port Charlotte (center point)
        addressLower.includes("33955") || // Port Charlotte
        addressLower.includes("33956") || // Port Charlotte
        addressLower.includes("33957") || // Port Charlotte
        addressLower.includes("33980") || // Punta Gorda
        addressLower.includes("33981") || // Punta Gorda
        addressLower.includes("33982") || // Punta Gorda
        addressLower.includes("33983") || // Punta Gorda
        addressLower.includes("34223") || // Venice
        addressLower.includes("34224") || // Venice
        addressLower.includes("34285") || // Venice
        addressLower.includes("34286") || // Venice
        addressLower.includes("34287") || // Venice
        addressLower.includes("34288") || // Venice
        addressLower.includes("34289") || // Venice
        addressLower.includes("34291") || // Venice
        addressLower.includes("34292") || // Venice
        addressLower.includes("34293") || // Venice
        addressLower.includes("33921") || // North Port
        addressLower.includes("33922") || // North Port
        addressLower.includes("33923") || // North Port
        addressLower.includes("33924") || // North Port
        addressLower.includes("33925") || // North Port
        addressLower.includes("33926") || // North Port
        addressLower.includes("33927") || // North Port
        addressLower.includes("33928") || // North Port
        addressLower.includes("33929") || // North Port
        addressLower.includes("33930") || // North Port
        addressLower.includes("33931") || // North Port
        addressLower.includes("33932") || // North Port
        addressLower.includes("33933") || // North Port
        addressLower.includes("33934") || // North Port
        addressLower.includes("33935") || // North Port
        addressLower.includes("33936") || // North Port
        addressLower.includes("33937") || // North Port
        addressLower.includes("33938") || // North Port
        addressLower.includes("33939") || // North Port
        addressLower.includes("33940") || // North Port
        addressLower.includes("33941") || // North Port
        addressLower.includes("33942") || // North Port
        addressLower.includes("33943") || // North Port
        addressLower.includes("33944") || // North Port
        addressLower.includes("33945") || // North Port
        addressLower.includes("33946") || // North Port
        addressLower.includes("33947") || // North Port
        addressLower.includes("33949") || // North Port
        addressLower.includes("33951") || // North Port
        addressLower.includes("33958") || // North Port
        addressLower.includes("33959") || // North Port
        addressLower.includes("33960") || // North Port
        addressLower.includes("33961") || // North Port
        addressLower.includes("33962") || // North Port
        addressLower.includes("33963") || // North Port
        addressLower.includes("33964") || // North Port
        addressLower.includes("33965") || // North Port
        addressLower.includes("33966") || // North Port
        addressLower.includes("33967") || // North Port
        addressLower.includes("33968") || // North Port
        addressLower.includes("33969") || // North Port
        addressLower.includes("33970") || // North Port
        addressLower.includes("33971") || // North Port
        addressLower.includes("33972") || // North Port
        addressLower.includes("33973") || // North Port
        addressLower.includes("33974") || // North Port
        addressLower.includes("33975") || // North Port
        addressLower.includes("33976") || // North Port
        addressLower.includes("33977") || // North Port
        addressLower.includes("33978") || // North Port
        addressLower.includes("33979") || // North Port
        addressLower.includes("33981") || // North Port
        addressLower.includes("33982") || // North Port
        addressLower.includes("33983") || // North Port
        addressLower.includes("33984") || // North Port
        addressLower.includes("33985") || // North Port
        addressLower.includes("33986") || // North Port
        addressLower.includes("33987") || // North Port
        addressLower.includes("33988") || // North Port
        addressLower.includes("33989") || // North Port
        addressLower.includes("33990") || // North Port
        addressLower.includes("33991") || // North Port
        addressLower.includes("33992") || // North Port
        addressLower.includes("33993") || // North Port
        addressLower.includes("33994") || // North Port
        addressLower.includes("33995") || // North Port
        addressLower.includes("33996") || // North Port
        addressLower.includes("33997") || // North Port
        addressLower.includes("33998") || // North Port
        addressLower.includes("33999") || // North Port
        // Fort Myers area zip codes
        addressLower.includes("33901") || // Fort Myers
        addressLower.includes("33902") || // Fort Myers
        addressLower.includes("33903") || // Fort Myers
        addressLower.includes("33904") || // Fort Myers
        addressLower.includes("33905") || // Fort Myers
        addressLower.includes("33906") || // Fort Myers
        addressLower.includes("33907") || // Fort Myers
        addressLower.includes("33908") || // Fort Myers
        addressLower.includes("33909") || // Fort Myers
        addressLower.includes("33910") || // Fort Myers
        addressLower.includes("33911") || // Fort Myers
        addressLower.includes("33912") || // Fort Myers
        addressLower.includes("33913") || // Fort Myers
        addressLower.includes("33914") || // Fort Myers
        addressLower.includes("33915") || // Fort Myers
        addressLower.includes("33916") || // Fort Myers
        addressLower.includes("33917") || // Fort Myers
        addressLower.includes("33918") || // Fort Myers
        addressLower.includes("33919") || // Fort Myers
        addressLower.includes("33920") || // Fort Myers
        // Cape Coral area zip codes
        addressLower.includes("33904") || // Cape Coral
        addressLower.includes("33909") || // Cape Coral
        addressLower.includes("33914") || // Cape Coral
        addressLower.includes("33915") || // Cape Coral
        addressLower.includes("33990") || // Cape Coral
        addressLower.includes("33991") || // Cape Coral
        addressLower.includes("33993") || // Cape Coral
        // Naples area zip codes
        addressLower.includes("34101") || // Naples
        addressLower.includes("34102") || // Naples
        addressLower.includes("34103") || // Naples
        addressLower.includes("34104") || // Naples
        addressLower.includes("34105") || // Naples
        addressLower.includes("34106") || // Naples
        addressLower.includes("34107") || // Naples
        addressLower.includes("34108") || // Naples
        addressLower.includes("34109") || // Naples
        addressLower.includes("34110") || // Naples
        addressLower.includes("34112") || // Naples
        addressLower.includes("34113") || // Naples
        addressLower.includes("34114") || // Naples
        addressLower.includes("34116") || // Naples
        addressLower.includes("34117") || // Naples
        addressLower.includes("34119") || // Naples
        addressLower.includes("34120") || // Naples
        // Lehigh Acres area zip codes
        addressLower.includes("33936") || // Lehigh Acres
        addressLower.includes("33971") || // Lehigh Acres
        addressLower.includes("33972") || // Lehigh Acres
        addressLower.includes("33973") || // Lehigh Acres
        addressLower.includes("33974") || // Lehigh Acres
        // Bonita Springs area zip codes
        addressLower.includes("34134") || // Bonita Springs
        addressLower.includes("34135") || // Bonita Springs
        addressLower.includes("34136") || // Bonita Springs
        // Estero area zip codes
        addressLower.includes("33928") || // Estero
        addressLower.includes("33929") || // Estero
        // Labelle area zip codes
        addressLower.includes("33935") || // Labelle
        addressLower.includes("33936") || // Labelle
        // Clewiston area zip codes
        addressLower.includes("33440") || // Clewiston
        // Immokalee area zip codes
        addressLower.includes("34142") || // Immokalee
        addressLower.includes("34143") || // Immokalee
        // Arcadia area zip codes
        addressLower.includes("34265") || // Arcadia
        addressLower.includes("34266") || // Arcadia
        addressLower.includes("34267") || // Arcadia
        addressLower.includes("34268") || // Arcadia
        addressLower.includes("34269") || // Arcadia
        // Englewood area zip codes
        addressLower.includes("34223") || // Englewood
        addressLower.includes("34224") || // Englewood
        addressLower.includes("34285") || // Englewood
        addressLower.includes("34286") || // Englewood
        addressLower.includes("34287") || // Englewood
        addressLower.includes("34288") || // Englewood
        addressLower.includes("34289") || // Englewood
        addressLower.includes("34291") || // Englewood
        addressLower.includes("34292") || // Englewood
        addressLower.includes("34293") || // Englewood
        // General area indicators
        addressLower.includes("southwest florida") ||
        addressLower.includes("sw florida") ||
        addressLower.includes("charlotte county") ||
        addressLower.includes("lee county") ||
        addressLower.includes("collier county") ||
        addressLower.includes("desoto county") ||
        addressLower.includes("hendry county");
      
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
            The <span className="text-primary font-semibold">best-in-class pool service</span> serving Southwest Florida within 60 miles of Port Charlotte.
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