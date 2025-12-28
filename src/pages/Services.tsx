import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Layers, 
  ShoppingCart, 
  GraduationCap, 
  Plug, 
  BarChart3, 
  Users, 
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "ERPNext Implementation",
    description: "Complete end-to-end ERPNext setup tailored to your business processes. From requirement analysis to go-live, we handle everything.",
    features: [
      "Requirement analysis & gap assessment",
      "System configuration & setup",
      "Data migration from existing systems",
      "User acceptance testing",
      "Go-live support & stabilization"
    ]
  },
  {
    icon: Layers,
    title: "Custom Modules & Workflows",
    description: "Extend ERPNext capabilities with custom doctypes, workflows, and business logic specific to your operations.",
    features: [
      "Custom doctype development",
      "Workflow automation",
      "Business rule implementation",
      "Custom scripts & validations",
      "Role-based access control"
    ]
  },
  {
    icon: ShoppingCart,
    title: "POS & Retail Automation",
    description: "Transform your retail operations with a powerful point-of-sale system integrated with inventory and accounting.",
    features: [
      "Touch-friendly POS interface",
      "Barcode scanning & printing",
      "Multi-store inventory sync",
      "Customer loyalty programs",
      "GST-compliant invoicing"
    ]
  },
  {
    icon: GraduationCap,
    title: "School ERP Setup",
    description: "Complete school management solution covering fees, attendance, academics, and administrative functions.",
    features: [
      "Fee collection & management",
      "Attendance tracking system",
      "Student information system",
      "Admission portal",
      "Staff HR & payroll"
    ]
  },
  {
    icon: Plug,
    title: "Integration Services",
    description: "Connect ERPNext with your existing tools and third-party services for seamless data flow.",
    features: [
      "Tally integration for accounting",
      "WhatsApp API for notifications",
      "Payment gateway integration",
      "E-commerce platform sync",
      "Banking & reconciliation"
    ]
  },
  {
    icon: BarChart3,
    title: "Reports & Print Formats",
    description: "Get insights that matter with custom reports, dashboards, and professionally designed print formats.",
    features: [
      "Custom report builder",
      "Real-time dashboards",
      "Invoice & document templates",
      "GST return reports",
      "MIS & analytics"
    ]
  },
  {
    icon: Users,
    title: "Training & Staff Onboarding",
    description: "Ensure your team is confident with comprehensive training programs and documentation.",
    features: [
      "Role-based training sessions",
      "Video tutorials & guides",
      "User manuals & SOPs",
      "Train-the-trainer programs",
      "Ongoing knowledge transfer"
    ]
  },
  {
    icon: Headphones,
    title: "AMC Support Desk",
    description: "Peace of mind with dedicated support, regular updates, and proactive system maintenance.",
    features: [
      "Priority ticket support",
      "Monthly system health checks",
      "Bug fixes & patches",
      "Feature enhancements",
      "Remote & on-site support"
    ]
  }
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
              Complete ERPNext Solutions for Your Business
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From implementation to ongoing support, we provide end-to-end ERPNext services designed for Indian SMEs.
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
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
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
            Every business is unique. Let's discuss your specific requirements and create a tailored ERPNext solution.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-navy-light">
              Talk to a Consultant
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
