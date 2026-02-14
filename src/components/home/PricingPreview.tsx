import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch } from "lucide-react";

export const PricingPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <FileSearch className="w-7 h-7 text-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing After <span className="text-gradient">System Audit</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-3 leading-relaxed">
            Every ERPNext environment is unique. We provide structured proposals after understanding your workflows, customization depth, and operational requirements.
          </p>
          <p className="text-muted-foreground mb-8">
            No generic packages — just honest, scope-based pricing.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Schedule a Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
