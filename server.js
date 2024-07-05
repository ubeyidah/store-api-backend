import express from "express";
import { config } from "dotenv";
import connectToDb from "./config/connect.db.js";

const app = express();
config();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  connectToDb();
  console.log(`👏 server running on: http://localhost:${port}`);
});
