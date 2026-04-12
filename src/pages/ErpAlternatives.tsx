import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Factory,
  TrendingUp,
  Truck,
  Briefcase,
  Settings,
  Shield,
  Database,
  Users,
  Cloud,
  Headphones,
  CreditCard,
  AlertTriangle,
  Send,
  Loader2,
  Lock,
  Zap,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CALENDLY_LINK = "https://calendly.com/nexerp-info/30min";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzRUt5G-vHqh3uk8QqMmI_gBBiNLmM766Mru7VsSNbQSxQzxXIaCH812zgN_1XHyMKA/exec";

const comparisonData = [
  { feature: "Cost", erpnext: "Low (Open Source)", odoo: "High (Per User/App)", tally: "Moderate", sap: "Very High" },
  { feature: "Open Source", erpnext: true, odoo: "Partial", tally: false, sap: false },
  { feature: "Customization", erpnext: "Unlimited", odoo: "Limited (Paid)", tally: "Very Limited", sap: "Complex & Costly" },
  { feature: "Indian GST Ready", erpnext: true, odoo: "Add-on", tally: true, sap: "Needs Config" },
  { feature: "Implementation Support", erpnext: "Included", odoo: "Extra Cost", tally: "Basic", sap: "Expensive" },
  { feature: "Cloud Hosting", erpnext: "Flexible", odoo: "Odoo.sh Only", tally: "Limited", sap: "SAP Cloud Only" },
];

const painPoints = [
  { icon: CreditCard, question: "Paying too much for Odoo licensing every year?", answer: "ERPNext solves this." },
  { icon: TrendingUp, question: "Tally can't scale with your growing operations?", answer: "ERPNext solves this." },
  { icon: AlertTriangle, question: "SAP too expensive and complex for your team?", answer: "ERPNext solves this." },
];

const features = [
  { icon: Settings, title: "Full ERPNext Implementation" },
  { icon: Shield, title: "GST, TDS & Indian Compliance Built-in" },
  { icon: Database, title: "Data Migration from Tally / Odoo / SAP" },
  { icon: Users, title: "Staff Training Included" },
  { icon: Cloud, title: "Cloud or On-Premise Hosting" },
  { icon: Headphones, title: "Ongoing Support & Customization" },
];

const faqs = [
  { q: "Is ERPNext really free?", a: "Yes, ERPNext is 100% open-source and free to use. You only pay for implementation, hosting, and support — no per-user licensing fees." },
  { q: "How long does implementation take?", a: "Typically 30–60 days depending on your business complexity. We follow a structured process to ensure a smooth go-live." },
  { q: "Can you migrate our data from Tally?", a: "Absolutely. We have proven migration scripts and processes for Tally, Odoo, SAP, and Excel-based systems." },
  { q: "Do you provide training and support after go-live?", a: "Yes. Every implementation includes hands-on training for your team and ongoing support packages to keep things running smoothly." },
  { q: "Is ERPNext compliant with Indian GST and TDS?", a: "Yes. ERPNext has built-in support for Indian GST, TDS, e-invoicing, and e-way bills — all maintained and updated regularly." },
];

