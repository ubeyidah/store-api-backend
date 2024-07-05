import { Schema, model } from "mongoose";

const storeItemSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, "author must provide "],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "item name must provide "],
      trim: true,
      unique: true,
    },
    catagory: {
      type: String,
      required: [true, "catagory must provide "],
      trim: true,
      enum: ["medication", "laboratory", "pharmacy", "electronic", "others"],
    },
    measure: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default model("storeItem", storeItemSchema);
