import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    ngaysinh: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      trang_thai: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    },
    image_url: {
      type: String,
    },
    favoriteProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FavoriteProduct",
      },
    ],
    addressUser: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
  },
  { timestamps: { currentTime: () => Date.now() + 7 * 60 * 60 * 1000 }, versionKey: false }
);


export default mongoose.model("Customer", customerSchema);