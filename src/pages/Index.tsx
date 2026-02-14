import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FounderSection } from "@/components/home/FounderSection";
import { SupportSection } from "@/components/home/SupportSection";

import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <FounderSection />
      <SupportSection />
      
      <FinalCTA />
    </Layout>
  );
};

export default Index;
