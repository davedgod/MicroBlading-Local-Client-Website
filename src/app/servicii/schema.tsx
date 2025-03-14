import Script from "next/script";

export function ServicesSchema() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Micropigmentare Sprâncene",
          url: "https://jofielart.com/servicii#eyebrows",
          description:
            "Tehnică de micropigmentare care oferă sprâncene perfect definite, cu un aspect natural.",
          provider: {
            "@type": "BeautySalon",
            name: "Jofiel Art",
            address: {
              "@type": "PostalAddress",
              addressLocality: "București",
              addressRegion: "Sector 3",
              streetAddress: "Șoseaua Mihai Bravu",
            },
          },
          offers: {
            "@type": "Offer",
            price: "450",
            priceCurrency: "RON",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Micropigmentare Buze",
          url: "https://jofielart.com/servicii#lips",
          description:
            "Procedură de înfrumusețare care oferă buzelor un aspect voluminos și o culoare naturală.",
          provider: {
            "@type": "BeautySalon",
            name: "Jofiel Art",
            address: {
              "@type": "PostalAddress",
              addressLocality: "București",
              addressRegion: "Sector 3",
              streetAddress: "Șoseaua Mihai Bravu",
            },
          },
          offers: {
            "@type": "Offer",
            price: "500",
            priceCurrency: "RON",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Pachet Sprâncene + Buze",
          url: "https://jofielart.com/servicii#package",
          description:
            "Pachet complet pentru un look perfect definit, atât pentru sprâncene cât și pentru buze.",
          provider: {
            "@type": "BeautySalon",
            name: "Jofiel Art",
            address: {
              "@type": "PostalAddress",
              addressLocality: "București",
              addressRegion: "Sector 3",
              streetAddress: "Șoseaua Mihai Bravu",
            },
          },
          offers: {
            "@type": "Offer",
            price: "700",
            priceCurrency: "RON",
          },
        },
      },
    ],
  };

  return (
    <Script id="services-schema" type="application/ld+json">
      {JSON.stringify(servicesSchema)}
    </Script>
  );
}
