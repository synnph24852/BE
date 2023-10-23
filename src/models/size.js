import mongoose from "mongoose";
const sizeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: { currentTime: () => Date.now() + 7 * 60 * 60 * 1000 },
    versionKey: false,
  }
);
export default mongoose.model("Size", sizeSchema);
