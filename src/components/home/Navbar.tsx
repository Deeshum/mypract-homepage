import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          MyPract
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-primary"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-600 hover:text-primary"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-600 hover:text-primary"
          >
            Contact
          </button>
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <a href="https://calendly.com/shubham-skandco/mypract-demo-meeting" target="_blank" rel="noopener noreferrer">Book Demo</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;