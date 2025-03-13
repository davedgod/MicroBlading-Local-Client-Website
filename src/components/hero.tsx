import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Redescoperă-ți frumusețea naturală cu micropigmentarea
              sprâncenelor și buzelor
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Obține sprâncene și buze perfect definite care îți pun în valoare
              trăsăturile și îți oferă încredere în fiecare zi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#E5A4B9] hover:bg-[#D48FB0] text-white"
              >
                <Link href="/contact">Programează-te acum</Link>
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
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://drive.google.com/uc?export=view&id=1GMEssneonNPYI-PKuDxh5iPzO-39t_GZ"
              alt="Jofiel Art Micropigmentare Homepage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
