import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DigitalReportShowcase from "@/components/DigitalReportShowcase";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DigitalReportShowcase />
        <TestimonialsCarousel />
        <QuoteRequestForm />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}