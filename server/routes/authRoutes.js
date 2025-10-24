import express from "express";
import {getProfile, login} from "../controllers/authController.js";
import {verifyToken} from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.get("/profile", verifyToken, getProfile);
authRouter.post("/google", login);

export default authRouter;