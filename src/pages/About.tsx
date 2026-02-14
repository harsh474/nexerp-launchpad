import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Shield, Globe, Code, Workflow, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Engineering Excellence",
    description: "Every customization follows clean architecture principles — maintainable, scalable, and built to last through ERPNext upgrades."
  },
  {
    icon: Target,
    title: "Result Driven",
    description: "We focus on measurable outcomes — faster workflows, reduced manual effort, and operational efficiency gains you can quantify."
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "No hidden costs, no black-box development. You get clear timelines, milestone-based progress, and direct access to the engineer building your solution."
  }
];

const expertise = [
  {
    icon: Code,
    title: "Deep Technical Expertise",
    description: "Advanced Python and JavaScript customization within the Frappe/ERPNext framework — not just configuration, but real engineering."
  },
  {
    icon: Workflow,
    title: "Process Engineering",
    description: "We analyze and re-architect your workflows to eliminate bottlenecks, automate approvals, and enforce business logic at scale."
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "We serve clients across the US, UK, Middle East, and beyond — with async-friendly communication and timezone-aware project management."
  }
];

const whyUs = [
  "Specialized in advanced ERPNext customization — not generic ERP implementations",
  "Founder-led engineering with direct client communication",
  "Experience across manufacturing, distribution, HRMS, CRM & procurement",
  "Clean, upgrade-safe code architecture",
  "Structured milestone-based delivery with full transparency",
  "Long-term technical partnership, not one-time projects"
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              About NexERP
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Specialized ERPNext Engineering Partner
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We help businesses across the US, UK, Middle East, and globally unlock the full potential of their ERPNext systems through advanced customization and workflow optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Technical Partner, Not a Generic Agency
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                NexERP is a founder-led ERPNext customization practice built for companies that have already implemented ERPNext but need deeper technical expertise to optimize, extend, and scale their systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We work with manufacturing firms, distribution companies, and operations-driven businesses across the US, UK, and Middle East — delivering advanced workflow automation, custom module development, and performance optimization.
              </p>
              <p className="text-lg text-muted-foreground">
                Unlike large agencies, you work directly with the founder and lead engineer. Every solution is architected with clean code, clear documentation, and long-term maintainability in mind.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-foreground font-display font-bold text-4xl">N</span>
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">NexERP</p>
                  <p className="text-muted-foreground">Engineering Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Making ERPNext Work the Way Your Business Demands
            </h2>
            <p className="text-lg text-muted-foreground">
              ERPNext is powerful out of the box — but every business has unique processes that require custom engineering. Our mission is to bridge that gap with expert-level customization, automation, and ongoing optimization that transforms ERPNext from a standard tool into your competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-8 border border-border hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized technical depth combined with structured project delivery and global reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 text-center border border-border">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NexERP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                Why NexERP
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Companies Choose Us
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent rounded-2xl p-8 lg:p-12 text-accent-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">
                Ready to Optimize Your ERPNext?
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                Book a strategy call to discuss your ERPNext challenges. We'll assess your current setup and recommend a clear path forward.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
