import type { Metadata } from "next";
import { cn, playfair_display, promptFont } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cruelsummer.vercel.app"),
  title: "Cruel Summer",
  authors: [{ name: "Leandro Diaz", url: "https://www.linkedin.com/in/leandiaz/" }],
  description:
    "Descubre la última moda en nuestra tienda de ropa femenina. Ofrecemos una amplia gama de faldas, tops, pantalones y remerones de alta calidad y estilo. ¡Viste con confianza y estilo con nuestras prendas únicas!",
  keywords: ["tops", "vestidos", "remerones", "pantalones", "faldas", "vestimenta"],
  category: "indumentaria",
  openGraph: {
    title: "Cruel Summer",
    description: "Tienda de ropa femenina, prendas únicas!",
    url: "https://cruelsummer.vercel.app",
    siteName: "Cruel Summer",
    images: [
      {
        url: "https://cruelsummer.vercel.app/metaimage.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body
        className={cn(
          "relative h-full font-primary antialiased",
          promptFont.variable,
          playfair_display.variable,
        )}
      >
        <Navbar />
        <main className="relative flex min-h-full flex-col">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
