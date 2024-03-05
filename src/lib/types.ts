export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  type: string;
  color: string;
  imagesArray: string[];
}
export interface Params {
  params: {
    id: string;
  };
}
