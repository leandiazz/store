import CHECKOUTFORM from "./CHECKOUTFORM";
import CHECKOUT from "./CHECKOUT";

export default function page() {
  return (
    <main className="mx-[5%] mt-10 flex h-full w-[90%] flex-col">
      <h1 className="w-full text-center text-2xl font-medium lg:mb-5 lg:text-3xl">
        Carrito de Compras
      </h1>
      <section className="flex h-full w-full flex-col justify-center lg:flex-row">
        <CHECKOUT />
        <CHECKOUTFORM />
      </section>
    </main>
  );
}
