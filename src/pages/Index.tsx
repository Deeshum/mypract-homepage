import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
    </div>
  );
};

export default Index;