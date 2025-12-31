import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { connectDb } from "./database/connect.js";
import transactionRoutes from "./routes/transaction.routes.js";
import {
  getTodos,
  createTodo,
  deleteTodo,
  getDesires,
  createDesire,
  getUserData,
} from "./controllers/userData.controller.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import userRoutes from "../src/routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use("/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/api/user-data", authMiddleware, getUserData);

app.get("/api/todos", authMiddleware, getTodos);
app.post("/api/todos", authMiddleware, createTodo);
app.delete("/api/todos/:id", authMiddleware, deleteTodo);

app.get("/api/desires", authMiddleware, getDesires);
app.post("/api/desires", authMiddleware, createDesire);

app.use("/api", userRoutes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3333}...`);
});
