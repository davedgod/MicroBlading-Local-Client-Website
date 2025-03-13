import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Micropigmentare Sprâncene",
    description:
      "Tehnică de înfrumusețare semi-permanentă care oferă sprâncene perfect definite.",
    price: "450 lei",
    image:
      "https://drive.google.com/uc?export=view&id=1ILDm0Hz6xb3CPB-wQ6IZREfD5Mu9q6BH",
  },
  {
    title: "Micropigmentare Buze",
    description:
      "Procedură de înfrumusețare care oferă buzelor un aspect voluminos și o culoare naturală.",
    price: "500 lei",
    image:
      "https://drive.google.com/uc?export=view&id=12-2VNY39DVc9nkuB100I9ST9cJukWMkL",
  },
  {
    title: "Pachet Sprâncene + Buze",
    description:
      "Pachet complet pentru un look perfect definit, atât pentru sprâncene cât și pentru buze.",
    price: "700 lei",
    image:
      "https://drive.google.com/uc?export=view&id=1RBJTiO0KeaCLK6to4vsWF13L7K1zEN50",
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
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <p className="font-medium mb-4">{service.price}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicii">Află mai multe</Link>
                </Button>
              </div>
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