const ErpAlternatives = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [utmParams, setUtmParams] = useState({ utm_source: "", utm_medium: "", utm_campaign: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    currentSoftware: "",
    employees: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    if (!formData.currentSoftware) newErrors.currentSoftware = "Please select your current software";
    if (!formData.employees) newErrors.employees = "Please select number of employees";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.company,
          phone: formData.phone,
          description: `Software: ${formData.currentSoftware} | Employees: ${formData.employees} | ${formData.message}`,
          source: "ERP Alternatives Landing Page",
          ...utmParams,
        }),
      });
      setIsSubmitted(true);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderCell = (value: string | boolean) => {
    if (value === true) return <CheckCircle className="w-5 h-5 text-orange-500 mx-auto" />;
    if (value === false) return <XCircle className="w-5 h-5 text-red-400 mx-auto" />;
    return <span>{value}</span>;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="bg-[#0F1F3D] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Looking for a Better Alternative to{" "}
            <span className="text-orange-500">Odoo, Tally or SAP?</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            NexERP is India's trusted ERPNext implementation partner — open source, affordable, and built for Indian businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg">
                Book Free 30-Min Audit Call <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection("comparison")}
            >
              See How It Compares
            </Button>
          </div>
          <p className="text-white/50 text-sm flex items-center justify-center gap-1">
            <Zap className="w-4 h-4 text-orange-500" /> No sales pitch. Just an honest audit of your current setup.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm font-medium mb-6">
            Trusted by businesses across Manufacturing, Trading, Distribution & Services
          </p>
          <div className="flex justify-center gap-8 md:gap-16">
            {[
              { icon: Factory, label: "Manufacturing" },
              { icon: TrendingUp, label: "Trading" },
              { icon: Truck, label: "Distribution" },
              { icon: Briefcase, label: "Services" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon className="w-8 h-8 text-[#0F1F3D]" />
                <span className="text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="comparison" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Why Businesses Switch to ERPNext
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#0F1F3D] text-white">
                  <th className="p-3 md:p-4 text-left font-semibold">Feature</th>
                  <th className="p-3 md:p-4 text-center font-semibold bg-orange-500">ERPNext (NexERP)</th>
                  <th className="p-3 md:p-4 text-center font-semibold">Odoo</th>
                  <th className="p-3 md:p-4 text-center font-semibold">Tally</th>
                  <th className="p-3 md:p-4 text-center font-semibold">SAP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 md:p-4 font-medium text-[#0F1F3D]">{row.feature}</td>
                    <td className="p-3 md:p-4 text-center font-semibold text-orange-600 bg-orange-50">
                      {renderCell(row.erpnext)}
                    </td>
                    <td className="p-3 md:p-4 text-center text-gray-600">{renderCell(row.odoo)}</td>
                    <td className="p-3 md:p-4 text-center text-gray-600">{renderCell(row.tally)}</td>
                    <td className="p-3 md:p-4 text-center text-gray-600">{renderCell(row.sap)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Still stuck with software that wasn't built for your business?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <p.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <p className="font-semibold text-[#0F1F3D] mb-3">{p.question}</p>
                <p className="text-orange-600 font-bold text-sm">{p.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Switch to ERPNext — We Handle Everything
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-orange-600" />
                </div>
                <span className="font-medium text-[#0F1F3D] text-sm">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="py-16 md:py-20 bg-[#0F1F3D]">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Get a Free ERP Comparison Report for Your Business
          </h2>
          <p className="text-white/60 text-center text-sm mb-8">
            Tell us what you're currently using — we'll show you exactly how ERPNext compares and what it would cost to switch.
          </p>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Thanks! We'll send your comparison report within 2 hours.
              </h4>
              <p className="text-white/60 text-sm">Check WhatsApp or email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  name="company"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={handleChange}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.company ? "border-red-500" : ""}`}
                />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number * (10 digits)"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Select
                  value={formData.currentSoftware}
                  onValueChange={(v) => {
                    setFormData((prev) => ({ ...prev, currentSoftware: v }));
                    if (errors.currentSoftware) setErrors((prev) => ({ ...prev, currentSoftware: "" }));
                  }}
                >
                  <SelectTrigger className={`bg-white/10 border-white/20 text-white ${!formData.currentSoftware ? "text-white/40" : ""} ${errors.currentSoftware ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Current Software *" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Tally", "Odoo", "SAP", "Oracle", "Navision", "Excel", "Other"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.currentSoftware && <p className="text-red-400 text-xs mt-1">{errors.currentSoftware}</p>}
              </div>
              <div>
                <Select
                  value={formData.employees}
                  onValueChange={(v) => {
                    setFormData((prev) => ({ ...prev, employees: v }));
                    if (errors.employees) setErrors((prev) => ({ ...prev, employees: "" }));
                  }}
                >
                  <SelectTrigger className={`bg-white/10 border-white/20 text-white ${!formData.employees ? "text-white/40" : ""} ${errors.employees ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Number of Employees *" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1-10", "11-50", "51-200", "200+"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.employees && <p className="text-red-400 text-xs mt-1">{errors.employees}</p>}
              </div>
              <Textarea
                name="message"
                placeholder="Tell us about your current challenges (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  <><Send className="w-4 h-4" /> Send My Free Comparison Report →</>
                )}
              </Button>
              <p className="text-white/40 text-xs text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Your data is safe. No spam ever.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CALENDLY */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] mb-3">
            Or Book a Call Directly — It's Free
          </h2>
          <p className="text-gray-500 mb-8">
            30 minutes. No obligation. We'll audit your current ERP setup and tell you honestly if ERPNext is right for you.
          </p>
          <iframe
            src={`${CALENDLY_LINK}?hide_gdpr_banner=1`}
            className="w-full border-0 rounded-xl"
            style={{ minHeight: "700px" }}
            title="Book a call with NexERP"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-gray-200 px-5">
                <AccordionTrigger className="text-[#0F1F3D] font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#0F1F3D] border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg mb-1">NexERP</p>
          <p className="text-white/40 text-sm mb-1">nexerp.online</p>
          <p className="text-white/40 text-sm mb-4">Serving businesses across India</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="/" className="text-white/60 hover:text-white text-sm">Home</a>
            <a href="/about" className="text-white/60 hover:text-white text-sm">About</a>
            <a href="/contact" className="text-white/60 hover:text-white text-sm">Contact</a>
          </div>
          <p className="text-white/30 text-xs">© 2025 NexERP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ErpAlternatives;
