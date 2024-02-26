import api from "@/api";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const producto = await api.fetch(Number(id));
  return {
    title: `${producto.name} - Cruel Summer`,
    description: producto.description,
  };
}

export async function generateStaticParams() {
  const products = await api.list();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export const dynamicParams = false;

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const producto = await api.fetch(Number(id));
  const imagenes = producto.images.split("+");
  return (
    <div
      key={producto.id}
      className="flex flex-col px-10 pt-10 md:flex-row md:px-20"
    >
      <picture className="flex flex-col justify-center md:pr-[7%]">
        <img
          src={imagenes[0]}
          alt={producto.name}
          className="w-full md:w-[500px]"
        ></img>
      </picture>
      <div className="pt-10 md:pt-20 lg:w-[20%]">
        <h1 className="text-2xl">{producto.name}</h1>
        <p>{formatPrice(producto.price)}</p>
        <div className="flex items-center justify-center py-12 md:pt-20 lg:w-full">
          <Button size={"lg"} variant={"outline"} className="lg:w-full">
            <span>Añadir al carrito</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
// Todo: Change img tag to Image from next/image
