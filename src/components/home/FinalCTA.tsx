import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Optimize Your <span className="text-gradient">ERPNext</span>?
          </h2>
          <p className="text-primary-foreground/50 text-lg mb-10">
            Let's transform your existing ERPNext into a scalable operational system.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="xl">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
