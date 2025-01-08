"use client";

import searchProducts from "@/app/actions/search";
import { Header } from "@/components/header";
import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {
  params: {
    query: string;
  };
};

const Page = ({ params: { query } }: Props) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchProducts(query),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log(products);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-col p-5 mt-20">
        <h1 className="text-3xl">Search results for '{query}'</h1>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products &&
            products.body &&
            products?.body.length > 0 &&
            products?.body?.map((product: any, index: number) => {
              return <ProductCard product={product} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
