"use client";

import { Container } from "@/components/ui/container";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Despre Noi", href: "/despre" },
  { name: "Servicii", href: "/servicii" },
  { name: "Galerie", href: "/galerie" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-logo font-bold tracking-wider bg-gradient-to-r from-[#E5A4B9] to-[#B68AD4] bg-clip-text text-transparent">
                Jofiel Art
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary/80 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <button
              type="button"
              className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Deschide meniul</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full flex-col overflow-y-auto pb-12 pt-5">
              <div className="flex items-center justify-between px-6">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-logo font-bold tracking-wider bg-gradient-to-r from-[#E5A4B9] to-[#B68AD4] bg-clip-text text-transparent">
                    Jofiel Art
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Închide meniul</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 space-y-2 px-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-base font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
