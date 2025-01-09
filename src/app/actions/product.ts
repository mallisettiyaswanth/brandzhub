"use server";

import { connectDb } from "@/lib/mongodb";
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
    await connectDb();
    const product = new Product({
      name: productName,
      cost: price,
      category,
      images: image,
      type,
      size: sizes,
    });
    await product.save();
    console.log("Product added successfully");
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
    await connectDb();
    const products = await Product.find({});
    const returnProducts = products.map((product) => {
      return {
        id: product._id.toString(),
        images: product.images,
        name: product.name,
        cost: product.cost,
        category: product.category,
        type: product.type,
        size: product.size,
      };
    });

    console.log(returnProducts);
    return {
      status: 200,
      body: {
        products: returnProducts,
      },
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};

export const editProduct = async (
  id: string,
  productName: string,
  price: number,
  images: string[],
  category: string[],
  type: string,
  sizes: string[]
) => {
  try {
    await connectDb();
    const result = await Product.updateOne(
      { _id: id },
      {
        $set: {
          name: productName,
          cost: price,
          images: images,
          category: category,
          type: type,
          size: sizes,
        },
      },
      {
        new: true,
      }
    );

    return {
      status: 202,
      body: {
        message: "Updated successfully",
      },
    };
  } catch (error) {
    return {
      status: 404,
      message: "Failed",
    };
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    await connectDb();
    const deletePr = await Product.deleteOne({
      _id: productId,
    });
    return {
      status: 200,
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};

export const getProductWithId = async (productId: string) => {
  try {
    await connectDb();
    const product = await Product.findById(productId);
    const returnObject = {
      id: product._id.toString(),
      images: product.images,
      name: product.name,
      cost: product.cost,
      category: product.category,
      type: product.type,
      size: product.size,
    };
    console.log(returnObject);
    return {
      status: 200,
      body: {
        product: returnObject,
      },
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};