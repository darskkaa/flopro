import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import logoImage from '@assets/flopro_logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Flo Pro Pool Service" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-primary">Flo Pro</div>
                <Badge variant="outline" className="w-fit">Pool Service</Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Worry-Free Pool Flow. Crystal Clear Guarantee. The best-in-class pool service 
              serving Southwest Florida within 60 miles of Port Charlotte.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-2 rounded-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-2 rounded-md">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Weekly Pool Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Equipment Maintenance</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Digital Service Reports</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Emergency Repairs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Chemical Balancing</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold">Service Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-primary" />
                <span>Port Charlotte, FL</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-primary" />
                <span>Punta Gorda, FL</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-primary" />
                <span>West Charlotte County</span>
              </li>
              <li className="text-xs text-muted-foreground/80 mt-3">
                Licensed & insured in Charlotte County, Florida
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <a href="tel:+19415557665" className="flex items-center space-x-3 text-sm hover:text-primary transition-colors hover-elevate p-2 rounded-md">
                <Phone className="h-4 w-4 text-primary" />
                <span>(941) 555-POOL</span>
              </a>
              <a href="mailto:service@flopro.com" className="flex items-center space-x-3 text-sm hover:text-primary transition-colors hover-elevate p-2 rounded-md">
                <Mail className="h-4 w-4 text-primary" />
                <span>service@flopro.com</span>
              </a>
            </div>
            <div className="space-y-1">
              <Badge variant="outline" className="text-xs">Emergency Service Available</Badge>
              <p className="text-xs text-muted-foreground">24/7 for equipment failures</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section - Local Search Optimization */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">
              Premium Pool Service in Port Charlotte & Punta Gorda
            </h2>
            <div className="max-w-4xl mx-auto text-sm text-muted-foreground space-y-4">
              <p>
                <strong>Port Charlotte Pool Service:</strong> Flo Pro provides comprehensive pool maintenance, 
                cleaning, and equipment repair services throughout Port Charlotte, Florida. Our certified 
                technicians deliver crystal clear water with weekly service, chemical balancing, and digital 
                service reports that keep your pool perfect year-round.
              </p>
              <p>
                <strong>Punta Gorda Pool Care:</strong> Professional pool maintenance in Punta Gorda with 
                our signature digital service reporting system. We handle everything from routine cleaning 
                to equipment maintenance, ensuring your pool stays crystal clear with our 100% satisfaction guarantee.
              </p>
              <p>
                <strong>West Charlotte County Pool Maintenance:</strong> Serving the broader West Charlotte 
                County area with premium pool care services. Licensed and insured professionals providing 
                weekly pool service, equipment maintenance, and emergency repairs with transparent digital 
                reporting and crystal clear water guarantee.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <Badge variant="secondary">Pool Cleaning Port Charlotte</Badge>
              <Badge variant="secondary">Punta Gorda Pool Service</Badge>
              <Badge variant="secondary">Charlotte County Pool Care</Badge>
              <Badge variant="secondary">Digital Pool Reports</Badge>
              <Badge variant="secondary">Crystal Clear Guarantee</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Flo Pro Pool Service. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors hover-elevate px-1 py-1 rounded">License Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}