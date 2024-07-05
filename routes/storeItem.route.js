import { Router } from "express";
import {
  createStoreItem,
  getAllStoreItems,
} from "../controllers/storeItem.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = Router();

router.post("/create", protectRoute, createStoreItem);
router.get("/", protectRoute, getAllStoreItems);
export default router;
