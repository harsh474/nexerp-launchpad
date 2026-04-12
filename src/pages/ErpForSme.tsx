import { useState, useEffect, useRef } from "react";
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
  ArrowRight,
  Loader2,
  Send,
  Lock,
  Zap,
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Factory,
  FileText,
  Settings,
  Shield,
  Database,
  Cloud,
  Headphones,
  Star,
  Quote,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CALENDLY_LINK = "https://calendly.com/nexerp-info/30min";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzRUt5G-vHqh3uk8QqMmI_gBBiNLmM766Mru7VsSNbQSxQzxXIaCH812zgN_1XHyMKA/exec";

const painPoints = [
  { emoji: "📊", text: "Running your business on multiple Excel sheets that don't talk to each other" },
  { emoji: "🧾", text: "Tally is great for accounts but can't handle inventory, HR and sales together" },
  { emoji: "😩", text: "You've looked at SAP and Oracle — too expensive and too complex" },
  { emoji: "📞", text: "Your team wastes hours every week on manual data entry and follow-ups" },
];

const modules = [
  { icon: FileText, label: "Accounting & GST" },
  { icon: Package, label: "Inventory" },
  { icon: ShoppingCart, label: "Purchase" },
  { icon: BarChart3, label: "Sales & CRM" },
  { icon: Users, label: "HR & Payroll" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Settings, label: "Reports" },
];

const packages = [
  {
    name: "Starter",
    audience: "For businesses up to 10 users",
    features: ["Core modules (Accounting, Inventory, Purchase, Sales)", "GST setup & compliance", "2 weeks implementation", "30 days post-go-live support"],
    price: "Get a Quote",
    highlighted: false,
  },
  {
    name: "Growth",
    audience: "For businesses 10–50 users",
    features: ["All modules included", "Data migration from Tally / Excel", "Staff training included", "60 days post-go-live support"],
    price: "Get a Quote",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    audience: "50+ users / multi-branch",
    features: ["Custom configuration & workflows", "Third-party integrations", "Dedicated support manager", "Priority SLA"],
    price: "Custom Quote",
    highlighted: false,
  },
];

const testimonials = [
  { name: "Rajesh M.", role: "Owner", company: "Precision Metals, Mumbai", quote: "We moved from Tally to ERPNext in 6 weeks. NexERP handled everything. Our inventory is now fully automated." },
  { name: "Priya S.", role: "Director", company: "TradeLink Exports, Delhi", quote: "We were spending ₹4L/year on Odoo licenses. ERPNext is open source and NexERP set it up perfectly." },
  { name: "Vikram K.", role: "MD", company: "CloudServe Solutions, Bangalore", quote: "Best decision we made. Invoicing, HR, CRM — all in one place now." },
];

const faqs = [
  { q: "How much does ERPNext implementation cost for a small business?", a: "Implementation costs vary based on modules, users, and complexity. For most SMEs, it's a fraction of what SAP or Oracle would cost — with zero licensing fees. Contact us for a transparent quote." },
  { q: "How long does it take to go live?", a: "Typically 4–8 weeks for SMEs. We follow a structured process — requirements, configuration, data migration, training, and go-live — to make it smooth." },
  { q: "We're currently on Tally — can you migrate our data?", a: "Yes! We have proven migration scripts for Tally, Excel, and other systems. Your chart of accounts, opening balances, customer/vendor data, and inventory all come across cleanly." },
  { q: "Do we need a server or IT team to run ERPNext?", a: "Not at all. We offer fully managed cloud hosting so you don't need to worry about servers, backups, or maintenance. We handle everything." },
  { q: "What happens after implementation — do you provide support?", a: "Absolutely. Every plan includes post-go-live support. We also offer ongoing AMC (Annual Maintenance Contract) packages for continued support and updates." },
  { q: "Is ERPNext suitable for a business with only 5–10 employees?", a: "Yes! ERPNext scales beautifully from 5 users to 500+. Many of our clients start small and grow. There are no per-user licensing fees holding you back." },
];

