import express from "express";
import { getProfile, createProfile, deleteProfile, updateProfile } from "../controllers/profileController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const profileRouter = express.Router();

profileRouter.get("/get", verifyToken, getProfile);
profileRouter.post("/createProfile", verifyToken, createProfile);
profileRouter.put("/update", verifyToken, updateProfile);
profileRouter.delete("/delete", verifyToken, deleteProfile);

export default profileRouter;
