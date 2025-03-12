import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://drive.google.com/uc?export=view&id=1vb8wAX864cgw6zAaHmhY40OiEAt2sXNz",
    alt: "Femeie fericită cu sprâncene perfecte",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1XlB_vPaCWHYTWLfMIkZJq6IYE8_gM5TQ",
    alt: "Zâmbet radiant după micropigmentare",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1Ttx28m0DvI3rR1JnU27t253t6Xo1FD7N",
    alt: "Frumusețe naturală cu sprâncene definite",
  },
];

export function GalleryPreview() {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Galerie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descoperă transformările uimitoare realizate în salonul nostru prin
            tehnicile de micropigmentare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/galerie">Vezi galeria completă</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
