import type { Metadata } from "next";

import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Cruel Summer",
  description: "Tienda de ropa",
  keywords: ["tops", "vestidos", "remerones", "pantalones", "faldas"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", raleway.className)}>
        <Navbar />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
