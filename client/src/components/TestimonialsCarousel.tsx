import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import testimonialImage from '@assets/stock_images/professional_headsho_f951a2aa.jpg';

//todo: remove mock functionality - replace with real testimonials
const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Port Charlotte, FL", 
    rating: 5,
    text: "Flo Pro transformed our pool from a constant headache to pure enjoyment. The digital reports are amazing - I love seeing exactly what they do each week. Crystal clear water every time!",
    image: testimonialImage,
    service: "Weekly Pool Service"
  },
  {
    name: "Mike Rodriguez",
    location: "Punta Gorda, FL",
    rating: 5, 
    text: "Best pool service we've ever had. They caught equipment issues before they became expensive problems. The weekly reports with photos give me complete peace of mind.",
    image: testimonialImage,
    service: "Equipment Maintenance"
  },
  {
    name: "Jennifer Thompson",
    location: "Port Charlotte, FL",
    rating: 5,
    text: "Professional, reliable, and thorough. Our pool has never looked better. The crystal clear guarantee isn't just marketing - they really deliver on their promises.",
    image: testimonialImage,
    service: "Complete Pool Care"
  },
  {
    name: "David Chen",
    location: "Punta Gorda, FL", 
    rating: 5,
    text: "Flo Pro's attention to detail is incredible. They don't just clean the pool - they maintain the entire system. The digital service reports are a game changer.",
    image: testimonialImage,
    service: "Premium Service"
  },
  {
    name: "Lisa Anderson",
    location: "West Charlotte County, FL",
    rating: 5,
    text: "Finally found a pool service that treats your pool like their own. Consistent, professional, and the best customer service. Highly recommend Flo Pro!",
    image: testimonialImage,
    service: "Weekly Service"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from pool owners across Port Charlotte and Punta Gorda.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden">
            <CardContent className="p-0">
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className="text-center space-y-6">
                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {testimonials[currentIndex].service}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all hover-elevate ${
                index === currentIndex 
                  ? 'bg-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              data-testid={`button-testimonial-${index}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}