import api from "@/api";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

async function page() {
  const products = await api.list();

  return (
    <div className="p-8">
      <ol className="m-0 grid list-none grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {products.map((producto) => {
          const imagenes = producto.images.split("+");

          return (
            <li
              key={producto.id}
              className="m-5 box-border flex shrink-0 grow-0 basis-full  p-5"
            >
              <div className="flex flex-col">
                <picture>
                  <Link href={`/productos/${producto.id.toString()}`}>
                    <img
                      src={imagenes[0]}
                      alt={producto.name}
                      className="m-auto h-auto w-full"
                    />
                  </Link>
                </picture>
                <div className="mt-2 text-center">
                  <p className="text-lg">
                    <Link href={`/productos/${producto.id.toString()}`}>
                      {producto.name}
                    </Link>
                  </p>
                  <strong>{formatPrice(producto.price)}</strong>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default page;
