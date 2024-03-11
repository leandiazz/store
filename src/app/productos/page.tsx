import api from "@/api";
import ProductCard from "./ProductCard";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function page({ searchParams }: { searchParams: { q: string } }) {
  const products = await api.search(searchParams.q || "");

  async function searchActions(formData: FormData) {
    "use server";
    redirect(`/productos/?q=${formData.get("q")}`);
  }

  return (
    <div className="relative mt-4 p-8 md:p-8">
      <form action={searchActions} className="ml-10 flex">
        <Input defaultValue={searchParams.q || ""} className="w-[200px]" name="q" />
        <Button type="submit" className="ml-2">
          Buscar
        </Button>
      </form>
      <ol className="m-0 mt-5 grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((producto) => {
          return <ProductCard {...producto} key={producto.id} />;
        })}
        {products.length === 0 ? (
          <div className="ml-10 mt-14">
            <p className="text-start">producto no encontrado</p>
          </div>
        ) : null}
      </ol>
    </div>
  );
}
