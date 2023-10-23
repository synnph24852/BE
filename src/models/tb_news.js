import mongoose from "mongoose";
const newsSchema = new mongoose.Schema(
    {
        tieude: {
            type: String,
        },
        noidung: {
            type: String,
        },
        trang_thai: {
            type: String
        },
    // news: [{ type: mongoose.Types.ObjectId, ref: "image_news" }],
    },
    { timestamps: { currentTime: () => Date.now() + 7 * 60 * 60 * 1000 }, versionKey: false }
);

export default mongoose.model("news", newsSchema);
