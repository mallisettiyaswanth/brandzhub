import OrderItem from "./order-item";
import { Order } from "./types";

type Props = {
  orders: Order[];
  refetch: () => void;
};

export function OrderList({ orders, refetch }: Props) {
  // console.log(orders);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((order: Order, index: number) => (
        <OrderItem
          order={order}
          key={order.id}
          index={index}
          refetch={refetch}
        />
      ))}
    </div>
  );
}
