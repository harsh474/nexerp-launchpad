import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  FileText,
  Code,
  TestTube,
  Rocket,
  Headphones,
  CheckCircle,
  Clock,
  Users,
  MessageCircle,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    duration: "30–60 minutes",
    description:
      "We start with a focused conversation to understand your business, current ERPNext setup, pain points, and goals. No sales pitch — just technical understanding.",
    deliverables: [
      "Understanding of your current ERPNext environment",
      "Identification of key challenges and priorities",
      "Initial feasibility assessment",
      "Decision on whether to proceed with a full audit",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "ERPNext System Audit",
    duration: "3–5 business days",
    description:
      "A deep-dive into your ERPNext instance — reviewing configurations, workflows, custom scripts, database structure, and performance bottlenecks.",
    deliverables: [
      "Complete system configuration review",
      "Workflow and automation gap analysis",
      "Performance assessment and bottleneck identification",
      "Custom code quality review",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "Customization Plan & Proposal",
    duration: "2–3 business days",
    description:
      "Based on the audit, we create a detailed technical plan with clear scope, milestones, timelines, and transparent pricing. No surprises.",
    deliverables: [
      "Detailed technical specification document",
      "Milestone breakdown with timelines",
      "Scope-based pricing proposal",
      "Risk assessment and mitigation plan",
    ],
  },
  {
    number: "04",
    icon: Code,
    title: "Milestone-Based Development",
    duration: "Varies by scope",
    description:
      "Development proceeds in structured milestones with regular check-ins, progress updates, and iterative feedback loops. You're never in the dark.",
    deliverables: [
      "Iterative development with milestone sign-offs",
      "Regular progress updates and demos",
      "Code documentation and clean architecture",
      "Staging environment for review",
    ],
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & Validation",
    duration: "3–7 business days",
    description:
      "Rigorous testing in a staging environment before any production deployment. We validate every workflow, script, and integration thoroughly.",
    deliverables: [
      "Comprehensive testing in staging",
      "User acceptance testing (UAT) support",
      "Bug fixes and optimization",
      "Performance validation",
    ],
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment & Go-Live",
    duration: "1–2 business days",
    description:
      "Smooth production deployment with monitoring, rollback plans, and real-time support during the transition period.",
    deliverables: [
      "Production deployment with monitoring",
      "Data migration validation",
      "User training and documentation",
      "Go-live support and stabilization",
    ],
  },
  {
    number: "07",
    icon: Headphones,
    title: "Post-Launch Support & Partnership",
    duration: "Ongoing",
    description:
      "We don't disappear after deployment. Ongoing support includes bug resolution, performance tuning, feature expansion, and technical advisory.",
    deliverables: [
      "Continuous enhancements as your business evolves",
      "Performance monitoring and optimization",
      "Priority bug resolution",
      "Technical advisory and strategic guidance",
    ],
  },
];

const ProjectJourney = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Project Journey
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Complete Project Journey
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From discovery to deployment and beyond — a transparent, structured process designed for clarity at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={step.number} className="flex gap-6 md:gap-10 mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-px flex-1 bg-accent/10 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-accent font-display font-bold text-sm">
                      Step {step.number}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="bg-secondary rounded-xl border border-border p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-foreground">
                        What you get
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your{" "}
              <span className="text-gradient">Project?</span>
            </h2>
            <p className="text-primary-foreground/50 text-lg mb-10">
              Let's begin with a discovery call to understand your ERPNext challenges and goals.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectJourney;
