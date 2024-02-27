import api from "@/api";
import ProductCard from "../components/ProductCard";
import { redirect } from "next/navigation";

export default async function page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const products = await api.search(searchParams.q || "");

  async function searchActions(formData: FormData) {
    "use server";
    redirect(`/productos/?q=${formData.get("q")}`);
  }

  return (
    <div className="relative p-8">
      <form action={searchActions} className="ml-10">
        <input
          defaultValue={searchParams.q || ""}
          className="border-2 bg-slate-100 px-2"
          name="q"
        />
        <button type="submit" className="ml-2">
          Buscar
        </button>
      </form>
      <ol className="m-0 grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((producto) => {
          return <ProductCard producto={producto} key={producto.id} />;
        })}
        {products.length === 0 ? (
          <div className="mt-[30%]">
            <p className="text-center">producto no encontrado :(</p>
          </div>
        ) : null}
      </ol>
    </div>
  );
}
