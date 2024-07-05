import { Router } from "express";
import {
  createStoreItem,
  getAllStoreItems,
  updateStoreItem,
} from "../controllers/storeItem.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";
import adminRoute from "../middlewares/adminRoute.js";

const router = Router();

router.get("/", protectRoute, getAllStoreItems);
router.post("/create", protectRoute, createStoreItem);
router.put("/:id", adminRoute, updateStoreItem);
export default router;
