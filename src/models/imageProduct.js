import mongoose from "mongoose";
const imageProductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
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

export default mongoose.model("imageProduct", imageProductSchema);
