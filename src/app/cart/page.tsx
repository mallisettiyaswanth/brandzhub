"use client";

import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { RootState } from "@/context/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/context/cartSlice";
import { Header } from "@/components/header";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <>
        <div className="mb-10">
          <Header />
        </div>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
          <ShoppingBag className="w-16 h-16 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-20">
        <Header />
      </div>
      <div className="container px-4 py-8 mx-auto mb-24">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{item.name}</h3>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="p-1 rounded-md hover:bg-muted"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="p-1 rounded-md hover:bg-muted"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="ml-auto font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <div>
                        {item.size && (
                          <span className="text-muted-foreground">
                            Size: {item.size}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              ))}
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full mt-6"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <Link href="/">
                  <Button variant="outline" className="w-full mt-4" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
