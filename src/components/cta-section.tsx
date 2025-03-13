import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <div className="py-16 bg-gradient-to-r from-[#E5A4B9] to-[#B68AD4] text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Programează-te acum pentru o consultație gratuită
          </h2>
          <p className="text-white/90 mb-8">
            Fă primul pas către sprâncene perfect definite și descoperă ce
            tehnică ți se potrivește cel mai bine.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[#D4AF37] hover:bg-[#FAF3E0]"
          >
            <Link href="/contact">Rezervă o programare</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
