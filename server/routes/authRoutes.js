import express from "express";
import passport from "passport";
import { continuewithlogin, loginUser, signupUser, verifyEmail, forgotPassword, resetPassword, checkAuth, resendVerification } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

// auth routes
authRouter.post("/google", continuewithlogin);
authRouter.post("/login", loginUser);
authRouter.post("/signup", signupUser);
authRouter.post("/verify-email", verifyEmail);
authRouter.post("/resend-verification", resendVerification);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password", resetPassword);
authRouter.get("/check-auth", verifyToken, checkAuth);
// authRouter.post("/auth/facebook", continuewithfacebook);
// authRouter.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));
// authRouter.get("/auth/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: "http://localhost:5173/",
//     failureRedirect: "http://localhost:5173/register",
//   })
// )

export default authRouter;
