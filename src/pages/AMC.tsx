import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Shield, Clock, Headphones, Wrench } from "lucide-react";

const amcPlans = [
  {
    icon: Clock,
    name: "Monthly Retainer",
    price: "₹10,000 – ₹40,000",
    period: "/month",
    description: "Dedicated monthly support hours for ongoing maintenance and small enhancements.",
    features: [
      "8-40 support hours/month",
      "Priority ticket handling",
      "Bug fixes & patches",
      "Minor customizations",
      "Monthly health check",
      "Remote support"
    ]
  },
  {
    icon: Headphones,
    name: "Hourly Bucket",
    price: "₹1,200 – ₹2,500",
    period: "/hour",
    description: "Flexible support model. Buy hours in advance and use as needed.",
    features: [
      "Pre-purchased hour blocks",
      "10, 25, or 50 hour packages",
      "No monthly commitment",
      "Rollover unused hours",
      "Development & support",
      "Discounted bulk rates"
    ]
  },
  {
    icon: Wrench,
    name: "Ticket Support",
    price: "₹500 – ₹1,500",
    period: "/ticket",
    description: "Pay per issue. Ideal for businesses with occasional support needs.",
    features: [
      "Simple issue: ₹500",
      "Medium issue: ₹1,000",
      "Complex issue: ₹1,500",
      "48-hour response time",
      "No minimum commitment",
      "Email & phone support"
    ]
  },
  {
    icon: Shield,
    name: "Managed Service",
    price: "₹1,00,000 – ₹5,00,000",
    period: "/year",
    description: "Comprehensive annual contract covering all support, updates, and enhancements.",
    features: [
      "Unlimited support tickets",
      "24/7 priority support",
      "System monitoring",
      "Security updates",
      "Quarterly reviews",
      "On-site visits included",
      "Dedicated account manager"
    ],
    highlight: true
  }
];

const benefits = [
  {
    title: "System Stability",
    description: "Regular health checks and proactive maintenance keep your ERP running smoothly."
  },
  {
    title: "Quick Resolution",
    description: "Priority support ensures your issues are resolved before they impact business."
  },
  {
    title: "Continuous Improvement",
    description: "Regular updates and enhancements keep your system current and competitive."
  },
  {
    title: "Peace of Mind",
    description: "Focus on your business while we handle the technical aspects."
  }
];

const AMC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              AMC Plans
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Annual Maintenance Contracts
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Secure your ERPNext investment with our flexible support and maintenance plans designed for Indian businesses.
            </p>
          </div>
        </div>
      </section>

      {/* AMC Plans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amcPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                  plan.highlight ? "border-accent shadow-glow" : "border-border hover:border-accent/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button 
                    variant={plan.highlight ? "accent" : "outline"} 
                    className="w-full"
                  >
                    Get AMC Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Invest in AMC?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An AMC is not an expense—it's an investment in business continuity and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-xl p-6 text-center">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Start Your AMC with NexERP Solutions
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Secure your system. Get priority support. Focus on growing your business while we handle the technology.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-navy-light">
              Get AMC Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AMC;
