import { array } from "joi";
import mongoose from "mongoose";
const { Schema } = mongoose;
import paginate from "mongoose-paginate-v2";
const productSchema = new Schema(
  {
    name: String,
    price: Number,
    image: array,
    description: String,
    quantity: Number,
    sale: {
      type: mongoose.Types.ObjectId,
      ref: "sale",
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    sizes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Size",
      },
    ],
    is_deleted: {
      type: Boolean,
      default: false,
    },
    trang_thai: {
      type: String,
      enum: ["active", "deactive"],
      default: "active",
    },
  },
  {
    timestamps: { currentTime: () => Date.now() + 7 * 60 * 60 * 1000 },
    versionKey: false,
  }
);
export default mongoose.model("Product", productSchema);
