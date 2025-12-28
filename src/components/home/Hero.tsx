import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL = "http://localhost:8000";

const benefits = [
  "Inventory Management",
  "GST Compliance",
  "Automated Billing",
  "Real-time Reports",
];

export const Hero = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    industry: "",
    requirements: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your free audit.",
      });
      setFormData({
        name: "",
        phone: "",
        industry: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6 animate-fade-up">
              Delhi NCR's Trusted ERPNext Partner
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              ERPNext for{" "}
              <span className="text-accent">Retail, Wholesale</span> & Education
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Fixing <span className="text-accent font-semibold">Inventory</span> • <span className="text-accent font-semibold">Accounting</span> • <span className="text-accent font-semibold">Billing</span> • <span className="text-accent font-semibold">Operations</span>
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:9301592158">
                <Button variant="heroOutline" size="xl">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Lead Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Get Your Free Business Audit
              </h3>
              <p className="text-muted-foreground mb-6">
                Discover how ERPNext can transform your operations
              </p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Select Industry</option>
                    <option value="retail">Retail</option>
                    <option value="wholesale">Wholesale/Distribution</option>
                    <option value="education">Education</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="requirements"
                    placeholder="Brief Requirements"
                    rows={3}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Free Audit"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                No spam. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
