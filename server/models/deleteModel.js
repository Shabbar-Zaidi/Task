import mongoose from "mongoose";

const deleteSchema = new mongoose.Schema({
  googleId: { type: String, default: "" },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, default: "" },
  password: { type: String, default: "" },
});

const DeletedUser = mongoose.model("DeletedUser", deleteSchema);

export default DeletedUser;
