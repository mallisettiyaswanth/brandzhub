import {
  Package,
  User,
  MapPin,
  Phone,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import { Order } from "./types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DeliveryButton from "./delivered-button";

interface OrderItemProps {
  order: Order;
  index: number;
}

export default function OrderItem({ order, index }: OrderItemProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg border-t-4 border-t-blue-500 dark:border-t-blue-400">
      <CardHeader className="bg-gradient-to-r from-blue-100 via-teal-100 to-amber-100 dark:from-blue-900/50 dark:via-teal-900/50 dark:to-amber-900/50">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-200">
              Order #{index + 1}
            </span>
            {order?.status === "Delivered" && (
              <Badge className="bg-green-700">Delivered</Badge>
            )}
          </span>
          <DeliveryButton orderId={order.id} status={order?.status} />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 bg-white dark:bg-gray-800">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 lg:gap-0">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                <span className="text-sm">{order?.username}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-500 dark:text-teal-400" />
                <span className="text-sm">{order?.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                <span className="text-sm">{order?.phoneNumber}</span>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="text-lg sm:mt-0 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 mt-auto self-auto rounded-full items-center flex justify-center"
            >
              ${order?.cost?.toFixed(2)}
            </Badge>
          </div>

          <div className="border-t border-blue-200 dark:border-blue-700 pt-4">
            <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-300">
              Product Details
            </h3>
            <div className="flex sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 gap-5 lg:gap-0">
              <div className="flex-shrink-0">
                <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0">
                  <img
                    src={order?.product?.images[0]}
                    alt={`${order?.product?.name} image`}
                    width={100}
                    height={100}
                    className="rounded-md object-cover border-2 border-amber-200 dark:border-amber-700"
                  />
                </div>
              </div>
              <div className="flex-grow space-y-2">
                <h4 className="text-blue-700 dark:text-blue-300">
                  Name: {order.product?.name}
                </h4>
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-teal-700 dark:text-teal-300">
                    Quantity: {order?.quantity}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="text-amber-700 dark:text-amber-300">
                    Cost: ${order?.product?.cost?.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
