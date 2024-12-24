import mongoose, { model, Schema } from "mongoose";

interface OrderSchemaType {
  size: string;
  product: mongoose.Schema.Types.ObjectId;
  quantity: number;
  address: string;
  username: string;
  phoneNumber: string;
  status: string;
  cost: number;
}

const OrderSchema = new Schema<OrderSchemaType>({
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Order =
  mongoose.models?.Order || model<OrderSchemaType>("Order", OrderSchema);

export default Order;
