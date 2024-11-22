import { Facebook, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 text-sm">
              MyPract is an innovative practice management platform designed to empower accountants and tax professionals. From managing client workflows to tracking partnerships and rewards, we simplify your practice, so you can focus on what matters.
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="#workflow" className="text-gray-600 hover:text-primary text-sm">Workflow Management</Link></li>
              <li><Link to="#collaboration" className="text-gray-600 hover:text-primary text-sm">Client Collaboration</Link></li>
              <li><Link to="#tracking" className="text-gray-600 hover:text-primary text-sm">Partnership Tracking</Link></li>
              <li><Link to="#compliance" className="text-gray-600 hover:text-primary text-sm">Compliance & Reporting</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-primary text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary text-sm">Pricing</Link></li>
              <li><Link to="/faqs" className="text-gray-600 hover:text-primary text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 hover:text-primary text-sm">Case Studies</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-primary text-sm">User Guides</Link></li>
              <li><Link to="/webinars" className="text-gray-600 hover:text-primary text-sm">Webinars</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-8 mb-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4" /> hello@mypract.com
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="w-4 h-4" /> +91-8939774259
              </li>
              <li className="flex items-start gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mt-1" /> Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-600 text-sm mb-4">Follow us for updates and tips:</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} MyPract. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;