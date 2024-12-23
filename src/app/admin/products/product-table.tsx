import { getProducts } from "@/app/actions/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Product = {
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

export async function ProductGrid() {
  const products = (await getProducts()).body;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.products?.map((product: Product) => (
        <Card key={product.name} className="shadow-md">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.images[0] || "/placeholder-image.png"}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p className="text-sm text-gray-500 mb-2">Price: ${product.cost}</p>
            <p className="text-sm text-gray-500 mb-2">
              Sizes: {product.size.join(", ") || "N/A"}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Category: {product.category.join(", ") || "N/A"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
