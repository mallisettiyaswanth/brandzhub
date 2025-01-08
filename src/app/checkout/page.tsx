"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RootState } from "@/context/store";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/order";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { clearCart } from "@/context/cartSlice";

type Props = {};

// Define form input types
interface FormValues {
  username: string;
  address: string;
  phoneNumber: string;
}

const Page: React.FC<Props> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const { mutateAsync } = useMutation({
    mutationKey: ["createOrder"],
    mutationFn: async (values: FormValues) => {
      return createOrder(
        cartItems?.map((cartItem) => ({
          id: cartItem.id,
          quantity: cartItem.quantity,
          size: cartItem.size,
        })) ?? [],
        values.address,
        values.username,
        values.phoneNumber
      );
    },
  });

  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      address: "",
      phoneNumber: "",
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    toast.promise(
      mutateAsync(values, {
        onSuccess: () => {
          form.reset();
          dispatch(clearCart());
          router.replace("/");
        },
      }),
      {
        loading: "Placing order...",
        success: "Order placed successfully.",
        error: "Failed to place order.",
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <Header />
      <div className="w-full flex flex-col gap-5 p-5 mt-20">
        <div className="flex justify-between flex-col md:flex-row gap-5">
          <div>
            <h1 className="text-3xl font-semibold">Checkout</h1>
            <p className="text-muted-foreground">
              Review your order before proceeding to checkout.
            </p>
          </div>
          <div className="text-3xl">
            <span>
              Total: <span className="font-semibold">₹{totalPrice}</span>
            </span>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address Field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your address"
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter your complete address, separated by commas if needed.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number Field */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a valid phone number for contact purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-fit self-end"
              disabled={form.formState.isSubmitting}
            >
              Place Order
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
