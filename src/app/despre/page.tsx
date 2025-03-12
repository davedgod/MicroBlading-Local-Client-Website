import { Container } from "@/components/ui/container";
import Image from "next/image";

export const metadata = {
  title: "Despre Noi - Jofiel Art",
  description:
    "Află povestea salonului nostru de micropigmentare sprâncene și buze.",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Despre Jofiel Art
          </h1>
          <p className="text-xl text-muted-foreground">
            Salonul nostru de micropigmentare sprâncene este dedicat frumuseții
            și încrederii în sine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://drive.google.com/uc?export=view&id=1gXvOlydZBcgf99vUGnUPlTPtD0wGkaoC"
              alt="Femeie fericită cu sprâncene perfecte"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Povestea noastră
            </h2>
            <p className="text-muted-foreground mb-4">
              Jofiel Art a fost fondat cu misiunea de a oferi servicii de
              micropigmentare de cea mai înaltă calitate, într-un mediu relaxant
              și primitor.
            </p>
            <p className="text-muted-foreground mb-4">
              Pasiunea noastră pentru frumusețe și atenția la detalii ne-au
              ajutat să devenim unul dintre cele mai apreciate saloane de
              micropigmentare din București.
            </p>
            <p className="text-muted-foreground">
              Ne mândrim cu tehnicile inovatoare pe care le folosim și cu
              rezultatele naturale pe care le obținem pentru fiecare clientă în
              parte.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            Valorile noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Calitate</h3>
              <p className="text-muted-foreground">
                Folosim doar produse și echipamente de cea mai înaltă calitate
                pentru a asigura rezultate excepționale și de durată.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Profesionalism</h3>
              <p className="text-muted-foreground">
                Echipa noastră este formată din specialiști cu experiență,
                dedicați perfecțiunii și satisfacției clientelor.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Personalizare</h3>
              <p className="text-muted-foreground">
                Fiecare tratament este personalizat în funcție de trăsăturile și
                dorințele unice ale fiecărei cliente.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
