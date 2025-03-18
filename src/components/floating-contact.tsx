import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <Link
        href="tel:+40768726438"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Apelează-ne"
      >
        <Phone size={24} />
      </Link>
      <Link
        href="https://wa.me/40768726438"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contactează-ne pe WhatsApp"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
} 