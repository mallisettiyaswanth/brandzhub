"use server";

import { connectDb } from "@/lib/mongodb";
import Product from "@/model/Product";

const searchProducts = async (query: string) => {
  try {
    await connectDb();
    const products = await Product.find({});
    console.log(products);
    const filteredProducts = products.filter((products) => {
      return products.category
        .map((doc: string) => {
          return doc.toLocaleLowerCase();
        })
        .includes(query.toLocaleLowerCase());
    });

    return {
      status: 200,
      body: filteredProducts,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Something went wrong!",
    };
  }
};

export default searchProducts;
