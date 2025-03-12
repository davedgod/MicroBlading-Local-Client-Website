import { Hero } from "@/components/hero";
import { ServicesPreview } from "@/components/services-preview";
import { GalleryPreview } from "@/components/gallery-preview";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </main>
  );
}
