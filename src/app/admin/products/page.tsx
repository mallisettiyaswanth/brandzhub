import { AddProductForm } from "../add-products/add-product-form";
import { ProductGrid } from "./product-table";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Products</h1>

      <ProductGrid />
    </div>
  );
}
