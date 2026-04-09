import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AuLeadForm } from "@/components/au-landing/AuLeadForm";
import { CheckCircle, AlertTriangle, Clock, ArrowRight, Package, Factory, BarChart3, Users, Headphones } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/nexerp-info/30min";

const problems = [
  "Inventory not matching actual stock",
  "Production delays due to poor planning",
  "No real-time visibility across operations",
  "Too much manual Excel work",
  "Difficulty scaling operations",
];

const solutions = [
  "Track inventory in real-time",
  "Manage Bill of Materials (BOM)",
  "Plan and schedule production efficiently",
  "Automate accounting and reporting",
  "Provide full visibility across operations",
];

const deliverables = [
  { icon: Factory, text: "ERP implementation tailored for manufacturing" },
  { icon: Package, text: "Custom workflows based on your operations" },
  { icon: BarChart3, text: "Data migration from Excel or legacy systems" },
  { icon: Users, text: "Training for your team" },
  { icon: Headphones, text: "Ongoing support" },
];

const results = [
  "30–50% reduction in manual work",
  "Accurate inventory tracking",
  "Faster production cycles",
  "Better decision-making with real-time data",
];

const AuManufacturingErp = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Struggling to Control Inventory, Production & Costs?
            <br />
            <span className="text-accent">We Implement ERP Systems for Australian Manufacturers in 30–60 Days</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Fix stock mismatches, delayed production, and manual processes with a fully customized ERP system built for manufacturing businesses.
          </p>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="xl" className="text-lg">
              Book Free ERP Assessment Call <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </a>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Sound Familiar?
          </h2>
          <div className="space-y-4 mb-8">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-destructive font-semibold text-lg">
            These problems cost your business time and money every day.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            We help Australian manufacturers implement ERP systems that:
          </h2>
          <div className="space-y-3 mt-10 mb-10">
            {solutions.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-accent/5 rounded-xl border border-accent/20">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{s}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                Book Free ERP Assessment Call <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            What You Get
          </h2>
          <div className="space-y-4">
            {deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <d.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">{d.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Timeline</span>
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Go live in <span className="text-accent">30–60 days</span>, not 6–12 months.
          </h2>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Results You Can Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-5 bg-card rounded-xl border border-accent/20">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Option 1 */}
            <div className="text-center p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">
                Book a Free ERP Assessment Call
              </h3>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg" className="w-full">
                  Book Free ERP Assessment Call <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </a>
            </div>

            {/* Option 2 */}
            <div className="text-center p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                Not Ready to Book a Call?
              </h3>
              <p className="text-primary-foreground/60 text-sm mb-6">
                Fill this form and we'll review your business and get back to you within 24 hours.
              </p>
              <AuLeadForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuManufacturingErp;
