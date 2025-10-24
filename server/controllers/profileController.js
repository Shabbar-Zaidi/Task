import User from "../models/userModel.js";
import DeletedUser from "../models/deleteModel.js";
import bcrypt from "bcrypt";

// Create Profile

export const createProfile = async (req, res) => {
  const { firstName, lastName, password, about } = req.body;

  try {
    // determine user id from middleware or token payload
    const userId = req.userId || req.user?.id || req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: missing user in token" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (about !== undefined) user.about = about;

    // Only hash & set password if provided
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    await user.save();

    res.status(200).json({ message: "Profile created successfully", user });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Profile
export const getProfile = async (req, res) => {
  const userId = req.userId || req.user?.id || req.user?._id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  const userId = req.userId;
  const updates = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Profile
export const deleteProfile = async (req, res) => {
  const userId = req.userId || req.user?.id || req.user?._id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized: missing user in token" });
  }
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Upsert into DeletedUser to avoid duplicate key errors on email
    await DeletedUser.updateOne(
      { email: user.email },
      {
        $setOnInsert: {
          googleId: user.googleId,
          name: user.name,
          email: user.email,
          deletedAt: new Date(),
        },
      },
      { upsert: true }
    );

    res.status(200).json({ success: true, message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    // If a duplicate-key slips through, treat as success (already archived)
    if (error?.code === 11000) {
      return res.status(200).json({ success: true, message: "Profile deleted (already archived)" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
