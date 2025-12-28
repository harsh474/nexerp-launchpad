import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-accent-foreground rounded-full" />
        <div className="absolute top-20 right-20 w-60 h-60 border-2 border-accent-foreground rounded-full" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 border-2 border-accent-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-10">
            Get a free audit of your current systems. We'll show you exactly how ERPNext can solve your inventory, billing, and accounting challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-navy-light">
                <Calendar className="w-5 h-5" />
                Book Free Audit
              </Button>
            </Link>
            <a href="tel:9301592158">
              <Button variant="heroOutline" size="xl" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                <Phone className="w-5 h-5" />
                Call: 9301592158
              </Button>
            </a>
          </div>

          <p className="text-accent-foreground/60 text-sm mt-6">
            No obligation • Free consultation • Quick response
          </p>
        </div>
      </div>
    </section>
  );
};
