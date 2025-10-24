import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const login = async (req, res) => {
  try {
    const { user } = req.body;
    if (!user) return res.status(400).json({ message: "User data missing" });

    let existingUser = await User.findOne({ googleId: user.sub });
    if (!existingUser) {
      existingUser = new User({
        name: user.name,
        email: user.email,
        googleId: user.sub,
        picture: user.picture,
        authProvider: "google",
      });
      await existingUser.save();
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // Send response
    res.status(201).json({ success: true, token, user });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid Google token" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};
