export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  type: string;
  color: string;
  images: string;
}

const api = {
  list: async (): Promise<Product[]> => {
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOBI-iIMsOrSJM7Q5MjyOxoOYk5h005feJpojroduwQWtmrjVOhXKHNa1smtDO_AEx4lLrsS70uI9W/pub?output=csv"
    )
      .then(res => res.text())
      .then(text => text.split("\n"));
    const products: Product[] = data.map(row => {
      const [id, name, description, price, discount, type, color, images] = row.split(",");
      return {
        id: Number(id),
        name,
        description,
        price: Number(price),
        discount: Number(discount),
        type,
        color,
        images
      };
    });
    return products;
  },
  fetch: async (id: Product["id"]): Promise<Product> => {
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOBI-iIMsOrSJM7Q5MjyOxoOYk5h005feJpojroduwQWtmrjVOhXKHNa1smtDO_AEx4lLrsS70uI9W/pub?output=csv"
    )
      .then(res => res.text())
      .then(text => text.split("\n"));
    const products: Product[] = data.map(row => {
      const [id, name, description, price, discount, type, color, images] = row.split(",");
      return {
        id: Number(id),
        name,
        description,
        price: Number(price),
        discount: Number(discount),
        type,
        color,
        images
      };
    });
    const product = products.find(product => product.id === id);
    if (!product) {
      throw new Error(`product with id ${id} not found`);
    }

    return product;
  }
};

export default api;
