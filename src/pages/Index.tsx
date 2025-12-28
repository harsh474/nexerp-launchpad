import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <IndustriesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
