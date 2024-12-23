"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import { addProduct, editProduct } from "@/app/actions/product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Product = {
  id: string;
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
};

const schema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.coerce.number().positive("Price must be a positive number"),
  type: z.string().min(1, "Product type is required"),
  images: z
    .array(z.string().url("Invalid URL"))
    .min(1, "At least one image is required"),
  category: z.array(z.string()),
  sizes: z.array(z.string()),
});

type FormValues = z.infer<typeof schema>;

const sizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const categoryOptions = [
  { value: "shirts", label: "Shirts" },
  { value: "pants", label: "Pants" },
  { value: "accessories", label: "Accessories" },
];

type Props = {
  product?: Product;
};

export function AddProductForm({ product }: Props) {
  const [sizes, setSizes] = useState<string[]>(() => {
    return product?.size ?? [""];
  });
  const [categories, setCategories] = useState<string[]>(() => {
    return product?.category ?? [""];
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: product?.name ?? "",
      price: product?.cost ?? 0,
      type: product?.type ?? "",
      images: product?.images ?? [""],
      category: product?.category ?? [""],
      sizes: product?.size ?? [],
    },
  });

  const onAddSubmit = async (data: FormValues) => {
    if (categories.length <= 0)
      form.setError("category", {
        message: "One Category is required",
      });

    if (sizes.length <= 0)
      form.setError("sizes", {
        message: "One Size is required",
      });

    const resposne = await addProduct(
      data.name,
      data.price,
      data.images,
      categories,
      data.type,
      sizes
    );

    if (resposne.status === 201) {
      toast("Success", {
        description: "Product is added",
      });
      form.reset();
    } else {
      toast("Error", {
        description: "Something went wrong!",
      });
    }
  };
  const onEditSubmit = async (data: FormValues) => {
    if (categories.length <= 0)
      form.setError("category", {
        message: "One Category is required",
      });

    if (sizes.length <= 0)
      form.setError("sizes", {
        message: "One Size is required",
      });

    const resposne = await editProduct(
      product?.id ?? "",
      data.name,
      data.price,
      data.images,
      categories,
      data.type,
      sizes
    );

    if (resposne.status === 201) {
      toast("Success", {
        description: "Product is added",
      });
      form.reset();
    } else {
      toast("Error", {
        description: "Something went wrong!",
      });
    }
  };

  const addImage = () => {
    const currentImages = form.getValues("images");
    form.setValue("images", [...currentImages, ""]);
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images");
    if (currentImages.length > 1) {
      const newImages = currentImages.filter((_, i) => i !== index);
      form.setValue("images", newImages);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(product ? onEditSubmit : onAddSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Product Name"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Price"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  {form.watch("images").map((_, index) => (
                    <FormField
                      key={index}
                      control={form.control}
                      name={`images.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center space-x-2">
                            <FormControl>
                              <Input
                                placeholder={`Image URL ${index + 1}`}
                                {...field}
                                disabled={form.formState.isSubmitting}
                              />
                            </FormControl>
                            {index > 0 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeImage(index)}
                                aria-label={`Remove image ${index + 1}`}
                                disabled={form.formState.isSubmitting}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addImage}
                    className="mt-2"
                    disabled={form.formState.isSubmitting}
                  >
                    Add Image
                  </Button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sizes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sizes</FormLabel>
              <FormControl>
                <MultiSelect
                  options={sizeOptions}
                  {...field}
                  onValueChange={setSizes}
                  placeholder="Select sizes"
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <MultiSelect
                  options={categoryOptions}
                  {...field}
                  onValueChange={setCategories}
                  placeholder="Select category"
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {product ? (
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Saving..." : "Save Product"}
          </Button>
        ) : (
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Adding..." : "Add Product"}
          </Button>
        )}
      </form>
    </Form>
  );
}
