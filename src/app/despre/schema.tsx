import Script from "next/script";

export function AboutSchema() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Despre Salonul de Micropigmentare Jofiel Art București",
    description:
      "Află povestea salonului nostru de micropigmentare sprâncene și buze din București. Experiență, profesionalism și rezultate naturale garantate.",
    mainEntity: {
      "@type": "BeautySalon",
      name: "Jofiel Art - Salon de Micropigmentare",
      image:
        "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
      description:
        "Jofiel Art a fost fondat cu misiunea de a oferi servicii de micropigmentare de cea mai înaltă calitate, într-un mediu relaxant și primitor. Pasiunea noastră pentru frumusețe și atenția la detalii ne-au ajutat să devenim unul dintre cele mai apreciate saloane de micropigmentare din București.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Șoseaua Mihai Bravu",
        addressLocality: "București",
        postalCode: "031301",
        addressCountry: "RO",
        addressRegion: "Sector 3",
      },
      foundingDate: "2020",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "București",
          addressRegion: "Sector 3",
          addressCountry: "RO",
        },
      },
      knowsAbout: [
        "Micropigmentare Sprâncene",
        "Micropigmentare Buze",
        "Microblading",
        "Tehnica Pudră",
        "Tehnica Combinată",
      ],
    },
  };

  return (
    <Script id="about-schema" type="application/ld+json">
      {JSON.stringify(aboutSchema)}
    </Script>
  );
}
