"use client";

import { deleteProduct } from "@/app/actions/product";
import ProductCarousel from "@/components/product-carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { AddProductForm } from "../add-products/add-product-form";

type Product = {
  id: string;
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [deleteModelOpen, setDeleteModelOpen] = useState<boolean>(false);
  const [editModelOpen, setEditModelOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    const status = await deleteProduct(product.id);
    if (status.status === 200) {
      toast("Success", {
        description: "Product is deleted",
      });
      setDeleteModelOpen(false);
      router.refresh();
    } else {
      toast("Error", {
        description: "Something went wrong!",
      });
    }
  };

  return (
    <Card key={product.name} className="shadow-md">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ProductCarousel images={product.images} />
        <div>
          <p className="text-sm text-gray-500 mb-2">Price: ${product.cost}</p>
          <p className="text-sm text-gray-500 mb-2">
            Sizes: {product.size.join(", ") || "N/A"}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category.join(", ") || "N/A"}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Dialog open={editModelOpen} onOpenChange={setEditModelOpen}>
          <DialogTrigger>
            <Button>
              <Edit />
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddProductForm product={product} />
          </DialogContent>
        </Dialog>

        <Dialog open={deleteModelOpen} onOpenChange={setDeleteModelOpen}>
          <DialogTrigger>
            <Button variant="destructive">
              <Trash /> Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure to delete</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                product from servers.
              </DialogDescription>
            </DialogHeader>
            <div className="flex self-end gap-3 ml-auto">
              <Button onClick={() => setDeleteModelOpen(false)}>No</Button>
              <Button variant="destructive" onClick={handleDelete}>
                Yes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
