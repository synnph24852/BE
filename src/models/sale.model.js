import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SaleSchema = new Schema(
    {
        // product: [{ type: mongoose.Types.ObjectId, ref: "Product", required: true }],
        name: { type: String, required: true },
        sale: { type: String, required: true },
        expirationDate: { type: String, required: true },
        // Ngày hết hạn
        usageLimit: { type: Number, required: true },
        // Số lần dùng
    },
    { collection: "sale", timestamps: true }
);

const SaleModel = mongoose.model("sale", SaleSchema);

export default SaleModel;
