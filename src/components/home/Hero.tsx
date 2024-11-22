import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Streamline Your Practice Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            All-in-one solution for accountants and tax professionals to manage clients, 
            projects, and teams efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://calendly.com/shubham-skandco/mypract-demo-meeting" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://mypract.lovable.app/login" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;