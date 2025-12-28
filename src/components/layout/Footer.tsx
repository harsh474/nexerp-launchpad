import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "ERPNext Implementation", path: "/services" },
    { name: "Custom Modules", path: "/services" },
    { name: "POS & Retail", path: "/services" },
    { name: "School ERP", path: "/services" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Pricing", path: "/pricing" },
    { name: "AMC Plans", path: "/amc" },
  ],
  support: [
    { name: "Contact", path: "/contact" },
    { name: "Book Demo", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl">
                Nex<span className="text-accent">ERP</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your trusted ERPNext partner in Delhi NCR. We fix inventory, accounting, billing & operations for retail, wholesale & education sectors.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:harshrajput1101@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>harshrajput1101@gmail.com</span>
              </a>
              <a href="tel:9301592158" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 9301592158</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="mt-6">
              <a
                href="https://x.com/HarshRajput7301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Follow on X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} NexERP Solutions. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Empowering SMEs with ERPNext Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
