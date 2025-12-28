import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Code, Headphones, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "Your success is our success. We go the extra mile to ensure your ERP implementation delivers real business value."
  },
  {
    icon: Target,
    title: "Result Oriented",
    description: "We focus on measurable outcomes—faster billing, accurate inventory, on-time reports. Not just software installation."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden costs, no surprises. Clear communication throughout the project lifecycle."
  }
];

const team = [
  {
    icon: Users,
    title: "Functional Consultants",
    description: "Business analysts who understand your processes and translate them into ERPNext configurations."
  },
  {
    icon: Code,
    title: "Technical Developers",
    description: "Python/Frappe experts who build custom modules, integrations, and automation scripts."
  },
  {
    icon: Headphones,
    title: "Support Engineers",
    description: "Dedicated support staff for quick issue resolution and ongoing maintenance."
  }
];

const whyUs = [
  "Deep domain knowledge in retail, wholesale, and education sectors",
  "Local presence in Delhi NCR for on-site support",
  "Competitive pricing designed for Indian SMEs",
  "End-to-end services from implementation to AMC",
  "Proven track record with satisfied clients",
  "Quick turnaround and responsive communication"
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Trusted ERPNext Partner in Delhi NCR
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We help Indian SMEs streamline their operations with powerful, affordable, and customized ERPNext solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Simplifying ERP for Indian Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                NexERP Solutions is an ERPNext consulting and implementation agency based in Delhi NCR. We specialize in helping small and medium enterprises in retail, wholesale/distribution, and education sectors transform their operations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that every business is unique. That's why we don't believe in one-size-fits-all solutions. Our approach is to understand your specific challenges, map your processes, and configure ERPNext to work exactly the way you need it.
              </p>
              <p className="text-lg text-muted-foreground">
                From small retail shops to large distribution networks, from coaching institutes to established schools—we have the expertise to handle projects of all sizes and complexities.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-foreground font-display font-bold text-4xl">N</span>
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">NexERP</p>
                  <p className="text-muted-foreground">Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering SMEs with Enterprise-Grade Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              To make powerful ERP systems accessible and affordable for Indian SMEs. We believe that every business, regardless of size, deserves access to tools that can help them compete, grow, and thrive in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-8 border border-border hover:border-accent transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experts at Your Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A balanced team of functional consultants, developers, and support engineers to handle every aspect of your ERP journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.title} className="bg-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {member.title}
                </h3>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NexERP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                Why NexERP
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us as Your ERP Partner?
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent rounded-2xl p-8 lg:p-12 text-accent-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                Book a free audit call to discuss your requirements. We'll analyze your current systems and recommend the best approach for your business.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light">
                  Book Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
