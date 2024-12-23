import React from "react";
import { AddProductForm } from "./add-product-form";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-3xl">Add Product</h1>
      <div className="bg-white rounded-md border p-5">
        <AddProductForm />
      </div>
    </div>
  );
};

export default page;
