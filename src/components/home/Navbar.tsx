import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          MyPract
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="#features" className="text-gray-600 hover:text-primary">Features</Link>
          <Link to="#pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
          <Link to="#contact" className="text-gray-600 hover:text-primary">Contact</Link>
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="#demo">Book Demo</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;