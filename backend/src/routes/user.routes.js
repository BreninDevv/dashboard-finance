import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
