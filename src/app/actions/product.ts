"use server";

import { connectDB } from "@/lib/mongodb";
import Product from "@/model/Product";

export const addProduct = async (
  productName: string,
  price: number,
  image: string[],
  category: string[],
  type: string,
  sizes: string[]
) => {
  try {
    await connectDB();
    const product = new Product({
      name: productName,
      cost: price,
      category,
      image,
      type,
      sizes,
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

export const getProducts = async () => {
  try {
    await connectDB();
    const products = await Product.find({});
    return {
      status: 200,
      body: {
        products,
      },
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};


const editProduct = async () => {};

const deleteProduct = async () => {};