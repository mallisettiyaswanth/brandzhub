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
import Link from "next/link";

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
  return (
    <Link href={`/products/${product.id}`}>
      <Card key={product.name} className="shadow-md">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <ProductCarousel images={product.images} />
          <div>
            <p className="text-sm text-gray-500 mb-2">Price: ₹{product.cost}</p>
            <p className="text-sm text-gray-500 mb-2">
              {product.size ? (
                <>Sizes: {product.size.join(", ") || "N/A"}</>
              ) : (
                <></>
              )}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Category: {product.category.join(", ") || "N/A"}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
