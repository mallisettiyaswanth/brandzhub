"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addProduct } from "@/app/actions/product";
import { MultiSelect } from "@/components/ui/multi-select";

export function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategories] = useState<string[]>([""]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([""]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (images[0].trim() === "") {
      alert("At least one image is required.");
      return;
    }
    await addProduct(name, parseInt(price), images, category, type, sizes);
    setName("");
    setPrice("");
    setType("");
    setCategories([""]);
    setSizes([]);
    setImages([""]);
    setIsLoading(false);
  };

  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    if (newImages.length === 0) {
      setImages([""]);
    }
  };

  const sizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const categoryOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={isLoading}
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        disabled={isLoading}
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setType(e.target.value)}
        required
        disabled={isLoading}
      />
      {images.map((image, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Input
            placeholder={`Image URL ${index + 1}`}
            value={image}
            onChange={(e) => handleImageChange(index, e.target.value)}
            required={index === 0}
            disabled={isLoading}
          />
          {index > 0 && (
            <Button
              type="button"
              variant="destructive"
              onClick={() => handleRemoveImage(index)}
            >
              Remove
            </Button>
          )}
        </div>
      ))}
      <MultiSelect
        options={sizeOptions}
        onValueChange={setSizes}
        placeholder="Select sizes"
        disabled={isLoading}
      />
      <MultiSelect
        options={categoryOptions}
        onValueChange={setCategories}
        placeholder="Select category"
        disabled={isLoading}
      />
      <div className="flex gap-5 items-center">
        <Button type="button" onClick={handleAddImage} disabled={isLoading}>
          Add Image
        </Button>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Product"}
        </Button>
      </div>
    </form>
  );
}
