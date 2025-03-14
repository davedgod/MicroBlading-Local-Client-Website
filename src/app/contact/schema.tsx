import Script from "next/script";

export function ContactSchema() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Salon Micropigmentare București | Jofiel Art",
    description:
      "Contactează salonul nostru de micropigmentare din București pentru programări sau informații despre serviciile noastre de micropigmentare sprâncene și buze.",
    mainEntity: {
      "@type": "BeautySalon",
      name: "Jofiel Art - Salon de Micropigmentare",
      image:
        "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
      telephone: "+40 768 726 438",
      email: "jofielartmicropigmentare@gmail.com",
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
    },
  };

  return (
    <Script id="contact-schema" type="application/ld+json">
      {JSON.stringify(contactSchema)}
    </Script>
  );
}
