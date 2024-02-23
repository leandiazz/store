import type { Metadata } from "next";

import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Cruel Summer",
  description:
    "Descubre la última moda en nuestra tienda de ropa femenina. Ofrecemos una amplia gama de faldas, tops, pantalones y remerones de alta calidad y estilo. ¡Viste con confianza y estilo con nuestras prendas únicas!",
  keywords: ["tops", "vestidos", "remerones", "pantalones", "faldas", "ropa"],
  category: "indumentaria",
  openGraph: {
    title: "Cruel Summer",
    description: "Tienda de ropa femenina, prendas únicas!",
    url: "https://cruelsummer.vercel.app",
    siteName: "Cruel Summer",
    images: [
      {
        url: "https://cruelsummer.vercel.app/PIC.png",
        width: 560,
        height: 365,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          raleway.className,
        )}
      >
        <Navbar />
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
