import { ProductTable } from "./product-table";
import { AddProductForm } from "./add-product-form";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Products</h1>
      <AddProductForm />
      <ProductTable />
    </div>
  );
}
