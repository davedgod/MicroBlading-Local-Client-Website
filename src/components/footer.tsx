import { Container } from "@/components/ui/container";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

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
                <a href="tel:+40768726438" className="flex items-center gap-2 hover:text-primary/80 transition-colors">
                  <Phone size={16} />
                  <span>+40 768 726 438</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:jofielartmicropigmentare@gmail.com" className="flex items-center gap-2 hover:text-primary/80 transition-colors">
                  <Mail size={16} />
                  <span>jofielartmicropigmentare@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://maps.app.goo.gl/YourLocationLink" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary/80 transition-colors">
                  <MapPin size={16} />
                  <span>București Sector 3, Șoseaua Mihai Bravu</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://wa.me/40768726438" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors">
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Urmărește-ne</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/jofielart_/"
                className="hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61573932886927"
                className="hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.tiktok.com/@jofielart"
                className="hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok size={22} />
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/faq" className="text-sm hover:text-primary/80 transition-colors">
                Întrebări Frecvente
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
