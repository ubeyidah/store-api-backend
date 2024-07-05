import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "storeItem",
      required: true,
      trim: true,
    },
    inStock: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    expireOn: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Items = mongoose.model("item", itemSchema);
export default Items;
