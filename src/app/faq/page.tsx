import { Container } from "@/components/ui/container";
import { FAQSchema } from "./schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Întrebări Frecvente despre Micropigmentare | Jofiel Art București",
  description:
    "Află răspunsuri la cele mai frecvente întrebări despre micropigmentarea sprâncenelor și buzelor în București. Informații complete despre proceduri, prețuri și rezultate.",
  keywords: [
    "micropigmentare întrebări",
    "micropigmentare sprâncene București",
    "micropigmentare buze sector 3",
    "cât durează micropigmentarea",
    "preț micropigmentare București",
    "întrebări frecvente micropigmentare",
    "salon micropigmentare București",
  ],
};

const faqItems = [
  {
    question: "Ce este micropigmentarea sprâncenelor?",
    answer:
      "Micropigmentarea sprâncenelor este o tehnică semi-permanentă de înfrumusețare care implică introducerea pigmentului în stratul superficial al pielii pentru a crea aspectul unor sprâncene perfect definite. La Jofiel Art București, folosim tehnici avansate pentru a obține un aspect natural, adaptat trăsăturilor faciale ale fiecărei cliente.",
  },
  {
    question: "Cât costă micropigmentarea sprâncenelor în București?",
    answer:
      "La salonul nostru din Sector 3 București, prețul pentru micropigmentarea sprâncenelor este de 450 lei. Oferim și un pachet combinat pentru micropigmentarea sprâncenelor și buzelor la prețul de 700 lei, ceea ce reprezintă o economie semnificativă față de prețul individual al fiecărei proceduri.",
  },
  {
    question: "Cât timp durează o ședință de micropigmentare?",
    answer:
      "O ședință completă de micropigmentare la Jofiel Art durează aproximativ 2-3 ore. Aceasta include consultația inițială, alegerea formei și culorii, aplicarea anesteziei topice și procedura propriu-zisă. Pentru rezultate optime, recomandăm o ședință de retușare după 4-6 săptămâni.",
  },
  {
    question: "Este dureroasă micropigmentarea sprâncenelor sau buzelor?",
    answer:
      "Procedura de micropigmentare nu este foarte dureroasă datorită anesteziei topice pe care o aplicăm înainte. Majoritatea clientelor noastre din București descriu senzația ca fiind un disconfort minor, similar cu o ușoară zgârietură. Confortul clientelor este prioritatea noastră la Jofiel Art.",
  },
  {
    question: "Cât timp durează rezultatele micropigmentării?",
    answer:
      "Rezultatele micropigmentării realizate în salonul nostru din București durează între 1-2 ani, în funcție de tipul de piele, stilul de viață și îngrijirea post-procedură. Factorii care pot scurta durata includ expunerea la soare, utilizarea anumitor produse pentru îngrijirea pielii și tratamentele faciale.",
  },
  {
    question: "Care este diferența dintre microblading și micropigmentare?",
    answer:
      "Microbladingul este o tehnică manuală care creează fire fine folosind o lamă cu ace fine, fiind ideal pentru un aspect natural. Micropigmentarea (tehnica pudră) folosește un dispozitiv electric pentru a introduce pigmentul, oferind un aspect mai definit, similar cu machiajul. La Jofiel Art București, oferim ambele tehnici, precum și tehnica combinată, adaptate nevoilor fiecărei cliente.",
  },
  {
    question: "Cum mă pregătesc pentru o ședință de micropigmentare în București?",
    answer:
      "Pentru o ședință de micropigmentare la salonul nostru din Sector 3, recomandăm: evitarea consumului de alcool și cafeină cu 24 de ore înainte, evitarea aspirinei și antiinflamatoarelor cu 48 de ore înainte, evitarea tratamentelor faciale cu o săptămână înainte și venirea fără machiaj în zona care urmează să fie tratată.",
  },
  {
    question: "Care este procesul de vindecare după micropigmentare?",
    answer:
      "După procedura de micropigmentare la Jofiel Art București, zona tratată va trece prin mai multe etape de vindecare: inițial va părea mai închisă la culoare, apoi se vor forma cruste fine care vor cădea natural. Este important să nu zgâriați sau să îndepărtați crustele și să urmați instrucțiunile de îngrijire pe care vi le oferim pentru rezultate optime.",
  },
  {
    question: "Pot face micropigmentare dacă sunt însărcinată sau alăptez?",
    answer:
      "Nu recomandăm procedurile de micropigmentare pentru femeile însărcinate sau care alăptează. Deși nu există studii care să demonstreze efecte negative, preferăm să adoptăm o abordare precaută. Vă invităm să ne vizitați salonul din București după această perioadă pentru a beneficia de serviciile noastre.",
  },
  {
    question: "Oferiți consultații gratuite pentru micropigmentare în București?",
    answer:
      "Da, la Jofiel Art oferim consultații gratuite pentru toate serviciile noastre de micropigmentare. În timpul consultației, vom discuta despre așteptările dumneavoastră, vom analiza trăsăturile faciale și vom recomanda cea mai potrivită tehnică. Salonul nostru este situat în Sector 3, București, pe Șoseaua Mihai Bravu.",
  },
];

export default function FAQPage() {
  return (
    <main className="py-16">
      <FAQSchema />
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Întrebări Frecvente despre Micropigmentare
            </h1>
            <p className="text-xl text-muted-foreground">
              Află tot ce trebuie să știi despre serviciile de micropigmentare
              sprâncene și buze oferite la salonul nostru din București.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ai alte întrebări despre micropigmentare?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contactează-ne pentru mai multe informații despre serviciile noastre
              de micropigmentare din București sau programează o consultație
              gratuită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contactează-ne</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#B68AD4] text-[#B68AD4] hover:bg-[#F0E6FA]"
              >
                <Link href="/servicii">Vezi serviciile noastre</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 