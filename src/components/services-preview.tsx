import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Micropigmentare Sprâncene",
    description:
      "Tehnică de înfrumusețare semi-permanentă care oferă sprâncene perfect definite.",
    price: "450 lei",
  },
  {
    title: "Micropigmentare Buze",
    description:
      "Procedură de înfrumusețare care oferă buzelor un aspect voluminos și o culoare naturală.",
    price: "500 lei",
  },
  {
    title: "Pachet Sprâncene + Buze",
    description:
      "Pachet complet pentru un look perfect definit, atât pentru sprâncene cât și pentru buze.",
    price: "700 lei",
  },
];

export function ServicesPreview() {
  return (
    <div className="bg-muted/50 py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferim servicii profesionale de micropigmentare a sprâncenelor,
            adaptate nevoilor și dorințelor fiecărui client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <p className="font-medium mb-4">{service.price}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/servicii">Află mai multe</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/servicii">Vezi toate serviciile</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
