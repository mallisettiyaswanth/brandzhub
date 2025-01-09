export type Order = {
  id: string;
  quantity: number;
  size: string;
  address: string;
  username: string;
  phoneNumber: string;
  status: string;
  cost: number;
  product: Product;
};

export type Product = {
  id: string;
  name: string;
  cost: number;
  category: string[];
  size: string[];
  images: string[];
  type: string;
};







