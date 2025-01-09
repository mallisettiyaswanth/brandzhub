"use server";

import { connectDb } from "@/lib/mongodb";
import Order from "@/model/Orders";
import Product from "@/model/Product";

type OrderInput = {
  id: string;
  quantity: number;
  size: string;
};

export const createOrder = async (
  orders: OrderInput[],
  address: string,
  username: string,
  phoneNumber: string
) => {
  try {
    await connectDb();
    console.log(orders);
    const createdOrders = [];
    for (const order of orders) {
      const product = await Product.findById(order.id);
      if (!product) {
        throw new Error(`Product with ID ${order.id} not found.`);
      }
      const cost = product.cost * order.quantity;
      const newOrder = await Order.create({
        product: product.id,
        quantity: order.quantity,
        size: order.size,
        address,
        username,
        phoneNumber,
        status: "Pending",
        cost,
      });
      createdOrders.push(newOrder);
    }

    return {
      status: 201,
      message: "Orders created successfully.",
      orders: createdOrders,
    };
  } catch (error) {
    console.log(error)
    return {
      status: 404,
      message: "Failed to create orders.",
    };
  }
};

export const changeOrderStatus = async (orderId: string, status: string) => {
  try {
    await connectDb();
    const updated = await Order.updateOne(
      {
        _id: orderId,
      },
      {
        $set: {
          status,
        },
      },
      {
        new: true,
      }
    );

    return {
      status: 202,
      message: "Updated",
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};

export const deleteOrder = async (orderId: string) => {
  try {
    await Order.deleteOne({
      _id: orderId,
    });
    return {
      status: 202,
      message: "Updated",
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};

export const getOrder = async () => {
  try {
    await connectDb();
    const orders = await Order.find({}).populate("product");

    const formattedOrders = orders.map((order) => {
      return {
        id: order._id.toString(),
        quantity: order.quantity,
        size: order.size,
        product: {
          id: order.product._id.toString(),
          images: order.product.images,
          name: order.product.name,
          cost: order.product.cost,
          category: order.product.category,
          type: order.product.type,
          size: order.product.size,
        },
        address: order.address,
        username: order.username,
        phoneNumber: order.phoneNumber,
        status: order.status,
        cost: order.cost,
      };
    });

    return {
      status: 200,
      body: {
        orders: formattedOrders,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Failed",
    };
  }
};
