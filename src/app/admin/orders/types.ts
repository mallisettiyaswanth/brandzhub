export type Order = {
  quantity: number;
  size: string;
  address: string;
  username: string;
  phoneNumber: string;
  status: string;
  cost: number;
  product: Product;
  _id: string;
};

export type Product = {
  _id: string;
  name: string;
  cost: number;
  category: string[];
  size: string[];
  images: string[];
};
