import { Droplets, Shield, Smartphone, Calendar, Wrench, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Droplets,
    title: "Weekly Pool Cleaning",
    description: "Complete water testing, chemical balancing, skimming, and vacuuming to keep your pool crystal clear.",
    features: ["Water chemistry testing", "Skimming & vacuuming", "Filter cleaning", "Chemical balancing"]
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Professional inspection and maintenance of pumps, filters, heaters, and automation systems.",
    features: ["Pump inspection", "Filter maintenance", "Equipment troubleshooting", "Preventive care"]
  },
  {
    icon: Smartphone,
    title: "Digital Service Reports",
    description: "Get detailed photo reports after every service with water chemistry readings and notes.",
    features: ["Photo documentation", "Chemical readings", "Service notes", "Issue alerts"],
    premium: true
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Consistent weekly service with easy rescheduling through our customer portal.",
    features: ["Weekly consistency", "Easy rescheduling", "Service notifications", "Holiday adjustments"]
  },
  {
    icon: Shield,
    title: "Equipment Protection",
    description: "Early detection and prevention of costly equipment failures through regular monitoring.",
    features: ["Early problem detection", "Equipment lifespan extension", "Warranty protection", "Emergency support"]
  },
  {
    icon: Sparkles,
    title: "Crystal Clear guarantee",
    description: "If your pool isn't perfectly clear, we'll return and fix it at no extra cost.",
    features: ["100% satisfaction guarantee", "Free return visits", "No hidden fees", "Quality assurance"],
    premium: true
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Flo Pro</span> Complete Pool Care Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine maintenance to equipment care, <span className="font-semibold text-primary">Flo Pro</span> handles everything so you can simply enjoy your pool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`hover-elevate transition-all duration-300 ${service.premium ? 'ring-1 ring-primary/20' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      {service.premium && (
                        <Badge variant="secondary" className="mt-1 text-xs">Premium Feature</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">All services include our Crystal Clear Guarantee</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline">Licensed & Insured</Badge>
            <Badge variant="outline">Same-Day Emergency Service</Badge>
            <Badge variant="outline">Eco-Friendly Chemicals</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}