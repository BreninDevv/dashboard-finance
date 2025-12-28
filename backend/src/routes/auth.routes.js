import { Router } from "express";
import {
  login,
  register,
  checkEmail,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check-email", checkEmail);
router.patch("/reset-password", resetPassword);

export default router;
