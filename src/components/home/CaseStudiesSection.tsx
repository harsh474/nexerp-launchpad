import { ArrowRight, Factory, Users, Plug } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    icon: Factory,
    category: "Manufacturing",
    title: "Manufacturing Workflow Automation",
    problem: "A manufacturing firm was losing 15+ hours weekly on manual BOM updates, production order tracking, and quality inspection logging across multiple product lines.",
    solution: "Built custom workflow automations for BOM management, auto-generation of production orders from sales orders, and integrated quality inspection checklists with automated status transitions.",
    result: "Reduced manual reporting workload significantly. Zero manual BOM errors. Real-time production visibility across all lines.",
  },
  {
    icon: Users,
    category: "HRMS",
    title: "HR Onboarding Optimization",
    problem: "HR team spent 3+ days per new hire on paperwork, access provisioning, and training coordination with no standardized process.",
    solution: "Developed a custom onboarding DocType with automated task assignment, role-based access provisioning, and milestone tracking with manager notifications.",
    result: "20% faster onboarding process. Standardized experience for every new hire. Complete audit trail for compliance.",
  },
  {
    icon: Plug,
    category: "Integration",
    title: "CRM & API Integration with Third-Party Systems",
    problem: "Sales data was siloed across ERPNext CRM and three external platforms, causing duplicate entries and missed follow-ups.",
    solution: "Built REST API integrations with webhook-based real-time sync, custom field mapping, and conflict resolution logic to unify all customer data in ERPNext.",
    result: "Single source of truth for all customer data. 60% reduction in duplicate entries. Automated lead-to-opportunity pipeline.",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Case <span className="text-gradient">Studies</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{study.category}</span>
              </div>
              
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {study.title}
              </h3>

              <div className="space-y-4 flex-1">
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Problem</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solution</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
                <div className="bg-accent/5 rounded-lg p-3 border border-accent/10">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Result</div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
