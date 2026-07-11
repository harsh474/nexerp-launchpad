import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyaEbQp_JO4b1lRyrOqHcaOVBMdvLusfUYfXk1HeeoK2hzhdkaxQs76UzsHO_jYbuAQ/exec";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRUt5G-vHqh3uk8QqMmI_gBBiNLmM766Mru7VsSNbQSxQzxXIaCH812zgN_1XHyMKA/exec";
export const AuLeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

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
          description: formData.description,
          source: "AU Manufacturing Landing Page",
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
      if (typeof window !== "undefined" && (window as any).fbq) (window as any).fbq("track", "Lead");
      toast({ title: "Thank you!", description: "We'll get back to you within 24 hours." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="w-12 h-12 text-accent mb-4" />
        <h4 className="font-display text-xl font-bold text-primary-foreground mb-2">
          We've received your details!
        </h4>
        <p className="text-primary-foreground/60 text-sm">
          Our team will review your business and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="Your Name *"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
      />
      <Input
        name="email"
        type="email"
        placeholder="Email Address *"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number *"
        value={formData.phone}
        onChange={handleChange}
        required
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
      />
      <Textarea
        name="description"
        placeholder="Describe your requirements (optional)"
        value={formData.description}
        onChange={handleChange}
        rows={3}
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
      />
      <Button
        type="submit"
        variant="accent"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
        ) : (
          <><Send className="w-4 h-4" /> Submit & Get Free Assessment</>
        )}
      </Button>
    </form>
  );
};
