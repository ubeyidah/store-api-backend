import { Router } from "express";
import adminRoute from "../middlewares/adminRoute.js";
import {
  getAllUsers,
  deleteUser,
  verifyUser,
} from "../controllers/adminController.controller.js";
const router = Router();

router.get("/", adminRoute, getAllUsers);
router.delete("/:id", adminRoute, deleteUser);
router.put("/:id", adminRoute, verifyUser);
export default router;
