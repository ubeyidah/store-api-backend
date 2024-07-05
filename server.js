import express from "express";
import { config } from "dotenv";
import connectToDb from "./config/connect.db.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import storeItemRoutes from "./routes/storeItem.route.js";

const app = express();
config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/storeItem", storeItemRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectToDb();
  console.log(`👏 server running on: http://localhost:${port}`);
});
