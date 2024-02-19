import api from "@/api";

export const page = async () => {
  const products = await api.list();
  console.log(products);
  return <div>page</div>;
};
