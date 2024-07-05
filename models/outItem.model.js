import mongoose from "mongoose";

const outItemSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "author must provide "],
      trim: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const OutItems = mongoose.model("outItem", outItemSchema);
export default OutItems;
