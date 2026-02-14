import { Code, Server, Shield, MessageCircle } from "lucide-react";

const expertise = [
  { icon: Code, text: "Expert in Python, JavaScript & ERPNext Framework" },
  { icon: Server, text: "Experience across Buying, Selling, Manufacturing, HRMS & CRM" },
  { icon: Shield, text: "AWS deployment & secure role-based access setup" },
  { icon: MessageCircle, text: "Direct communication & project oversight on every engagement" },
];

export const FounderSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-64 h-72 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-accent">H</span>
                  </div>
                  <p className="font-display font-bold text-foreground">Harsh Rajput</p>
                  <p className="text-sm text-muted-foreground">Founder & Lead Engineer</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                About
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Founder-Led ERPNext <span className="text-gradient">Engineering</span>
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every project is architected and reviewed directly by the founder to ensure long-term stability and clean ERPNext customization. No handoffs to junior teams — you work directly with the person who designs the solution.
              </p>

              <div className="space-y-3 mb-6">
                {expertise.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
