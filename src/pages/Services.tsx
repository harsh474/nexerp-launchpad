import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Workflow, 
  Code, 
  Settings, 
  Plug, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description: "Design and implement complex workflow automations that eliminate manual bottlenecks and enforce consistent business processes across your organization.",
    features: [
      "Custom approval chains",
      "Automated document flows",
      "Role-based access logic",
      "Business rule scripting",
    ],
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Extend ERPNext capabilities with custom DocTypes, server scripts, and purpose-built apps tailored to your unique operational requirements.",
    features: [
      "Custom DocTypes & fields",
      "Python server scripts",
      "JavaScript client scripts",
      "Custom ERPNext apps",
    ],
  },
  {
    icon: Settings,
    title: "Module Enhancements",
    description: "Optimize core ERPNext modules to match your real-world processes — from procurement to production to people management.",
    features: [
      "Buying & Selling workflow extensions",
      "Manufacturing automation",
      "HRMS process optimization",
      "CRM pipeline customization",
    ],
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect ERPNext with external platforms, payment gateways, and third-party APIs for seamless data flow across your tech stack.",
    features: [
      "REST API integrations",
      "Webhooks",
      "Payment gateway integration",
      "External system sync",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Performance",
    description: "Get actionable insights with custom dashboards, SQL reports, and performance optimizations that keep your ERPNext running fast.",
    features: [
      "Custom dashboards",
      "SQL-based reports",
      "Database indexing",
      "Background job optimization",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Advanced ERPNext Customization Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We specialize in optimizing, customizing, and extending ERPNext for manufacturing, distribution, and operations-driven businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="accent">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`bg-secondary rounded-2xl p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-accent/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific requirements and build a tailored ERPNext solution.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
