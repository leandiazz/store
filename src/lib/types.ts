export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  type: string;
  imagesArray: string[];
  colorArray: string[];
  priceDiscounted: number;
}
export interface Params {
  params: {
    id: string;
  };
}
