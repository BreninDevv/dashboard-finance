import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import * as userDataController from "../controllers/userData.controller.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

router.get("/user-data", authMiddleware, userDataController.getUserData);

router.get("/todos", authMiddleware, userDataController.getTodos);
router.post("/todos", authMiddleware, userDataController.createTodo);
router.delete("/todos/:id", authMiddleware, userDataController.deleteTodo);

router.post("/desires", authMiddleware, userDataController.createDesire);
router.patch("/desires/:id", authMiddleware, userDataController.updateDesire);
router.delete("/desires/:id", authMiddleware, userDataController.deleteDesire);

export default router;
