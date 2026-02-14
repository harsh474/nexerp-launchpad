import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Workflow, Shield } from "lucide-react";

const credibility = [
  "Deep expertise in Buying, Selling, Manufacturing, HRMS & CRM",
  "Advanced Python & JavaScript customizations",
  "Clean architecture & long-term support",
];

export const Hero = () => {
  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-8 animate-fade-up">
            <Code className="w-4 h-4" />
            Founder-Led ERPNext Engineering
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            ERPNext Customization &{" "}
            <span className="text-gradient">Workflow Optimization</span>{" "}
            Experts
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We help businesses already using ERPNext streamline complex workflows, automate operations, and build scalable custom solutions tailored to their processes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="heroOutline" size="xl">
                View Case Studies
              </Button>
            </Link>
          </div>

          {/* Credibility bullets */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {credibility.map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract stats bar */}
        <div className="mt-20 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-3 gap-px bg-primary-foreground/5 rounded-2xl overflow-hidden">
            {[
              { icon: Workflow, label: "Workflow Automations", value: "50+" },
              { icon: Code, label: "Custom Integrations", value: "100+" },
              { icon: Shield, label: "Active Support Contracts", value: "30+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-primary/80 backdrop-blur-sm p-6 text-center">
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-primary-foreground/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
