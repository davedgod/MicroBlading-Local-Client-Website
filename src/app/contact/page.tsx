import { Container } from "@/components/ui/container";
import { ContactForm } from "./contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactSchema } from "./schema";

export const metadata = {
  title: "Contact Salon Micropigmentare București | Jofiel Art",
  description:
    "Contactează salonul nostru de micropigmentare din București pentru programări sau informații despre serviciile noastre de micropigmentare sprâncene și buze.",
  keywords: [
    "contact salon micropigmentare",
    "programare micropigmentare",
    "salon micropigmentare bucuresti",
    "jofiel art contact",
    "programare microblading",
    "salon micropigmentare sector 3",
  ],
};

export default function ContactPage() {
  return (
    <main className="py-16">
      <ContactSchema />
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-muted-foreground">
            Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta
            să programezi o consultație.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-card rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-6">
                Informații de Contact
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+40 768 726 438</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      jofielartmicropigmentare@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Adresă</p>
                    <p className="text-muted-foreground">
                      București Sector 3, Șoseaua Mihai Bravu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">Program</p>
                    <p className="text-muted-foreground">
                      În orice zi din săptămână, cu programare prealabilă
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Locația Noastră</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8476772544397!2d26.1346863!3d44.4267272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8d95640f9dd%3A0x7f3e3f3c3c3c3c3c!2sSoseaua%20Mihai%20Bravu%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1625123456789!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Formular de Contact</h2>
            <p className="text-muted-foreground mb-6">
              Completează formularul de mai jos pentru a programa o consultație
              sau pentru a ne adresa orice întrebare.
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
