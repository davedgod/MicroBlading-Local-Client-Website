import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Videoclipuri - Jofiel Art",
  description:
    "Urmărește videoclipurile noastre pentru a vedea procedurile și rezultatele în acțiune.",
};

export default function GalleryVideoPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Videoclipuri
          </h1>
          <p className="text-xl text-muted-foreground">
            Urmărește videoclipurile noastre pentru a vedea procedurile și
            rezultatele în acțiune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-sm">
            <video
              controls
              className="w-full h-auto"
              poster="https://drive.google.com/uc?export=view&id=1vb8wAX864cgw6zAaHmhY40OiEAt2sXNz"
            >
              <source
                src="https://drive.google.com/uc?export=view&id=1xdSwFWWmCPzIbui9z01CBG3eSkIILyiz"
                type="video/mp4"
              />
              Browser-ul tău nu suportă tag-ul video.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Procedură Micropigmentare
              </h3>
              <p className="text-muted-foreground">
                Urmărește procesul de micropigmentare și rezultatele imediate.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-sm">
            <video
              controls
              className="w-full h-auto"
              poster="https://drive.google.com/uc?export=view&id=1XlB_vPaCWHYTWLfMIkZJq6IYE8_gM5TQ"
            >
              <source
                src="https://drive.google.com/uc?export=view&id=18e7j_4bT1_us9O5M6NWRwtISfa-KOOrX"
                type="video/mp4"
              />
              Browser-ul tău nu suportă tag-ul video.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Rezultate Micropigmentare
              </h3>
              <p className="text-muted-foreground">
                Vezi transformarea completă și rezultatele finale.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-sm">
            <video
              controls
              className="w-full h-auto"
              poster="https://drive.google.com/uc?export=view&id=1Ttx28m0DvI3rR1JnU27t253t6Xo1FD7N"
            >
              <source
                src="https://drive.google.com/uc?export=view&id=1fIhcC_xfc1wTxl9-OA_chNvsXD58I9lI"
                type="video/mp4"
              />
              Browser-ul tău nu suportă tag-ul video.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Tehnici Avansate de Micropigmentare
              </h3>
              <p className="text-muted-foreground">
                Descoperă tehnicile noastre avansate și rezultatele lor
                impresionante.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/galerie">Înapoi la Galerie</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
