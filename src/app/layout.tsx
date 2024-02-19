import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cruel Summer",
  description: "Tienda de ropa",
  keywords: ["tops", "vestidos", "remerones", "pantalones"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto]">
        {/* <h2 className="text-center bg-purple-400 text-black">
          Bienvenidx a nuestra tienda online!
        </h2> */}
        <header className="text-xl font-bold leading-[3rem]">
          <Link href="/">Cruel Summer</Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Cruel Summer
        </footer>
      </body>
    </html>
  );
}
