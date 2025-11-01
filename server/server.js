import dotenv from "dotenv";
import express from "express";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import connectDB from "./utils/db.js";
import profileRouter from "./routes/profileRoute.js";
import passport from "passport";
import session from "express-session";
import "./utils/passport.js";

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
// Session setup (required for Passport)
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Facebook Login Route
app.get(`/auth/facebook`, passport.authenticate("facebook", { scope: ["email"] }));

// Callback after Facebook login
app.get("/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "http://localhost:5173/register",
  })
);

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
