import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Bronze",
    subtitle: "For Small Retail & POS",
    price: "₹50,000",
    priceMax: "₹1,50,000",
    popular: false,
    features: [
      "Basic ERPNext setup",
      "POS configuration",
      "Single-store inventory",
      "GST billing setup",
      "5 user licenses",
      "2 weeks implementation",
      "Basic training",
      "1 month support"
    ]
  },
  {
    name: "Silver",
    subtitle: "For Distributors & GST Workflow",
    price: "₹1,50,000",
    priceMax: "₹3,50,000",
    popular: true,
    features: [
      "Everything in Bronze",
      "Multi-warehouse setup",
      "GST workflow automation",
      "Customer/Supplier portals",
      "15 user licenses",
      "4 weeks implementation",
      "Advanced training",
      "3 months support",
      "Custom reports"
    ]
  },
  {
    name: "Gold",
    subtitle: "For Schools & Multi-module",
    price: "₹3,50,000",
    priceMax: "₹8,00,000",
    popular: false,
    features: [
      "Everything in Silver",
      "Education module setup",
      "Fee management system",
      "Admission portal",
      "HR & Payroll",
      "30 user licenses",
      "8 weeks implementation",
      "On-site training",
      "6 months support",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    subtitle: "For Multi-branch & Custom",
    price: "₹10,00,000",
    priceMax: "₹50,00,000",
    popular: false,
    features: [
      "Everything in Gold",
      "Multi-company setup",
      "Custom module development",
      "Third-party integrations",
      "Unlimited users",
      "Dedicated project manager",
      "12+ weeks implementation",
      "Comprehensive training",
      "12 months support",
      "24/7 priority support"
    ]
  }
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Pricing & Packages
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing for Indian SMEs
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Choose a package that fits your business size and requirements. All prices are indicative and can be customized.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                  pkg.popular ? "border-accent shadow-glow" : "border-border hover:border-accent/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pkg.subtitle}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground"> – {pkg.priceMax}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button 
                      variant={pkg.popular ? "accent" : "outline"} 
                      className="w-full"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Flexible Pricing for Your Needs
            </h3>
            <p className="text-muted-foreground mb-6">
              Prices vary based on complexity, customization requirements, and number of modules. Contact us for a detailed quote tailored to your specific needs.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Not Sure Which Package Is Right?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Book a free consultation call. We'll understand your requirements and recommend the best package for your business.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-navy-light">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
