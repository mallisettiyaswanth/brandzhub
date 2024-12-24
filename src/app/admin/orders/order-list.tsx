import OrderItem from "./order-item";
import { Order } from "./types";

type Props = {
  orders: Order[];
};

export function OrderList({ orders }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((order: Order, index: number) => (
        <OrderItem order={order} key={order._id} index={index} />
      ))}
    </div>
  );
}
