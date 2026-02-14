import { Workflow, Code, Settings, Plug, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Optimization",
    items: [
      "Custom approval chains",
      "Automated document flows",
      "Role-based access logic",
      "Business rule scripting",
    ],
  },
  {
    icon: Code,
    title: "Custom Development",
    items: [
      "Custom DocTypes & fields",
      "Python server scripts",
      "JavaScript client scripts",
      "Custom ERPNext apps",
    ],
  },
  {
    icon: Settings,
    title: "Module Enhancements",
    items: [
      "Buying & Selling workflow extensions",
      "Manufacturing automation",
      "HRMS process optimization",
      "CRM pipeline customization",
    ],
  },
  {
    icon: Plug,
    title: "Integrations",
    items: [
      "REST API integrations",
      "Webhooks",
      "Payment gateway integration",
      "External system sync",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Performance",
    items: [
      "Custom dashboards",
      "SQL-based reports",
      "Database indexing",
      "Background job optimization",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Advanced ERPNext{" "}
            <span className="text-gradient">Customization Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 ${
                index === services.length - 1 && services.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
