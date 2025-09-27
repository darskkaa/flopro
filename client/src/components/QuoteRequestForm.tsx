import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceAddress: z.string().min(5, "Service address is required"),
  poolType: z.string().min(1, "Please select your pool type"),
  message: z.string().optional()
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const poolTypes = [
  { value: "chlorine", label: "Chlorine Pool" },
  { value: "saltwater", label: "Saltwater Pool" }, 
  { value: "spa", label: "Spa Only" },
  { value: "pool-spa", label: "Pool + Spa Combo" },
  { value: "natural", label: "Natural/Eco Pool" }
];

export default function QuoteRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceAddress: "",
      poolType: "",
      message: ""
    }
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    console.log('Quote form submitted:', data); //todo: remove mock functionality
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      form.reset();
    }, 2000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-8">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Quote Request Received!</h3>
              <p className="text-muted-foreground">
                Thank you for your interest in Flo Pro pool service. We'll contact you within 2 business hours 
                to discuss your pool care needs and provide a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setSubmitted(false)}>Request Another Quote</Button>
                <Button variant="outline" onClick={() => console.log('Call clicked')}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call (941) 555-POOL
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">Get Your Quote</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Crystal Clear Water?
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a personalized quote for premium pool service in Port Charlotte and Punta Gorda. 
                We'll contact you within 2 business hours.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Call for Immediate Service</p>
                  <p className="text-muted-foreground">(941) 555-POOL</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-muted-foreground">service@flopro.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Service Areas</p>
                  <p className="text-muted-foreground">Port Charlotte • Punta Gorda • West Charlotte County</p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="font-semibold text-primary mb-3">Our Guarantees</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>100% Crystal Clear Water Guarantee</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>2-Hour Response Time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>Licensed & Insured Service</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>No Contract Required</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(941) 555-0123" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Address <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="123 Pool Lane, Port Charlotte, FL 33948" {...field} data-testid="input-address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="poolType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pool Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-pool-type">
                              <SelectValue placeholder="Select your pool type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {poolTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about any specific concerns or special requirements..."
                            className="resize-none"
                            rows={4}
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                    data-testid="button-submit-quote"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    <Send className="h-4 w-4 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information will only be used to provide your pool service quote.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}