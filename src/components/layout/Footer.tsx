import { Link } from "react-router-dom";
import { Mail, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Workflow Optimization", path: "/services" },
    { name: "Custom Development", path: "/services" },
    { name: "Integrations", path: "/services" },
    { name: "Reporting & Performance", path: "/services" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-base">N</span>
              </div>
              <span className="font-display font-bold text-lg">
                Nex<span className="text-accent">ERP</span>
              </span>
            </Link>
            <p className="text-primary-foreground/50 mb-6 max-w-sm text-sm leading-relaxed">
              Founder-led ERPNext customization and workflow optimization for manufacturing, distribution, and operations-driven businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:harshrajput1101@gmail.com" className="text-primary-foreground/40 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://x.com/HarshRajput7301" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-primary-foreground/40 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-primary-foreground/40 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/30 text-xs text-center">
            © {new Date().getFullYear()} NexERP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
