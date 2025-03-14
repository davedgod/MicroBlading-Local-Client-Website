import { Hero } from "@/components/hero";
import { ServicesPreview } from "@/components/services-preview";
import { GalleryPreview } from "@/components/gallery-preview";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import {
  LocalBusinessStructuredData,
  ServiceStructuredData,
} from "@/components/structured-data";

export const metadata = {
  title: "Micropigmentare Sprâncene și Buze București | Jofiel Art",
  description:
    "Salon specializat în micropigmentare sprâncene și buze în București, oferind servicii profesionale de înaltă calitate pentru a vă pune în valoare frumusețea naturală.",
  keywords: [
    "micropigmentare",
    "micropigmentare sprancene",
    "micropigmentare buze",
    "salon micropigmentare",
    "micropigmentare bucuresti",
    "jofiel art",
    "microblading",
  ],
};

export default function Home() {
  return (
    <main>
      <LocalBusinessStructuredData />
      <ServiceStructuredData />
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </main>
  );
}
