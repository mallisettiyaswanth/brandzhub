import Order from "@/model/Orders";

export type Order = {
  productId: string;
  quantity: number;
};

export const addOrder = async (orders: Order[], address: string) => {
  try {
    const orderDocuments = orders.map((order) => ({
      productId: order.productId,
      quantity: order.quantity,
      address,
    }));

    await Order.insertMany(orderDocuments);
    return {
      status: 201,
      message: "Ordered",
    };
  } catch {
    return {
      status: 404,
      message: "Failed",
    };
  }
};
