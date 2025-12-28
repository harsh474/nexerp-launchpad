import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ERPNext?",
    answer: "ERPNext is a free and open-source ERP (Enterprise Resource Planning) software built on the Frappe framework. It covers accounting, inventory, manufacturing, CRM, HR, project management, and more. It's used by thousands of businesses worldwide and is particularly popular among SMEs due to its flexibility and cost-effectiveness."
  },
  {
    question: "How long does ERPNext implementation take?",
    answer: "Implementation timeline depends on the complexity of your requirements. A basic retail setup can be done in 2-3 weeks. For businesses with multiple modules (inventory, accounting, HR, etc.), expect 4-8 weeks. Enterprise implementations with custom development may take 3-6 months."
  },
  {
    question: "What is the cost of ERPNext implementation?",
    answer: "Our implementation packages start from ₹50,000 for small retail businesses and go up to ₹50 lakhs for enterprise-level multi-branch implementations. The exact cost depends on your requirements, number of modules, customizations needed, and user count. We provide detailed quotes after understanding your needs."
  },
  {
    question: "Is ERPNext suitable for my small business?",
    answer: "Absolutely! ERPNext is designed to be scalable. You can start with basic modules and add more as you grow. Many small retail shops, distributors, and schools in India successfully use ERPNext to manage their operations efficiently without the high costs of traditional ERP systems."
  },
  {
    question: "Do you provide training?",
    answer: "Yes, comprehensive training is included in all our packages. We provide role-based training sessions, video tutorials, user manuals, and ongoing support. Our goal is to make your team self-sufficient in using ERPNext for daily operations."
  },
  {
    question: "What kind of support do you offer after implementation?",
    answer: "We offer multiple support options: Monthly retainer plans (₹10,000-40,000/month), hourly bucket support (₹1,200-2,500/hour), per-ticket support (₹500-1,500), and comprehensive annual managed service contracts (₹1-5 lakhs/year). Choose what works best for your business."
  },
  {
    question: "Can ERPNext integrate with Tally?",
    answer: "Yes, we can set up integration between ERPNext and Tally. This typically involves syncing financial transactions, vouchers, and reports between both systems. The exact integration scope depends on your specific requirements."
  },
  {
    question: "Do you support GST compliance?",
    answer: "ERPNext comes with built-in GST support for Indian businesses. We configure all GST-related settings including HSN/SAC codes, tax templates, e-invoicing, and return preparation. Your invoices will be fully GST-compliant."
  },
  {
    question: "Can I access ERPNext from mobile?",
    answer: "Yes, ERPNext is fully responsive and works on mobile browsers. There are also dedicated mobile apps available for specific modules like POS and HR. Your team can access the system from anywhere with internet connectivity."
  },
  {
    question: "What if I need custom features not available in ERPNext?",
    answer: "ERPNext is highly customizable. We can develop custom doctypes, fields, workflows, reports, and integrations specific to your business needs. Our development team has extensive experience in building custom solutions on the Frappe framework."
  },
  {
    question: "Is my data secure with ERPNext?",
    answer: "Yes. ERPNext follows industry-standard security practices. Data can be hosted on your own servers or on secure cloud infrastructure. We implement role-based access controls to ensure users only access what they need. Regular backups are configured for data protection."
  },
  {
    question: "Do you provide on-site support?",
    answer: "Yes, being based in Delhi NCR, we provide on-site support for implementation, training, and critical issues. For ongoing maintenance, we primarily offer remote support, but on-site visits can be arranged when needed."
  }
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Find answers to common questions about ERPNext implementation and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-accent"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            We're happy to answer any questions you have. Book a free consultation call and let's discuss your requirements.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl" className="bg-primary text-primary-foreground hover:bg-navy-light">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
