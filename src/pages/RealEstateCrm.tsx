import { Button } from "@/components/ui/button";
import {
  Shield, Phone, Bot, Sparkles, GraduationCap, Database,
  ArrowRight, CheckCircle, Brain, MessageSquare, Zap, TrendingUp, Mic, Target,
} from "lucide-react";
import { LeadForm } from "@/components/landing/LeadForm";
import { CalendlyEmbed } from "@/components/landing/CalendlyEmbed";
import heroImage from "@/assets/real-estate-hero.jpg";
import interiorImage from "@/assets/real-estate-interior.jpg";

const CALENDLY_URL = "https://calendly.com/nexerp-info/30min";

// Luxury gold accent for this page only
const GOLD = "#C9A24C";
const GOLD_SOFT = "rgba(201,162,76,0.18)";

const aiCapabilities = [
  { icon: Mic, title: "AI Voice Agent", desc: "Human-like AI calls every new inquiry within seconds — qualifies budget, configuration, and intent before your sales team even sees the lead." },
  { icon: Brain, title: "Smart Lead Scoring", desc: "AI ranks buyers by conversion probability using behavior, source, and conversation signals — so your closers chase the hottest ones first." },
  { icon: MessageSquare, title: "AI WhatsApp & SMS Nurture", desc: "Personalized, context-aware follow-ups that reply to prospects 24/7 in natural language — English, Hindi, and regional." },
  { icon: Target, title: "Intent Detection", desc: "Real-time AI analysis of every call and chat to flag site-visit-ready buyers instantly." },
  { icon: TrendingUp, title: "Predictive Insights", desc: "AI forecasts which projects, sources, and reps will hit targets — with recommended next actions." },
  { icon: Zap, title: "Auto Call Summaries", desc: "Every call transcribed, summarized, and logged automatically. No manual data entry, ever." },
];

