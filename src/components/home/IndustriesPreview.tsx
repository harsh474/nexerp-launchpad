import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Truck, School, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Store,
    title: "Retail Chains",
    features: ["Point of Sale", "Multi-store Inventory", "Customer Loyalty", "GST Billing"],
    color: "bg-accent",
  },
  {
    icon: Truck,
    title: "Wholesale & Distribution",
    features: ["Multi-warehouse", "Route Planning", "GST Compliance", "Order Management"],
    color: "bg-navy",
  },
  {
    icon: School,
    title: "Education",
    features: ["Fee Management", "Admission Portal", "Student Records", "Staff HR"],
    color: "bg-teal-dark",
  },
];

export const IndustriesPreview = () => {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Tailored Solutions for Your Sector
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Whether you run a retail store, distribution business, or educational institution, we have the expertise to streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-14 h-14 ${industry.color} rounded-xl flex items-center justify-center mb-6`}>
                <industry.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {industry.title}
              </h3>
              <ul className="space-y-3">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/industries">
            <Button variant="heroOutline" size="lg">
              Explore All Industries
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
