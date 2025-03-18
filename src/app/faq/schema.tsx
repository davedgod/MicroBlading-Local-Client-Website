import Script from "next/script";

export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ce este micropigmentarea sprâncenelor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Micropigmentarea sprâncenelor este o tehnică semi-permanentă de înfrumusețare care implică introducerea pigmentului în stratul superficial al pielii pentru a crea aspectul unor sprâncene perfect definite. La Jofiel Art București, folosim tehnici avansate pentru a obține un aspect natural, adaptat trăsăturilor faciale ale fiecărei cliente."
        }
      },
      {
        "@type": "Question",
        "name": "Cât costă micropigmentarea sprâncenelor în București?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La salonul nostru din Sector 3 București, prețul pentru micropigmentarea sprâncenelor este de 450 lei. Oferim și un pachet combinat pentru micropigmentarea sprâncenelor și buzelor la prețul de 700 lei, ceea ce reprezintă o economie semnificativă față de prețul individual al fiecărei proceduri."
        }
      },
      {
        "@type": "Question",
        "name": "Cât timp durează o ședință de micropigmentare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O ședință completă de micropigmentare la Jofiel Art durează aproximativ 2-3 ore. Aceasta include consultația inițială, alegerea formei și culorii, aplicarea anesteziei topice și procedura propriu-zisă. Pentru rezultate optime, recomandăm o ședință de retușare după 4-6 săptămâni."
        }
      },
      {
        "@type": "Question",
        "name": "Este dureroasă micropigmentarea sprâncenelor sau buzelor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procedura de micropigmentare nu este foarte dureroasă datorită anesteziei topice pe care o aplicăm înainte. Majoritatea clientelor noastre din București descriu senzația ca fiind un disconfort minor, similar cu o ușoară zgârietură. Confortul clientelor este prioritatea noastră la Jofiel Art."
        }
      },
      {
        "@type": "Question",
        "name": "Cât timp durează rezultatele micropigmentării?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rezultatele micropigmentării realizate în salonul nostru din București durează între 1-2 ani, în funcție de tipul de piele, stilul de viață și îngrijirea post-procedură. Factorii care pot scurta durata includ expunerea la soare, utilizarea anumitor produse pentru îngrijirea pielii și tratamentele faciale."
        }
      },
      {
        "@type": "Question",
        "name": "Care este diferența dintre microblading și micropigmentare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Microbladingul este o tehnică manuală care creează fire fine folosind o lamă cu ace fine, fiind ideal pentru un aspect natural. Micropigmentarea (tehnica pudră) folosește un dispozitiv electric pentru a introduce pigmentul, oferind un aspect mai definit, similar cu machiajul. La Jofiel Art București, oferim ambele tehnici, precum și tehnica combinată, adaptate nevoilor fiecărei cliente."
        }
      },
      {
        "@type": "Question",
        "name": "Cum mă pregătesc pentru o ședință de micropigmentare în București?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pentru o ședință de micropigmentare la salonul nostru din Sector 3, recomandăm: evitarea consumului de alcool și cafeină cu 24 de ore înainte, evitarea aspirinei și antiinflamatoarelor cu 48 de ore înainte, evitarea tratamentelor faciale cu o săptămână înainte și venirea fără machiaj în zona care urmează să fie tratată."
        }
      },
      {
        "@type": "Question",
        "name": "Care este procesul de vindecare după micropigmentare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "După procedura de micropigmentare la Jofiel Art București, zona tratată va trece prin mai multe etape de vindecare: inițial va părea mai închisă la culoare, apoi se vor forma cruste fine care vor cădea natural. Este important să nu zgâriați sau să îndepărtați crustele și să urmați instrucțiunile de îngrijire pe care vi le oferim pentru rezultate optime."
        }
      },
      {
        "@type": "Question",
        "name": "Pot face micropigmentare dacă sunt însărcinată sau alăptez?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nu recomandăm procedurile de micropigmentare pentru femeile însărcinate sau care alăptează. Deși nu există studii care să demonstreze efecte negative, preferăm să adoptăm o abordare precaută. Vă invităm să ne vizitați salonul din București după această perioadă pentru a beneficia de serviciile noastre."
        }
      },
      {
        "@type": "Question",
        "name": "Oferiți consultații gratuite pentru micropigmentare în București?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, la Jofiel Art oferim consultații gratuite pentru toate serviciile noastre de micropigmentare. În timpul consultației, vom discuta despre așteptările dumneavoastră, vom analiza trăsăturile faciale și vom recomanda cea mai potrivită tehnică. Salonul nostru este situat în Sector 3, București, pe Șoseaua Mihai Bravu."
        }
      }
    ]
  };

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </Script>
  );
} 