"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialProducts = [
  { id: 1, name: "T-Shirt", price: 19.99, stock: 100 },
  { id: 2, name: "Jeans", price: 49.99, stock: 50 },
  { id: 3, name: "Sneakers", price: 79.99, stock: 30 },
];

export function ProductTable() {
  const [products, setProducts] = useState(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = async (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setEditingId(null);
    }
  };

  const handleChange = (id: number, field: string, value: string) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? {
              ...p,
              [field]:
                field === "price" || field === "stock"
                  ? parseFloat(value)
                  : value,
            }
          : p
      )
    );
  };

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
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              {editingId === product.id ? (
                <Input
                  value={product.name}
                  onChange={(e) =>
                    handleChange(product.id, "name", e.target.value)
                  }
                />
              ) : (
                product.name
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    handleChange(product.id, "price", e.target.value)
                  }
                />
              ) : (
                `$${product.price.toFixed(2)}`
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Input
                  type="number"
                  value={product.stock}
                  onChange={(e) =>
                    handleChange(product.id, "stock", e.target.value)
                  }
                />
              ) : (
                product.stock
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Button onClick={() => handleSave(product.id)}>Save</Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="mr-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
