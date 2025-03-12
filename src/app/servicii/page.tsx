import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Servicii - Jofiel Art",
  description:
    "Descoperă serviciile noastre de micropigmentare sprâncene și buze, împreună cu prețurile acestora.",
};

const services = [
  {
    id: "eyebrows",
    title: "Micropigmentare Sprâncene",
    description:
      "Tehnică de micropigmentare care oferă sprâncene perfect definite, cu un aspect natural. Ideală pentru persoanele care doresc să economisească timp în rutina zilnică.",
    benefits: [
      "Aspect natural și definit",
      "Durată de până la 1-2 ani",
      "Ideal pentru sprâncene rare sau cu goluri",
      "Procedură semi-permanentă",
      "Recuperare rapidă",
    ],
    price: "450 lei",
    image:
      "https://drive.google.com/uc?export=view&id=12-2VNY39DVc9nkuB100I9ST9cJukWMkL",
  },
  {
    id: "lips",
    title: "Micropigmentare Buze",
    description:
      "Procedură de înfrumusețare care oferă buzelor un aspect voluminos și o culoare naturală. Perfectă pentru corectarea asimetriilor și definirea conturului.",
    benefits: [
      "Contur perfect definit",
      "Aspect voluminos natural",
      "Corectarea asimetriilor",
      "Durată de până la 1-2 ani",
      "Economisire de timp în rutina zilnică",
    ],
    price: "500 lei",
    image:
      "https://drive.google.com/uc?export=view&id=1GMEssneonNPYI-PKuDxh5iPzO-39t_GZ",
  },
  {
    id: "package",
    title: "Pachet Sprâncene + Buze",
    description:
      "Pachet complet pentru un look perfect definit, atât pentru sprâncene cât și pentru buze. Beneficiați de un preț special pentru ambele proceduri.",
    benefits: [
      "Preț special pentru ambele proceduri",
      "Look complet și armonios",
      "Economie de timp și bani",
      "Proceduri realizate de același specialist",
      "Rezultate de lungă durată",
    ],
    price: "700 lei",
    image:
      "https://drive.google.com/uc?export=view&id=1OQvcOH-_fqLxSyrXAwEfAvTyIGaMhHd7",
  },
];

export default function ServicesPage() {
  return (
    <main className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Serviciile Noastre
          </h1>
          <p className="text-xl text-muted-foreground">
            Descoperă gama noastră de servicii de micropigmentare sprâncene,
            adaptate nevoilor tale.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h2 className="text-3xl font-semibold tracking-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <h3 className="text-xl font-medium mb-3">Beneficii:</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="font-medium">Preț: {service.price}</p>
                </div>

                <Button asChild size="lg">
                  <Link href="/contact">Programează-te acum</Link>
                </Button>
              </div>

              <div
                className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
