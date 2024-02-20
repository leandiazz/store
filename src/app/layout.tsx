import type { Metadata } from "next";

import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Cruel Summer",
  description: "Tienda de ropa",
  keywords: ["tops", "vestidos", "remerones", "pantalones", "faldas"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
