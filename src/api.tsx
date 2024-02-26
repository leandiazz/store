import { Product } from "./types";

const api = {
  list: async (): Promise<Product[]> => {
    const [, ...data] = await fetch(process.env.API_KEY)
      .then((res) => res.text())
      .then((text) => text.split("\n"));
    const products: Product[] = data.map((row) => {
      const [id, name, description, price, discount, type, color, images] =
        row.split(",");
      return {
        id: Number(id),
        name,
        description,
        price: Number(price),
        discount: Number(discount),
        type,
        color,
        images,
      };
    });
    return products;
  },
  fetch: async (id: Product["id"]): Promise<Product> => {
    const [, ...data] = await fetch(process.env.API_KEY, {
      next: { tags: ["producto"] },
    })
      .then((res) => res.text())
      .then((text) => text.split("\n"));
    const products: Product[] = data.map((row) => {
      const [id, name, description, price, discount, type, color, images] =
        row.split(",");
      return {
        id: Number(id),
        name,
        description,
        price: Number(price),
        discount: Number(discount),
        type,
        color,
        images,
      };
    });

    const product = products.find((product) => product.id === id);
    if (!product) {
      throw new Error(`product with id ${id} not found`);
    }

    return product;
  },
  search: async (query: string): Promise<Product[]> => {
    if (query === "") return api.list();
    return api
      .list()
      .then((products) =>
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()),
        ),
      );
  },
};

export default api;
