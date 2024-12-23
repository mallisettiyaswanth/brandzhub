"use server";

import { connectDB } from "@/lib/mongodb";
import Product from "@/model/User";

export const addProduct = async (productName: string, price: number) => {
  try {
    await connectDB();
    const product = new Product({
      name: productName,
      cost: price,
    });
    await product.save();
    console.log("Product is saved");
    return {
      status: 201,
      message: "Created",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Failed",
    };
  }
};
