import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  ShoppingCart, 
  GraduationCap, 
  BarChart3, 
  Plug, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "ERPNext Implementation",
    description: "End-to-end setup with customization for your specific business needs.",
  },
  {
    icon: ShoppingCart,
    title: "POS & Retail Automation",
    description: "Billing, inventory, and customer management for retail stores.",
  },
  {
    icon: GraduationCap,
    title: "School ERP Setup",
    description: "Fees, attendance, student records, and HR management for schools.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect with Tally, WhatsApp API, payment gateways & more.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Custom dashboards and print formats for informed decisions.",
  },
  {
    icon: Headphones,
    title: "AMC Support",
    description: "Ongoing maintenance, training, and priority support desk.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Services"
          title="Complete ERPNext Solutions"
          subtitle="From implementation to ongoing support, we handle everything so you can focus on growing your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
