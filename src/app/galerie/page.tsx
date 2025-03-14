import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GallerySchema } from "./schema";

export const metadata = {
  title:
    "Galerie Rezultate Micropigmentare Sprâncene și Buze | Jofiel Art București",
  description:
    "Explorează galeria noastră cu rezultate înainte și după procedurile de micropigmentare sprâncene și buze realizate în salonul nostru din București.",
  keywords: [
    "rezultate micropigmentare",
    "poze micropigmentare",
    "inainte si dupa micropigmentare",
    "galerie micropigmentare",
    "micropigmentare bucuresti",
    "rezultate microblading",
  ],
};

const galleryImages = [
  {
    src: "https://drive.google.com/uc?export=view&id=1vb8wAX864cgw6zAaHmhY40OiEAt2sXNz",
    alt: "Micropigmentare sprâncene înainte și după",
    category: "Microblading",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1XlB_vPaCWHYTWLfMIkZJq6IYE8_gM5TQ",
    alt: "Rezultat micropigmentare sprâncene",
    category: "Micropigmentare Pudră",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1Ttx28m0DvI3rR1JnU27t253t6Xo1FD7N",
    alt: "Sprâncene perfect definite",
    category: "Microblading",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1WO5ogUtvUvwH9MVOrBavFkTNtwW4fOEh",
    alt: "Transformare completă sprâncene",
    category: "Tehnica Combinată",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1o0TXQ5QLvMyzgfww4w6NEgfWfVlUtkZi",
    alt: "Rezultat natural micropigmentare",
    category: "Micropigmentare Pudră",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1bjfXSwcsxJXvtaMXD9si4nzac08rObuy",
    alt: "Micropigmentare sprâncene profesională",
    category: "Tehnica Combinată",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=12-2VNY39DVc9nkuB100I9ST9cJukWMkL",
    alt: "Frumusețe naturală evidențiată",
    category: "Microblading",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1GMEssneonNPYI-PKuDxh5iPzO-39t_GZ",
    alt: "Încredere și frumusețe după micropigmentare",
    category: "Tehnica Combinată",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1OQvcOH-_fqLxSyrXAwEfAvTyIGaMhHd7",
    alt: "Expresie fericită cu sprâncene perfecte",
    category: "Micropigmentare Pudră",
  },
];

export default function GalleryPage() {
  return (
    <main className="py-16">
      <GallerySchema />
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Galerie
          </h1>
          <p className="text-xl text-muted-foreground">
            Explorează transformările realizate în salonul nostru și descoperă
            rezultatele tehnicilor noastre de micropigmentare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Programează o Consultație
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Dorești să obții rezultate similare? Programează o consultație
            gratuită și descoperă ce tehnică ți se potrivește cel mai bine.
          </p>
          <div className="bg-muted/50 p-8 rounded-lg max-w-2xl mx-auto">
            <p className="font-medium mb-4">
              Contactează-ne pentru mai multe informații:
            </p>
            <p className="text-muted-foreground mb-2">
              Telefon: +40 768 726 438
            </p>
            <p className="text-muted-foreground mb-2">
              Email: jofielartmicropigmentare@gmail.com
            </p>
            <p className="text-muted-foreground">
              Adresă: București Sector 3, Șoseaua Mihai Bravu
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
