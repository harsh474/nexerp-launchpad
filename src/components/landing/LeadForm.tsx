import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzRUt5G-vHqh3uk8QqMmI_gBBiNLmM766Mru7VsSNbQSxQzxXIaCH812zgN_1XHyMKA/exec";

interface LeadFormProps {
  source: string;
  variant?: "light" | "dark";
  submitLabel?: string;
  showCompany?: boolean;
  showCity?: boolean;
}

export const LeadForm = ({
  source,
  variant = "light",
  submitLabel = "Submit",
  showCompany = true,
  showCity = true,
}: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [utm, setUtm] = useState({ utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "" });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (showCompany && !formData.company.trim()) e.company = "Company is required";
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "").slice(-10))) e.phone = "Enter a valid 10-digit phone";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
    if (showCity && !formData.city.trim()) e.city = "City is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          city: formData.city,
          description: formData.message,
          source,
          ...utm,
          timestamp: new Date().toISOString(),
        }),
      });
      setIsSubmitted(true);
      toast({ title: "Thank you!", description: "We'll get back to you within 24 hours." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  const inputBase = isDark
    ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
    : "bg-background border-border text-foreground";

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className={`w-12 h-12 mb-4 ${isDark ? "text-accent" : "text-accent"}`} />
        <h4 className={`font-display text-xl font-bold mb-2 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
          We've received your details!
        </h4>
        <p className={`text-sm ${isDark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
          Our team will reach out within 24 hours.
        </p>
      </div>
    );
  }

  const err = (field: string) =>
    errors[field] ? <p className="text-xs text-destructive mt-1">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <Input name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange}
          className={`${inputBase} ${errors.name ? "border-destructive" : ""}`} />
        {err("name")}
      </div>
      {showCompany && (
        <div>
          <Input name="company" placeholder="Company Name *" value={formData.company} onChange={handleChange}
            className={`${inputBase} ${errors.company ? "border-destructive" : ""}`} />
          {err("company")}
        </div>
      )}
      <div>
        <Input name="phone" type="tel" placeholder="Phone Number *" value={formData.phone} onChange={handleChange}
          className={`${inputBase} ${errors.phone ? "border-destructive" : ""}`} />
        {err("phone")}
      </div>
      <div>
        <Input name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleChange}
          className={`${inputBase} ${errors.email ? "border-destructive" : ""}`} />
        {err("email")}
      </div>
      {showCity && (
        <div>
          <Input name="city" placeholder="City *" value={formData.city} onChange={handleChange}
            className={`${inputBase} ${errors.city ? "border-destructive" : ""}`} />
          {err("city")}
        </div>
      )}
      <Textarea name="message" placeholder="Message (optional)" value={formData.message} onChange={handleChange}
        rows={3} className={`${inputBase} resize-none`} />
      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>) : (<><Send className="w-4 h-4" /> {submitLabel}</>)}
      </Button>
    </form>
  );
};
