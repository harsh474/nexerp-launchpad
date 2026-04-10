import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL = "https://erp.organicghee.store/api/resource/Lead";
const AUTH_TOKEN = "token e828cea3ee17fca:cffdfe59e708ecd";

const benefits = [
  "Comprehensive system audit",
  "Technical solution blueprint",
  "Transparent scope & pricing",
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
      
      if (!response.ok) throw new Error("Failed to submit");

      toast({
        title: "Request Submitted!",
        description: "We'll be in touch within 24 hours to schedule your strategy call.",
      });
      setFormData({ name: "", email: "", phone: "", businessType: "", requirements: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm";

  return (
    <Layout>
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Book a <span className="text-gradient">Strategy Call</span>
            </h1>
            <p className="text-primary-foreground/50 text-lg">
              Let's discuss how to optimize your ERPNext for maximum operational efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Tell Us About Your ERPNext Environment
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClass} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className={inputClass} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Industry *</label>
                  <select name="businessType" value={formData.businessType} onChange={handleChange} className={inputClass} required>
                    <option value="" disabled>Select your industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Distribution">Distribution / Wholesale</option>
                    <option value="Services">Professional Services</option>
                    <option value="Retail">Retail / E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Requirements</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Describe your current ERPNext challenges and what you're looking to achieve..." rows={4} className={`${inputClass} resize-none`} />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Schedule Strategy Call"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-2xl p-6 mb-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@nexerp.online" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">info@nexerp.online</p>
                    <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </a>
                <a href="https://x.com/HarshRajput7301" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors">
                  <Twitter className="w-5 h-5 text-accent" />
                  <div>
                    {/* <p className="text-sm font-medium text-foreground">@HarshRajput7301</p> */}
                    <p className="text-xs text-muted-foreground">Follow for updates</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
