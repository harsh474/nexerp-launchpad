import { Layout } from "@/components/layout/Layout";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed text-[15px]">{children}</div>
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-disc pl-5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="bg-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-primary-foreground/50 text-sm">Last Updated: 31 July 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-4">
              NexERP ("we," "us," "our") operates nexerp.online and provides a Customer Relationship
              Management (CRM) software product for real estate businesses. This Privacy Policy explains
              what information we collect, how we use it, and your rights regarding that information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              By using NexERP, you agree to the practices described in this policy.
            </p>

            <Section title="1. Information We Collect">
              <p>We collect the following types of information:</p>
              <Bullets
                items={[
                  "Account information: name, email address, phone number, company name, billing address",
                  "Customer data you upload: property listings, customer contact details, booking records, payment records, and other data you input into the CRM to manage your business",
                  "WhatsApp/Meta Platform Data: when you connect your WhatsApp Business Account to NexERP, we access message content, delivery/read status, contact phone numbers, and template message data solely to enable messaging features within our CRM",
                  "Usage data: log data, IP address, browser type, device information, pages visited",
                  "Cookies and tracking data: via tools like Meta Pixel, used for website analytics and marketing",
                ]}
              />
            </Section>

            <Section title="2. How We Collect Information">
              <Bullets
                items={[
                  "Directly from you, when you sign up, fill out forms, or use our product",
                  "Automatically, through cookies and similar tracking technologies on our website",
                  "Through integrations you authorize, such as WhatsApp Business API, email, or payment gateways",
                ]}
              />
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use collected information to:</p>
              <Bullets
                items={[
                  "Provide, operate, and maintain the NexERP CRM platform",
                  "Enable communication features (e.g., sending/receiving WhatsApp messages, storing conversation history against the correct customer record)",
                  "Process payments and manage billing",
                  "Send service-related notifications (e.g., site visit reminders, payment due alerts) on behalf of our clients",
                  "Improve our product and troubleshoot issues",
                  "Comply with legal obligations",
                ]}
              />
              <p>
                Specifically regarding WhatsApp/Meta Platform Data: we use this data only to power the
                messaging feature inside our CRM — allowing our clients (real estate businesses) to send
                and receive WhatsApp messages with their own customers, and to keep a record of that
                conversation linked to the right customer profile. We do not use this data for any purpose
                beyond delivering this service to the client who owns that customer relationship.
              </p>
            </Section>

            <Section title="4. Data Sharing and Disclosure">
              <p>We do not sell your personal data or your customers' data to third parties.</p>
              <p>We may share data with:</p>
              <Bullets
                items={[
                  "Service providers: hosting providers, payment processors, and communication platforms (like Meta/WhatsApp) strictly to deliver our services",
                  "Legal requirements: if required by law, court order, or government request",
                ]}
              />
              <p>
                We do not share Platform Data obtained via WhatsApp/Meta with any third party except as
                necessary to provide the service back to the client who owns that data.
              </p>
            </Section>

            <Section title="5. Data Storage and Security">
              <Bullets
                items={[
                  "Your data is stored on secure servers located in [server location, e.g., India/AWS Mumbai region]",
                  "We use industry-standard measures (encryption, access controls) to protect your data",
                  "While we take reasonable steps to secure your data, no system is 100% secure, and we cannot guarantee absolute security",
                ]}
              />
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain your data for as long as your account is active or as needed to provide services.
                If you close your account, we will delete or anonymize your data within [X days/months],
                unless we are required to retain it for legal reasons.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <Bullets
                items={[
                  "Access the personal data we hold about you",
                  "Request correction or deletion of your data",
                  "Object to or restrict certain processing",
                  "Request a copy of your data (data portability)",
                ]}
              />
              <p>
                To exercise these rights, contact us at{" "}
                <a href="mailto:info@nexerp.online" className="text-accent hover:underline">
                  info@nexerp.online
                </a>
                .
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                Our website uses cookies and similar technologies (including Meta Pixel) to understand site
                usage and improve marketing. You can control cookies through your browser settings.
              </p>
            </Section>

            <Section title="9. Third-Party Services">
              <p>We integrate with third-party services including:</p>
              <Bullets
                items={[
                  "Meta/WhatsApp Business API (for messaging)",
                  "[Payment gateway name, e.g., Razorpay/Stripe]",
                  "[Hosting provider, e.g., AWS/DigitalOcean]",
                ]}
              />
              <p>These providers have their own privacy policies governing how they handle data.</p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                NexERP is a business software product not intended for use by individuals under 18. We do
                not knowingly collect data from children.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify users of significant
                changes via email or a notice on our website. Continued use of NexERP after changes means
                you accept the updated policy.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                If you have questions about this Privacy Policy or how your data is handled, contact us at:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@nexerp.online" className="text-accent hover:underline">
                  info@nexerp.online
                </a>
              </p>
            </Section>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
