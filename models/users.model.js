import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "user name must provied"],
      unique: [true, "this user name alrady exists"],
      minLength: [3, "user name must be more than 3 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email must provied"],
      trim: true,
      unique: [true, "this email alrady exists"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password must provied"],
    },
    isAdmin: {
      trim: true,
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model("user", userSchema);
