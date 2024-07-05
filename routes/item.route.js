import { Router } from "express";
import { addItem } from "../controllers/item.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";
const router = Router();

router.post("/add", protectRoute, addItem);
export default router;
