import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { connectDb } from "./database/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use("/auth", authRoutes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Servidor rodando...");
});
