import express from "express";
import { config } from "dotenv";
import connectToDb from "./config/connect.db.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import storeItemRoutes from "./routes/storeItem.route.js";
import itemRoutes from "./routes/item.route.js";
import adminControllerRoutes from "./routes/adminController.route.js";

const app = express();
config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/storeItem", storeItemRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/adminController", adminControllerRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectToDb();
  console.log(`👏 server running on: http://localhost:${port}`);
});
