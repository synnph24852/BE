import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    status: {
      type: String,
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

userSchema.pre("save", async function (next) {
  if (!this.role) {
    const Role = mongoose.model("Role");
    const defaultRole = await Role.findOne({ role_name: "user" });
    this.role = defaultRole._id;
  }
  next();
});

export default mongoose.model("User", userSchema);