const differentiators = [
  { icon: Shield, title: "Encrypted Lead Security", desc: "Masked contact details protect your database from being copied or leaked by sales reps." },
  { icon: Phone, title: "Built-In Click-to-Call", desc: "Call buyers directly from the platform — no app switching, every call logged automatically." },
  { icon: Bot, title: "AI Calling Agent", desc: "Auto-qualifies and follows up within seconds of lead capture, reducing staff overhead." },
  { icon: Sparkles, title: "Effortless to Use", desc: "No long training curve — sales teams onboard in a day." },
  { icon: GraduationCap, title: "Dedicated Training & Support", desc: "Hands-on onboarding for your whole team." },
  { icon: Database, title: "You Own Your Data", desc: "Fully exportable, no vendor lock-in." },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const RealEstateCrm = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pb-20 md:pb-0">
      {/* HERO — luxury real estate */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Indian real estate skyline"
            className="w-full h-full object-cover"
          />
          {/* Overlays for depth + readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/95 via-[#0a0f1c]/75 to-[#0a0f1c]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c]/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase mb-8 border"
              style={{ color: GOLD, borderColor: GOLD_SOFT, background: "rgba(0,0,0,0.35)" }}
            >
              <Sparkles className="w-3.5 h-3.5" /> The Luxury Real Estate CRM · India
            </span>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white">
              An <span style={{ color: GOLD }}>AI-Powered CRM</span> Crafted for
              <span className="block italic font-light mt-2" style={{ fontFamily: "'Plus Jakarta Sans', serif" }}>
                India's Finest Developers
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed font-light">
              AI voice agents call, qualify, and nurture every enquiry within seconds.
              Encrypted lead security, built-in calling, and predictive insights that
              turn interest into site visits — automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo("demo")}
                className="w-full sm:w-auto text-black hover:opacity-90 border-0 h-14 px-8 text-base font-semibold tracking-wide"
                style={{ background: GOLD }}
              >
                Book a Private Demo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("lead-form")}
                className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base"
              >
                Request a Callback
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 text-xs uppercase tracking-widest text-white/50">
              <span>Encrypted &amp; Secure</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Made in India</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Cloud &amp; Mobile</span>
            </div>
          </div>
        </div>

        {/* Gold hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
      </section>

      {/* AI CAPABILITIES */}
      <section className="py-20 md:py-28 bg-[#0a0f1c] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              — AI Capabilities —
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Not Just Another CRM.<br />
              <span className="italic font-light" style={{ color: GOLD }}>An AI Sales Team That Never Sleeps.</span>
            </h2>
            <p className="text-white/60 mt-4">
              While traditional CRMs just store data, NexERP actively calls, qualifies, and nurtures buyers for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {aiCapabilities.map((d) => (
              <div
                key={d.title}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-none p-7 hover:border-[color:var(--gold)] transition-all"
                style={{ ["--gold" as any]: GOLD }}
              >
                <div className="absolute top-0 right-0 text-[10px] font-semibold tracking-widest px-2 py-1" style={{ color: GOLD, background: GOLD_SOFT }}>
                  AI
                </div>
                <div className="w-12 h-12 flex items-center justify-center mb-5 border" style={{ borderColor: GOLD_SOFT }}>
                  <d.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">{d.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              size="lg"
              onClick={() => scrollTo("demo")}
              className="text-black hover:opacity-90 border-0 h-13 px-8 font-semibold tracking-wide"
              style={{ background: GOLD }}
            >
              See the AI Agent Live <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Split — image + comparison */}
      <section className="relative bg-[#080d18]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <img
              src={interiorImage}
              alt="Luxury real estate interior"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080d18]/60" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 flex items-center">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
                — The Difference —
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Traditional CRM vs <span className="italic font-light" style={{ color: GOLD }}>NexERP AI</span>
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-white/20 pl-5">
                  <h3 className="font-display text-sm uppercase tracking-widest text-white/50 mb-3">Old-School CRM</h3>
                  <ul className="space-y-2 text-sm text-white/50">
                    {["Just stores contacts and notes", "Reps manually call every lead", "Slow follow-ups → lost deals", "Manual data entry after every call", "No visibility into hot buyers"].map((t) => (
                      <li key={t} className="flex gap-3"><span>✗</span><span>{t}</span></li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-2 pl-5" style={{ borderColor: GOLD }}>
                  <h3 className="font-display text-sm uppercase tracking-widest mb-3" style={{ color: GOLD }}>NexERP AI CRM</h3>
                  <ul className="space-y-2 text-sm text-white">
                    {["AI voice agent calls buyers in seconds", "AI qualifies budget, config & intent", "24/7 WhatsApp & SMS AI nurture", "Auto call transcripts & summaries", "Predictive lead scoring built in"].map((t) => (
                      <li key={t} className="flex gap-3"><span style={{ color: GOLD }}>✓</span><span>{t}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 md:py-28 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              — And Everything Else You'd Expect —
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Enterprise-grade tools, purpose-built for Indian real estate.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 max-w-6xl mx-auto border border-white/10">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-[#0a0f1c] p-8 hover:bg-white/[0.03] transition-all">
                <d.icon className="w-6 h-6 mb-4" style={{ color: GOLD }} />
                <h3 className="font-display font-semibold text-lg text-white mb-2">{d.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial quote */}
      <section className="py-24 md:py-32 bg-[#080d18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl leading-none mb-6" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>"</div>
            <p className="font-display text-2xl md:text-4xl font-light text-white leading-snug italic">
              One of the first real estate CRMs in India using AI-led calling to convert luxury buyers faster.
            </p>
            <div className="mt-10 inline-block h-px w-16" style={{ background: GOLD }} />
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="py-20 md:py-28 bg-[#0a0f1c]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
                — Speak With Our Team —
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Request a <span className="italic font-light" style={{ color: GOLD }}>Private Callback</span>
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Tell us about your projects and pipeline — we'll respond within 24 hours
                with a tailored walkthrough for your sales team.
              </p>
              <ul className="space-y-4">
                {["Personalized demo of the platform", "Pricing tailored to your team size", "Free lead-migration guidance"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                    <span className="text-white/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="border p-6 md:p-8 relative"
              style={{ borderColor: GOLD_SOFT, background: "rgba(255,255,255,0.02)" }}
            >
              <div className="absolute -top-px left-0 h-px w-24" style={{ background: GOLD }} />
              <LeadForm source="Real Estate CRM Landing" variant="dark" submitLabel="Request Callback" />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="demo" className="py-20 md:py-28 bg-[#080d18]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              — Book Your Demo —
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Reserve a <span className="italic font-light" style={{ color: GOLD }}>30-minute walkthrough</span>
            </h2>
            <p className="text-white/60">Pick a time that works — a product specialist will guide you through the platform.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <CalendlyEmbed url={CALENDLY_URL} height={720} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080d18] border-t border-white/10 py-8 text-center text-sm text-white/40">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} NexERP · The AI-powered CRM for luxury Indian real estate
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#080d18] border-t border-white/10 p-3">
        <Button
          size="lg"
          className="w-full text-black hover:opacity-90 border-0 font-semibold tracking-wide"
          style={{ background: GOLD }}
          onClick={() => scrollTo("demo")}
        >
          Book a Private Demo <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default RealEstateCrm;
