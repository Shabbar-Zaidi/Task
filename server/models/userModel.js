import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  facebookId: { type: String, default: "" },
  googleId: { type: String, default: "" },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, default: "" },
  password: { type: String, default: "" },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: Number },
  verificationCodeExpiresAt: { type: Date },
  resetPasswordCode: { type: String },
  resetPasswordExpiresAt: { type: Date },
  authProvider: { type: String, default: "email", enum: ["google", "facebook", "email"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
