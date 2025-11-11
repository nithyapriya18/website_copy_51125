import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 pb-12 border-b border-border/50">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="Opura AI" 
                className="h-8 w-8 object-contain translate-y-0.5"
              />
              <span className="text-lg" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 300, letterSpacing: '0.15em', lineHeight: '1' }}>
                opura <span className="bg-gradient-to-r from-[hsl(175,80%,44%)] to-[hsl(190,95%,50%)] bg-clip-text text-transparent">ai</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI that understands consumers. AI that empowers businesses.

            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
{/* Add this section in your Footer component, before the copyright */}
<div className="border-t border-gray-800 pt-8 mt-8">
  <div className="text-center">
    <p className="text-xs text-gray-500 mb-3 font-semibold">Research & Data Sources</p>
    <p className="text-xs text-gray-600 leading-relaxed max-w-4xl mx-auto">
      *Statistics and benchmarks cited throughout this website are sourced from: 
      BigCommerce AI Agents Study (2025), Plivo AI Customer Service Report (2025), 
      Experro AI Statistics, Baymard Institute (2024), IRP Commerce Report, 
      McKinsey Digital Commerce Study, and additional industry research from 
      Forrester, Gartner, and SAP Value Lifecycle Manager.
    </p>
  </div>
</div>
        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 Opura AI Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;