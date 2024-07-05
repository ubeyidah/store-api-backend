import { Router } from "express";
const router = Router();

router.post("/signup", (req, res) => {
  res.send("signup");
});
router.post("/login", (req, res) => {
  res.send("login");
});
router.post("/logout", (req, res) => {
  res.send("logout");
});

export default router;
