import dynamic from "next/dynamic";
import { HeroSection } from "./HeroSection";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { SubsidySection } from "./SubsidySection";
import { HowSolarFlowSection } from "./HowSolarFlowSection";
import { ServicesSection } from "./ServicesSection";
import { WhyChooseUs } from "./WhyChooseUs";
import { UniqueSection } from "./UniqueSection";
import { Testimonials } from "./Testimonials";
import { ContactCTA } from "./ContactCTA";
import { SiteFooter } from "@/components/layout/SiteFooter";

// Code-split heavy interactive sections — they load after the above-fold content
const SolarCalculatorSection = dynamic(
  () => import("./SolarCalculatorSection").then((m) => m.SolarCalculatorSection),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import("./FAQSection").then((m) => m.FAQSection),
  { ssr: false }
);
const ReviewsSection = dynamic(
  () => import("./ReviewsSection").then((m) => m.ReviewsSection),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("./ContactSection").then((m) => m.ContactSection),
  { ssr: false }
);

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
