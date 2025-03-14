import Script from "next/script";

export function GallerySchema() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galerie Rezultate Micropigmentare Sprâncene și Buze",
    description:
      "Explorează galeria noastră cu rezultate înainte și după procedurile de micropigmentare sprâncene și buze realizate în salonul nostru din București.",
    image: [
      "https://drive.google.com/uc?export=view&id=1vb8wAX864cgw6zAaHmhY40OiEAt2sXNz",
      "https://drive.google.com/uc?export=view&id=1XlB_vPaCWHYTWLfMIkZJq6IYE8_gM5TQ",
      "https://drive.google.com/uc?export=view&id=1Ttx28m0DvI3rR1JnU27t253t6Xo1FD7N",
      "https://drive.google.com/uc?export=view&id=1WO5ogUtvUvwH9MVOrBavFkTNtwW4fOEh",
      "https://drive.google.com/uc?export=view&id=1o0TXQ5QLvMyzgfww4w6NEgfWfVlUtkZi",
      "https://drive.google.com/uc?export=view&id=1bjfXSwcsxJXvtaMXD9si4nzac08rObuy",
      "https://drive.google.com/uc?export=view&id=12-2VNY39DVc9nkuB100I9ST9cJukWMkL",
      "https://drive.google.com/uc?export=view&id=1GMEssneonNPYI-PKuDxh5iPzO-39t_GZ",
      "https://drive.google.com/uc?export=view&id=1OQvcOH-_fqLxSyrXAwEfAvTyIGaMhHd7",
    ],
    about: {
      "@type": "Thing",
      name: "Micropigmentare Sprâncene și Buze",
    },
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
  };

  return (
    <Script id="gallery-schema" type="application/ld+json">
      {JSON.stringify(gallerySchema)}
    </Script>
  );
}
