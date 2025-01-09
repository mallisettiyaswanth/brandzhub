import { getProducts } from "@/app/actions/product";
import ProductCard from "./product";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

export async function ProductGrid() {
  const products = (await getProducts()).body;
  console.log(products);
  return products && products?.products?.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products?.products?.map((product: Product, index: number) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  ) : (
    <div className="min-h-56 flex items-center justify-center flex-col gap-3 w-full">
      No Products found
      <Link href="/admin/add-products">
        <Button>Add Product</Button>
      </Link>
    </div>
  );
}