const ErpForSme = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const thankYouRef = useRef<HTMLDivElement>(null);
  const [utmParams, setUtmParams] = useState({ utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    businessType: "",
    currentSoftware: "",
    employees: "",
    revenue: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
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
    if (!formData.businessType) newErrors.businessType = "Please select business type";
    if (!formData.currentSoftware) newErrors.currentSoftware = "Please select current software";
    if (!formData.employees) newErrors.employees = "Please select number of employees";
    if (!formData.revenue) newErrors.revenue = "Please select revenue range";
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
          description: `Business: ${formData.businessType} | Software: ${formData.currentSoftware} | Employees: ${formData.employees} | Revenue: ${formData.revenue} | ${formData.message}`,
          source: "ERP for SME Landing Page",
          ...utmParams,
        }),
      });
      setIsSubmitted(true);
      setTimeout(() => {
        thankYouRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const inputClass = (field: string) =>
    `bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors[field] ? "border-red-500" : ""}`;

  const selectClass = (field: string, hasValue: boolean) =>
    `bg-white/10 border-white/20 text-white ${!hasValue ? "text-white/40" : ""} ${errors[field] ? "border-red-500" : ""}`;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="bg-[#0F1F3D] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Affordable ERP for{" "}
            <span className="text-orange-500">Small & Medium Businesses</span> in India
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Stop managing your business on Excel and Tally. ERPNext gives your SME enterprise-grade ERP — at a fraction of the cost of SAP or Oracle. NexERP handles the full setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg">
                Book Free 30-Min Business Audit <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection("pricing")}
            >
              See Pricing & Plans ↓
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-white/80 text-sm">
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Open Source — No Licensing Fees
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Implemented in 4–8 Weeks
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" /> Full Support After Go-Live
            </span>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Sound familiar?
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                <p className="text-[#0F1F3D] font-medium">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-orange-600 font-bold text-lg">
            ERPNext solves all of this. And NexERP makes it affordable for SMEs.
          </p>
        </div>
      </section>

      {/* WHAT IS ERPNEXT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] mb-10">
            One System to Run Your Entire Business
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {modules.map((m, i) => (
              <div key={i} className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2.5">
                <m.icon className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-[#0F1F3D]">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ERPNext is 100% open source. No per-user licensing fees. NexERP configures, implements and supports it for your business.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Simple, Transparent Pricing for SMEs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-xl p-6 flex flex-col ${
                  pkg.highlighted
                    ? "bg-[#0F1F3D] text-white border-2 border-orange-500 scale-[1.02]"
                    : "bg-white border border-gray-200 text-[#0F1F3D]"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className={`text-sm mb-5 ${pkg.highlighted ? "text-white/60" : "text-gray-500"}`}>{pkg.audience}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-orange-400" : "text-orange-500"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold ${
                    pkg.highlighted
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-[#0F1F3D] hover:bg-[#1a2d54] text-white"
                  }`}
                  onClick={() => scrollToSection("lead-form")}
                >
                  {pkg.price === "Custom Quote" ? "Contact Us →" : "Get This Plan →"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="py-16 md:py-20 bg-[#0F1F3D]">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Get a Free SME ERP Consultation
          </h2>
          <p className="text-white/60 text-center text-sm mb-8">
            No sales pressure. We'll understand your business and tell you honestly what you need — and what it will cost.
          </p>

          {isSubmitted ? (
            <div ref={thankYouRef} className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Perfect! An ERP consultant will call you within 2 hours on your phone number.
              </h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className={inputClass("name")} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input name="company" placeholder="Company Name *" value={formData.company} onChange={handleChange} className={inputClass("company")} />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
              </div>
              <div>
                <Input name="phone" type="tel" placeholder="Phone Number * (10 digits)" value={formData.phone} onChange={handleChange} className={inputClass("phone")} />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Select value={formData.businessType} onValueChange={(v) => { setFormData((p) => ({ ...p, businessType: v })); if (errors.businessType) setErrors((p) => ({ ...p, businessType: "" })); }}>
                  <SelectTrigger className={selectClass("businessType", !!formData.businessType)}>
                    <SelectValue placeholder="Business Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Trading", "Manufacturing", "Services", "Retail", "Distribution", "Other"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType}</p>}
              </div>
              <div>
                <Select value={formData.currentSoftware} onValueChange={(v) => { setFormData((p) => ({ ...p, currentSoftware: v })); if (errors.currentSoftware) setErrors((p) => ({ ...p, currentSoftware: "" })); }}>
                  <SelectTrigger className={selectClass("currentSoftware", !!formData.currentSoftware)}>
                    <SelectValue placeholder="Current Software *" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Excel", "Tally", "QuickBooks", "Nothing yet", "Other ERP", "Other"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.currentSoftware && <p className="text-red-400 text-xs mt-1">{errors.currentSoftware}</p>}
              </div>
              <div>
                <Select value={formData.employees} onValueChange={(v) => { setFormData((p) => ({ ...p, employees: v })); if (errors.employees) setErrors((p) => ({ ...p, employees: "" })); }}>
                  <SelectTrigger className={selectClass("employees", !!formData.employees)}>
                    <SelectValue placeholder="Number of Employees *" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1-10", "11-25", "26-50", "51-100", "100+"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.employees && <p className="text-red-400 text-xs mt-1">{errors.employees}</p>}
              </div>
              <div>
                <Select value={formData.revenue} onValueChange={(v) => { setFormData((p) => ({ ...p, revenue: v })); if (errors.revenue) setErrors((p) => ({ ...p, revenue: "" })); }}>
                  <SelectTrigger className={selectClass("revenue", !!formData.revenue)}>
                    <SelectValue placeholder="Monthly Revenue Range *" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Under ₹10L", "₹10L–₹50L", "₹50L–₹2Cr", "₹2Cr+", "Prefer not to say"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.revenue && <p className="text-red-400 text-xs mt-1">{errors.revenue}</p>}
              </div>
              <Textarea
                name="message"
                placeholder="What's your biggest operational challenge right now? (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
              />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  <><Send className="w-4 h-4" /> Request My Free Consultation →</>
                )}
              </Button>
              <p className="text-white/50 text-xs text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> 100% confidential. We never share your data.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-[#0F1F3D] text-sm mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-[#0F1F3D] text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] mb-3">
            Book Your Free 30-Min Consultation
          </h2>
          <p className="text-gray-500 mb-8">
            Talk to an ERPNext specialist who understands Indian SME businesses.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <iframe
              src={`${CALENDLY_LINK}?hide_gdpr_banner=1`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book a consultation"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1F3D] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-gray-200">
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
      <footer className="bg-[#0F1F3D] py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg mb-1">NexERP</p>
          <p className="text-white/60 text-sm mb-1">nexerp.online | India's Open Source ERP Partner</p>
          <p className="text-white/40 text-xs mt-4">© 2025 NexERP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ErpForSme;
