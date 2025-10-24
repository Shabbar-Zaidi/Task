import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import connectDB from "./utils/db.js";
import profileRouter from "./routes/profileRoute.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
connectDB();

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
