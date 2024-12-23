import mongoose, { model, Schema } from "mongoose";

interface OrderSchemaType {
  productId: mongoose.Schema.Types.ObjectId;
  address: string;
}

const OrderSchema = new Schema<OrderSchemaType>({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Order =
  mongoose.models?.Order || model<OrderSchemaType>("Product", OrderSchema);

export default Order;
