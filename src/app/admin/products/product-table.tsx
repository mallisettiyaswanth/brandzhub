import { getProducts } from "@/app/actions/product";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Product = {
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

export async function ProductTable() {
  const products = (await getProducts()).body;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.products?.map((product: Product) => {
          return (
            <TableRow>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.cost}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
