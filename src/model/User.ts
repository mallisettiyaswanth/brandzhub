import mongoose, { model, Schema } from "mongoose";

interface ProductSchemaType {
  images: string[];
  cost: number;
  name: string;
  size: string[];
  category: string[];
  type: string;
}

const ProductSchema = new Schema<ProductSchemaType>({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const Product =
  mongoose.models.Product || model<ProductSchemaType>("Product", ProductSchema);

export default Product;
