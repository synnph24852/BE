import mongoose from 'mongoose'

const { Schema } = mongoose
const Category = new Schema({
    name: {
        type: String,
        required: true
    },
    desciption: {
      type: String,
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("category", Category)