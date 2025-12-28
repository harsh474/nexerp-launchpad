import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, Truck, School, Factory, CheckCircle, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Store,
    title: "Retail Chains",
    description: "Transform your retail operations with integrated POS, inventory management, and customer engagement tools.",
    challenges: [
      "Inventory mismatch across stores",
      "Manual billing errors",
      "No visibility into real-time sales",
      "Customer data scattered"
    ],
    solutions: [
      "Unified POS across all outlets",
      "Real-time inventory sync",
      "Barcode-based operations",
      "Customer loyalty programs",
      "GST-compliant invoicing",
      "Multi-store dashboards"
    ]
  },
  {
    icon: Truck,
    title: "Wholesale & Distribution",
    description: "Streamline distribution operations with multi-warehouse management, route planning, and GST automation.",
    challenges: [
      "Complex GST compliance",
      "Multi-warehouse chaos",
      "Order fulfillment delays",
      "Manual route planning"
    ],
    solutions: [
      "Multi-warehouse inventory",
      "Automated GST returns",
      "Order-to-dispatch tracking",
      "Batch & serial tracking",
      "Credit limit management",
      "Supplier portal access"
    ]
  },
  {
    icon: School,
    title: "Education Sector",
    description: "Complete school management from admissions to alumni. Fees, attendance, academics, and HR in one system.",
    challenges: [
      "Fee collection tracking",
      "Manual attendance records",
      "Paper-based admissions",
      "Scattered student data"
    ],
    solutions: [
      "Online fee collection",
      "Digital attendance",
      "Admission management portal",
      "Student information system",
      "Parent communication app",
      "Staff HR & payroll"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production with BOM management, work orders, quality control, and subcontracting workflows.",
    challenges: [
      "Production planning gaps",
      "Material tracking issues",
      "Quality control lapses",
      "Subcontractor management"
    ],
    solutions: [
      "Bill of Materials (BOM)",
      "Production planning",
      "Work order tracking",
      "Quality inspection",
      "Subcontracting management",
      "Capacity planning"
    ]
  }
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              ERPNext Solutions by Industry
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We understand the unique challenges of each sector. Our solutions are tailored to address industry-specific pain points.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                      <industry.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground">
                      {industry.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    {industry.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Common Challenges
                    </h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button variant="accent">
                      Get {industry.title} Solution
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`bg-secondary rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                    Our Solutions
                  </h3>
                  <ul className="space-y-4">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
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
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            ERPNext is versatile and can be customized for any business. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-navy-light">
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
