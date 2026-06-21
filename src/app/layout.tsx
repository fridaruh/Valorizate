import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Valorizate — El primer concurso de educacion financiera de America Latina",
  description:
    "Participa en Valorizate. Compite en diferentes fases, supera desafios en vivo y demuestra que sabes administrar, ahorrar, invertir y tomar decisiones inteligentes. Premio mayor: $30.000.000 COP.",
  metadataBase: new URL("https://valorizate.com"),
  openGraph: {
    title: "Valorizate — El primer concurso de educacion financiera de America Latina",
    description:
      "Compite por hasta $30 millones de pesos. Sin sorteos. Sin azar. Tu conocimiento te lleva a la final.",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 246,
        alt: "Valorizate",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valorizate — Concurso de Educacion Financiera",
    description:
      "Compite por hasta $30 millones de pesos. Sin sorteos. Sin azar. Tu conocimiento te lleva a la final.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
