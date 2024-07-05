import { Router } from "express";
import { createStoreItem } from "../controllers/storeItem.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = Router();

router.post("/create", protectRoute, createStoreItem);
export default router;
