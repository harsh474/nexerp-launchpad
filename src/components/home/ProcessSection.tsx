const steps = [
  {
    number: "01",
    title: "ERPNext System Audit",
    description: "Comprehensive review of your current setup, workflows, and pain points.",
  },
  {
    number: "02",
    title: "Workflow & Architecture Blueprint",
    description: "Detailed technical plan with clear milestones and deliverables.",
  },
  {
    number: "03",
    title: "Milestone-Based Development",
    description: "Iterative development with regular check-ins and transparent progress tracking.",
  },
  {
    number: "04",
    title: "Testing & Validation",
    description: "Rigorous testing in staging environments before any production deployment.",
  },
  {
    number: "05",
    title: "Deployment & Post-Launch Support",
    description: "Smooth go-live with monitoring, documentation, and ongoing technical support.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Our Optimization <span className="text-gradient">Framework</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6 mb-8 last:mb-0">
              {/* Number + Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-display font-bold text-sm">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full bg-accent/10 mt-2" />
                )}
              </div>
              
              {/* Content */}
              <div className="pb-8">
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/40 text-lg mt-12 italic">
          We don't replace your ERPNext — we engineer it to perform better.
        </p>
      </div>
    </section>
  );
};
