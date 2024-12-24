import { createOrder, getOrder } from "@/app/actions/order";
import { OrderList } from "./order-list";

export default async function OrdersPage() {
  const orders = await getOrder();

  // await createOrder(
  //   [{ id: "676a894b92cd788113fb2c42", quantity: 5, size: "small" }],
  //   "Mandapeta, Andhra Pradesh, India - 533308",
  //   "Yaswanth",
  //   "+91 8106344135"
  // );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      {orders?.body?.orders && orders?.body?.orders?.length > 0 ? (
        <OrderList orders={orders.body?.orders ?? []} />
      ) : (
        <div className="flex h-96 w-full items-center justify-center">
          No Orders Yet
        </div>
      )}
    </div>
  );
}
