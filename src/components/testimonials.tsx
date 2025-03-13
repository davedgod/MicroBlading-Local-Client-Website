import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Sunt foarte mulțumită de rezultatul obținut. Sprâncenele mele arată natural și perfect definite. Recomand cu încredere!",
    author: "Maria Popescu",
    image:
      "https://drive.google.com/uc?export=view&id=16G3f8QwCRl9ufNg9OWwakoi4SGyyKvYA",
  },
  {
    content:
      "Experiență extraordinară! Profesionalism, atenție la detalii și un rezultat care depășește așteptările. Mulțumesc!",
    author: "Ana Ionescu",
    image:
      "https://drive.google.com/uc?export=view&id=16LxXk4vPZjIZMwLPWvrgRLCD1CCiJblS",
  },
  {
    content:
      "Am economisit atât de mult timp în rutina mea zilnică de când am făcut micropigmentarea sprâncenelor. Arată impecabil în fiecare zi!",
    author: "Elena Dumitrescu",
    image:
      "https://drive.google.com/uc?export=view&id=1o0TXQ5QLvMyzgfww4w6NEgfWfVlUtkZi",
  },
];

export function Testimonials() {
  return (
    <div className="py-16 bg-muted/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ce Spun Clientele Noastre
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descoperă experiențele și rezultatele obținute de clientele noastre
            în urma serviciilor de micropigmentare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Quote className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="mb-6">{testimonial.content}</p>
                <p className="font-medium">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
