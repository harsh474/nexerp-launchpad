import { AlertTriangle, Clock, BarChart3, Puzzle, Gauge, TrendingUp } from "lucide-react";

const problems = [
  { icon: Clock, text: "Inefficient manual workflows" },
  { icon: Puzzle, text: "Customization limitations" },
  { icon: Gauge, text: "Performance bottlenecks" },
  { icon: BarChart3, text: "Reporting gaps" },
  { icon: TrendingUp, text: "Growing operational complexity" },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/5 text-destructive text-sm font-medium mb-4">
            Common Challenges
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Already Using ERPNext?{" "}
            <span className="text-gradient">Let's Make It Better.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/5 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-5 h-5 text-destructive/70" />
              </div>
              <span className="text-sm text-foreground font-medium">{problem.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-lg max-w-xl mx-auto">
          We specialize in <span className="text-foreground font-semibold">optimizing and extending ERPNext</span> beyond standard modules.
        </p>
      </div>
    </section>
  );
};
