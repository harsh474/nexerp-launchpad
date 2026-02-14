import { Wrench, Gauge, Bug, Blocks, Brain } from "lucide-react";

const supportItems = [
  { icon: Wrench, title: "Continuous Enhancements", description: "Iterative improvements as your business evolves" },
  { icon: Gauge, title: "Performance Tuning", description: "Database optimization and load management" },
  { icon: Bug, title: "Bug Resolution", description: "Fast turnaround on critical and non-critical fixes" },
  { icon: Blocks, title: "Feature Expansion", description: "New modules and functionality as you scale" },
  { icon: Brain, title: "Technical Advisory", description: "Strategic guidance on ERPNext architecture" },
];

export const SupportSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Long-Term Partnership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ongoing ERPNext <span className="text-gradient">Technical Partnership</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide structured long-term support — positioning as your engineering partner, not a one-time implementer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-5 text-center hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
