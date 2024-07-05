import { Router } from "express";
import adminRoute from "../middlewares/adminRoute.js";
import { getAllUsers } from "../controllers/adminController.controller.js";
const router = Router();

router.get("/", adminRoute, getAllUsers);
export default router;
