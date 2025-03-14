import { TempoInit } from "@/components/tempo-init";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Inter, Quicksand, Poppins } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Micropigmentare Sprâncene și Buze București | Jofiel Art",
  description:
    "Salon specializat în micropigmentare sprâncene și buze în București, oferind servicii profesionale de înaltă calitate pentru a vă pune în valoare frumusețea naturală.",
  keywords: [
    "micropigmentare",
    "micropigmentare sprancene",
    "micropigmentare buze",
    "salon micropigmentare",
    "micropigmentare bucuresti",
    "jofiel art",
    "microblading",
  ],
  authors: [{ name: "Jofiel Art" }],
  creator: "Jofiel Art",
  publisher: "Jofiel Art",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://jofielart.com",
    title: "Micropigmentare Sprâncene și Buze București | Jofiel Art",
    description:
      "Salon specializat în micropigmentare sprâncene și buze în București, oferind servicii profesionale de înaltă calitate.",
    siteName: "Jofiel Art",
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
        width: 1200,
        height: 630,
        alt: "Jofiel Art - Salon de Micropigmentare București",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Micropigmentare Sprâncene și Buze București | Jofiel Art",
    description:
      "Salon specializat în micropigmentare sprâncene și buze în București, oferind servicii profesionale de înaltă calitate.",
    images: [
      "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
    ],
  },
  icons: {
    icon: "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
    shortcut:
      "https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://jofielart.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://drive.google.com/uc?export=view&id=1azmfKfCyTEvdqhjUTuHRWFgpn66lzFF7"
        />
        <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <TempoInit />
        </ThemeProvider>
      </body>
    </html>
  );
}
