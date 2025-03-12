import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Jofiel Art</h3>
            <p className="text-muted-foreground">
              Salon specializat în micropigmentare sprâncene și buze, oferind
              servicii de înaltă calitate pentru a vă pune în valoare frumusețea
              naturală.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+40 768 726 438</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>jofielartmicropigmentare@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>București Sector 3, Șoseaua Mihai Bravu</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Urmărește-ne</h3>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                className="hover:text-primary/80 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="hover:text-primary/80 transition-colors"
              >
                <Facebook size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Jofiel Art. Toate drepturile
            rezervate.
          </p>
        </div>
      </Container>
    </footer>
  );
}
