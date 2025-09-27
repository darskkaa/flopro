import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCallButton() {
  const handleCall = () => {
    // Open phone dialer with the Flo Pro phone number
    window.location.href = 'tel:+19415557665';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        onClick={handleCall}
        className="rounded-full shadow-xl w-14 h-14 p-0 bg-primary hover:bg-primary/90"
        data-testid="button-floating-call"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Call Flo Pro Pool Service</span>
      </Button>
      
      {/* Phone number display on tap/hover */}
      <div className="absolute bottom-16 right-0 bg-background border rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        (941) 555-POOL
      </div>
    </div>
  );
}