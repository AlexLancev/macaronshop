export interface BaseDessert {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  ingredients: string[];
}