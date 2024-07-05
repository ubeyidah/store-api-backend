import { Router } from "express";
import {
  addItem,
  deleteItem,
  updateItem,
  outItem,
} from "../controllers/item.controller.js";
import protectRoute from "../middlewares/protectRoutes.js";
import adminRoute from "../middlewares/adminRoute.js";
const router = Router();

router.post("/add", protectRoute, addItem);
router.delete("/:id", adminRoute, deleteItem);
router.put("/:id", adminRoute, updateItem);
router.put("/out/:id", protectRoute, outItem);

export default router;
