import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, default: "" },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  password: { type: String, default: "" },
  about: { type: String, default: "" },
  authProvider: { type: String, default: "local", enum: ["google", "apple", "local"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;
