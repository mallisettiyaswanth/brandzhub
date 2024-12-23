import mongoose, { model, Schema } from "mongoose";

interface OrderSchemaType {
  productIds: mongoose.Schema.Types.ObjectId[];
  quantity: number;
  address: string;
  username: string;
  phoneNumber: string;
}

const OrderSchema = new Schema<OrderSchemaType>({
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  address: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
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
});

const Order =
  mongoose.models?.Order || model<OrderSchemaType>("Product", OrderSchema);

export default Order;
