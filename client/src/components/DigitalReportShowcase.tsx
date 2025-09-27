import { Smartphone, Camera, BarChart3, Bell, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import digitalReportImage from '@assets/generated_images/Digital_service_report_mockup_b9044cab.png';

export default function DigitalReportShowcase() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">Premium Technology</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Service Reports That Set Us Apart
              </h2>
              <p className="text-xl text-muted-foreground">
                Never wonder what happened during your pool service again. Get detailed photo reports, 
                chemical readings, and maintenance notes delivered straight to your phone.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Camera className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Photo Documentation</h4>
                    <p className="text-sm text-muted-foreground">Before & after photos of every service</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Chemical Analysis</h4>
                    <p className="text-sm text-muted-foreground">Detailed water chemistry readings</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Issue Alerts</h4>
                    <p className="text-sm text-muted-foreground">Early warning for potential problems</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Service Notes</h4>
                    <p className="text-sm text-muted-foreground">Detailed notes on work performed</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Benefits */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="font-semibold text-primary mb-3 flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                Why Our Clients Love Digital Reports
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Transparency:</strong> See exactly what work was performed</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Peace of Mind:</strong> Know your pool is properly maintained</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Value Proof:</strong> Document the premium service you receive</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Problem Prevention:</strong> Catch issues before they become expensive</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={digitalReportImage}
                alt="Digital pool service report on mobile device" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}