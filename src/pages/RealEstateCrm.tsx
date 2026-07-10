import { Button } from "@/components/ui/button";
import { Shield, Phone, Bot, Sparkles, GraduationCap, Database, ArrowRight, CheckCircle, Brain, MessageSquare, Zap, TrendingUp, Mic, Target } from "lucide-react";
import { LeadForm } from "@/components/landing/LeadForm";
import { CalendlyEmbed } from "@/components/landing/CalendlyEmbed";

const CALENDLY_URL = "https://calendly.com/nexerp-info/30min";

const aiCapabilities = [
  { icon: Mic, title: "AI Voice Agent", desc: "Human-like AI calls every new lead within seconds — qualifies budget, location, and intent before your team even sees it." },
  { icon: Brain, title: "Smart Lead Scoring", desc: "AI ranks leads by conversion probability using behavior, source, and conversation signals — so reps chase the hottest ones first." },
  { icon: MessageSquare, title: "AI WhatsApp & SMS Follow-ups", desc: "Personalized, context-aware nurture sequences that reply to leads 24/7 in natural language." },
  { icon: Target, title: "Intent Detection", desc: "Real-time AI analysis of every call and chat to flag ready-to-buy prospects instantly." },
  { icon: TrendingUp, title: "Predictive Insights", desc: "AI forecasts which projects, sources, and reps will hit targets — with recommended next actions." },
  { icon: Zap, title: "Auto Call Summaries", desc: "Every call transcribed, summarized, and logged automatically. No manual data entry, ever." },
];

const differentiators = [
  { icon: Shield, title: "Encrypted Lead Security", desc: "Masked contact details protect your database from being copied or stolen by sales reps." },
  { icon: Phone, title: "Built-In Click-to-Call", desc: "Call leads directly from the platform, no app switching, every call logged automatically." },
  { icon: Bot, title: "AI Calling Agent", desc: "Auto-qualifies and follows up on new leads within seconds of capture, reducing staff overhead." },
  { icon: Sparkles, title: "Easy to Use", desc: "No long training curve — sales teams onboard in a day." },
  { icon: GraduationCap, title: "Dedicated Training & Support", desc: "Hands-on onboarding for your whole team." },
  { icon: Database, title: "You Own Your Data", desc: "Fully exportable, no vendor lock-in." },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const RealEstateCrm = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-accent/20 text-accent mb-6 border border-accent/30">
              <Sparkles className="w-3.5 h-3.5" /> Powered by AI Voice Agents · Made for Indian Real Estate
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The First <span className="text-accent">AI-Powered CRM</span> Built for Real Estate — Never Lose a Lead Again
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              AI voice agents call, qualify, and follow up on every lead within seconds. Encrypted lead security, built-in calling, and predictive insights that turn inquiries into site visits — automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" onClick={() => scrollTo("demo")} className="w-full sm:w-auto">
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </Button>

              <Button variant="outline" size="lg" onClick={() => scrollTo("lead-form")}
                className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get a Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything Your Sales Team Needs — In One Platform
            </h2>
            <p className="text-muted-foreground">Purpose-built for how Indian real estate teams actually work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug">
              "One of the first real estate CRMs in India using AI-led calling to convert leads faster."
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm text-muted-foreground">
              {["Encrypted & Secure", "Made in India", "Cloud + Mobile"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="text-primary-foreground">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Get a <span className="text-accent">Callback</span> from Our Team
              </h2>
              <p className="text-primary-foreground/70 mb-6">
                Tell us a bit about your real estate business and we'll reach out within 24 hours with a tailored walkthrough.
              </p>
              <ul className="space-y-3">
                {["Personalized demo of the platform", "Pricing tailored to your team size", "Free lead-migration guidance"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8">
              <LeadForm source="Real Estate CRM Landing" variant="dark" submitLabel="Request Callback" />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="demo" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Free Demo
            </h2>
            <p className="text-muted-foreground">Pick a time that works — 30-minute walkthrough with a product specialist.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <CalendlyEmbed url={CALENDLY_URL} height={720} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/60 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} NexERP. AI-powered CRM for real estate.
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary border-t border-primary-foreground/10 p-3">
        <Button variant="accent" size="lg" className="w-full" onClick={() => scrollTo("demo")}>
          Book a Free Demo <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default RealEstateCrm;
