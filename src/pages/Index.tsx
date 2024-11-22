import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Demo from "@/components/home/Demo";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;