import Script from "next/script";

export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Jofiel Art - Salon de Micropigmentare",
    image:
      "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
    "@id": "https://jofielart.com",
    url: "https://jofielart.com",
    telephone: "+40 768 726 438",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Șoseaua Mihai Bravu",
      addressLocality: "București",
      postalCode: "031301",
      addressCountry: "RO",
      addressRegion: "Sector 3",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.4267272,
      longitude: 26.1346863,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.facebook.com/jofielart",
      "https://www.instagram.com/jofielart",
    ],
    priceRange: "$$",
    servesCuisine: "Micropigmentare sprâncene, Micropigmentare buze",
    description:
      "Salon specializat în micropigmentare sprâncene și buze în București, oferind servicii profesionale de înaltă calitate pentru a vă pune în valoare frumusețea naturală.",
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}

export function ServiceStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Micropigmentare Sprâncene și Buze",
    provider: {
      "@type": "BeautySalon",
      name: "Jofiel Art",
      image:
        "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
    },
    areaServed: {
      "@type": "City",
      name: "București",
    },
    description:
      "Servicii profesionale de micropigmentare sprâncene și buze, realizate cu produse de calitate și tehnici avansate.",
    offers: [
      {
        "@type": "Offer",
        name: "Micropigmentare Sprâncene",
        price: "450",
        priceCurrency: "RON",
      },
      {
        "@type": "Offer",
        name: "Micropigmentare Buze",
        price: "500",
        priceCurrency: "RON",
      },
      {
        "@type": "Offer",
        name: "Pachet Sprâncene + Buze",
        price: "700",
        priceCurrency: "RON",
      },
    ],
  };

  return (
    <Script id="service-structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
