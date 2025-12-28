import { SectionHeader } from "@/components/common/SectionHeader";
import { Shield, Clock, IndianRupee, Users, Headphones, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Domain Expertise",
    description: "Deep understanding of retail, wholesale, and education sector operations in India.",
  },
  {
    icon: IndianRupee,
    title: "Cost-Effective",
    description: "Competitive pricing designed for Indian SMEs. No hidden charges, transparent billing.",
  },
  {
    icon: Clock,
    title: "Quick Deployment",
    description: "Get your ERP running within weeks, not months. Fast turnaround guaranteed.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Functional consultants, developers, and support staff assigned to your project.",
  },
  {
    icon: Headphones,
    title: "Local Support",
    description: "Delhi NCR based team available for on-site visits and real-time assistance.",
  },
  {
    icon: Zap,
    title: "Proven Results",
    description: "Track record of successful implementations across multiple industries.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Why Choose Us"
          title="Your Trusted ERPNext Partner"
          subtitle="We understand Indian businesses. Our solutions are tailored for SMEs who need reliable, affordable, and effective ERP systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
