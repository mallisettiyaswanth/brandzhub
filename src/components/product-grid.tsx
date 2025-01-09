"use client";

import { getProducts } from "@/app/actions/product";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { LucideArrowDownWideNarrow } from "lucide-react";

type Product = {
  _id: string;
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

export async function getProductsData(skip: number, limit: number) {
  const products = (await getProducts()).body;
  return products?.products.slice(skip, skip + limit);
}

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadMoreProducts = async () => {
    setIsLoading(true);
    const nextProducts = (await getProductsData(visibleCount, 8)) || [];
    setProducts((prevProducts) => [...prevProducts, ...nextProducts]);
    setVisibleCount(visibleCount + 10);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const initialProducts = (await getProductsData(0, 8)) || [];
      setProducts(initialProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product: Product, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      ) : (
        <div className="min-h-56 flex items-center justify-center flex-col gap-3 w-full">
          No Products found
        </div>
      )}

      {products.length > 0 && !isLoading && (
        <div className="text-center m-4">
          <Button onClick={loadMoreProducts}>
            View More <LucideArrowDownWideNarrow />
          </Button>
        </div>
      )}

      {isLoading && (
        <div className="text-center mt-4">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
