import api from "@/api";

async function page() {
  const products = await api.list();
  console.log(products);
  return <div>page</div>;
}

export default page;
