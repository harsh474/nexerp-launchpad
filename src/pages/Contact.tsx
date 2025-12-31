import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL = "/erp/api/resource/Lead";
const AUTH_TOKEN = "token e828cea3ee17fca:cffdfe59e708ecd";

const benefits = [
  "Free business process audit",
  "Customized solution recommendations",
  "Transparent pricing discussion",
  "No obligation consultation"
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
      
        lead_name: formData.name,
        // company_name: formData.businessType,
        email_id: formData.email,
        mobile_no: formData.phone,
        custom_requirenments: formData.requirements,
        industry: formData.businessType
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": AUTH_TOKEN,
        },
        body: JSON.stringify(payload),
      });
      console
      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your free audit.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Book Your Free Business Audit
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Let's discuss how ERPNext can transform your operations. No obligation, just honest advice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Request a Free Audit Call
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Select your business type</option>
                    <option value="retail">Retail</option>
                    <option value="wholesale">Wholesale/Distribution</option>
                    <option value="education">Education (School/Institute)</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Tell us about your current challenges and what you're looking to achieve..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book Free Audit Call"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>

              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch Directly
              </h2>

              <div className="space-y-6 mb-8">
                <a 
                  href="tel:9301592158"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-accent font-medium">+91 9301592158</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 10 AM - 7 PM</p>
                  </div>
                </a>

                <a 
                  href="mailto:harshrajput1101@gmail.com"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-accent font-medium">harshrajput1101@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919301592158?text=Hi!%20I'm%20interested%20in%20ERPNext%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(142,70%,45%)]/10 flex items-center justify-center group-hover:bg-[hsl(142,70%,45%)] transition-colors">
                    <MessageCircle className="w-6 h-6 text-[hsl(142,70%,45%)] group-hover:text-[hsl(0,0%,100%)]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-[hsl(142,70%,45%)] font-medium">Chat Now</p>
                    <p className="text-sm text-muted-foreground">Quick responses</p>
                  </div>
                </a>

                <a 
                  href="https://x.com/HarshRajput7301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Twitter className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Twitter/X</h3>
                    <p className="text-accent font-medium">@HarshRajput7301</p>
                    <p className="text-sm text-muted-foreground">Follow for updates</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Delhi NCR, India</p>
                    <p className="text-sm text-muted-foreground">On-site visits available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
