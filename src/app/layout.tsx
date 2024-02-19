/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import NavBar from "@/(components)/NavBar";

export const metadata: Metadata = {
  title: "Cruel Summer",
  description: "Tienda de ropa",
  keywords: ["tops", "vestidos", "remerones", "pantalones", "faldas"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-auto grid min-h-screen grid-rows-[auto,1fr,auto]">
        {/* <h2 className="text-center bg-purple-400 text-black">
          Bienvenidx a nuestra tienda online!
        </h2> */}
        <NavBar />
        <main className="py-8">{children}</main>
        <footer>
          <div className="border-t-[1px] mx-10">
            <h5 className="mt-5 mb-2 text-xl">Medios de pago</h5>
            <div className="flex justify-start">
              <img
                src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/deposito.png"
                alt="medio de pago"
                className="h-[20px] w-auto my-0 mx-[5px]"
              />
              <img
                src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/efectivo.png"
                alt="medio de pago"
                className="h-[20px] w-auto my-0 mx-[5px]"
              />
              <img
                src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/acordar.png"
                alt="medio de pago"
                className="h-[20px] w-auto my-0 mx-[5px]"
              />
            </div>
            <h5 className="mt-5 mb-2 text-xl">Medios de envío</h5>
            <div className="flex justify-start">
              <img
                src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/correo-argentino.png"
                alt="medio de envío"
                className="h-[20px] w-auto my-0 mx-[5px]"
              />
              <img
                src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/retiro-local.png"
                alt="medio de envío"
                className="h-[20px] w-auto my-0 mx-[5px]"
              />
              <img
                src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/acordar.png"
                alt="medio de envío"
                className="h-[20px] w-auto my-0 mx-[5px]"
              />
            </div>
            <h5 className="mt-5 mb-2 text-xl">Nuestras redes sociales</h5>
            <Link href="https://facebook.com/Cruelsummerind">facebook</Link>
            <br />
            <Link href="https://instagram.com/cruelsummer.ind">instagram</Link>
            <h5 className="mt-5 mb-2 text-xl">Contacto</h5>
            <a href="mailto:cruelsummer.ind@gmail.com" target="_blank">
              cruelsummer.ind@gmail.com
            </a>
            <br />
            <a href="sms:1134060366" target="_blank">
              1134060366
            </a>
          </div>
          <div className="text-center leading-[3rem] opacity-70">
            © {new Date().getFullYear()} Cruel Summer
          </div>
        </footer>
      </body>
    </html>
  );
}
