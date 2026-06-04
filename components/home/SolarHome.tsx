import { HeroSection } from "./HeroSection";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { SubsidySection } from "./SubsidySection";
import { HowSolarFlowSection } from "./HowSolarFlowSection";
import { ServicesSection } from "./ServicesSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { UniqueSection } from "./UniqueSection";
import { SolarCalculatorSection } from "./SolarCalculatorSection";
import { FAQSection } from "./FAQSection";
import { Testimonials } from "./Testimonials";
import { ContactCTA } from "./ContactCTA";
import { ReviewsSection } from "./ReviewsSection";
import { ContactSection } from "./ContactSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function SolarHome() {
  return (
    <>
      <HeroSection />
      <ProjectsShowcase />
      <SubsidySection />
      <HowSolarFlowSection />
      <ServicesSection />
      <WhyChooseUs />
      <UniqueSection />
      <SolarCalculatorSection />
      <FAQSection />
      <Testimonials />
      <ContactCTA />
      <ReviewsSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
