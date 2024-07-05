import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "user name must provied"],
      unique: [true, "this user name alrady exists"],
      minLength: [3, "user name must be more than 3 characters"],
    },
    email: {
      type: String,
      required: [true, "email must provied"],
      unique: [true, "this email alrady exists"],
    },
    password: {
      type: String,
      required: [true, "password must provied"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model("user", userSchema);
