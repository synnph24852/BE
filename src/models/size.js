import mongoose from "mongoose";
const sizeSchema = new mongoose.Schema(
  {
    name: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: { currentTime: () => Date.now() + 7 * 60 * 60 * 1000 },
    versionKey: false,
  }
);
export default mongoose.model("Size", sizeSchema);
