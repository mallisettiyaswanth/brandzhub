"use client";

import { ShoppingCart } from "lucide-react"; // Import cart icon
import { deleteProduct } from "@/app/actions/product";
import ProductCarousel from "@/components/product-carousel";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/context/cartSlice";

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
// import { AddProductForm } from "../add-products/add-product-form";
import { AddProductForm } from "@/app/admin/add-products/add-product-form";

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

  //   const handleDelete = async () => {
  //     const status = await deleteProduct(product.id);
  //     if (status.status === 200) {
  //       toast("Success", {
  //         description: "Product is deleted",
  //       });
  //       setDeleteModelOpen(false);
  //       router.refresh();
  //     } else {
  //       toast("Error", {
  //         description: "Something went wrong!",
  //       });
  //     }
  //   };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.cost,
        quantity: 1,
      })
    );
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
      <CardFooter className="flex justify-center">
        {" "}
        <Button
          onClick={handleAddToCart}
          className="p-4  flex items-center justify-center gap-2 transition-transform transform hover:scale-105 hover:bg-transparent hover:text-black hover:border border-black"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </Button>
      </CardFooter>
      {/* </Card> */}

      {/* <CardFooter className="flex gap-3 p-3 lg:p-6">
        <Dialog open={editModelOpen} onOpenChange={setEditModelOpen}>
          <DialogTrigger>
            <Button>
              <Edit />
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Edit Product</DialogTitle>
            <AddProductForm
              product={product}
              callback={() => setEditModelOpen(false)}
            />
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
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
