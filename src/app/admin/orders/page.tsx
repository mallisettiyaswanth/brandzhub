"use client";

import { getOrder } from "@/app/actions/order";
import { OrderList } from "./order-list";
import { useQuery } from "@tanstack/react-query";

export default function OrdersPage() {
  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrder(),
  });

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
