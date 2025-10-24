import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../context/AppContext.jsx";

const CreateProfile = () => {
  const navigate = useNavigate();
  const { profileData, setProfileData } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSaving, setIsSaving] = useState(false);
  const handleSubmit = async () => {
    try {
      if (!formData.firstName || !formData.lastName) {
        alert("Please fill required fields");
        return;
      }
      if (formData.password && formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const token = localStorage.getItem("token");
      console.log("CreateProfile: token present?", !!token);
      if (!token) {
        alert("Please log in to update profile");
        navigate("/login");
        return;
      }

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        about: formData.about,
      };
      if (formData.password) payload.password = formData.password;

      setIsSaving(true);
      let res;
      if (isEditing) {
        // axios.put(url, data, config)
        res = await axios.put("http://localhost:8080/api/profile/update", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // axios.post(url, data, config)
        res = await axios.post("http://localhost:8080/api/profile/createProfile", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      const updatedUser = res.data.user ?? res.data;
      setProfileData(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsSaving(false);
      navigate("/dashboard");
    } catch (err) {
      setIsSaving(false);
      console.error("Save profile error:", err);
      if (err.response?.status === 401) {
        // optional: force re-login
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        alert(err.response?.data?.message || "Failed to save profile");
      }
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (profileData) {
      setFormData({
        firstName: profileData.firstName ?? "",
        lastName: profileData.lastName ?? "",
        password: "",
        confirmPassword: "",
        about: profileData.about ?? "",
      });
      setIsEditing(true);
    }
  }, [profileData]);
  return (
    <div className="flex justify-between bg-[#131619] h-full w-full text-[#9B9C9E]">
      <div className="flex flex-col justify-between h-full w-2/3">
        <div className="flex justify-between items-center">
          <img className="w-[32px] h-[32px] mx-8 my-6" src={assets.logo} alt="" />
        </div>

        <div className="flex flex-col justify-center px-[112px]">
          <h1 className="text-[36px] text-white font-bold">Connect with your team and bring your creative ideas to life.</h1>
          <div className="flex flex-col justify-between my-8 gap-2">
            <div className="flex flex-col gap-4 justify-between md:flex-row">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name</label>
                <input
                  onChange={handleChange}
                  value={formData.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="px-4 py-2 rounded-lg my-2 text-white placeholder:text-[#9B9C9E] bg-[#1A1D21]"
                  placeholder="First Name"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name</label>
                <input
                  onChange={handleChange}
                  value={formData.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="px-4 py-2 rounded-lg my-2 text-white bg-[#1A1D21] placeholder:text-[#9B9C9E]"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-between md:flex-row">
              <div className="flex flex-col w-full">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  value={formData.password}
                  type="password"
                  name="password"
                  id="password"
                  className="px-4 py-2 rounded-lg my-2 text-white placeholder:text-[#9B9C9E] bg-[#1A1D21]"
                  placeholder="Password"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="px-4 py-2 rounded-lg my-2 text-white bg-[#1A1D21] placeholder:text-[#9B9C9E]"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="about">About</label>
              <textarea
                onChange={handleChange}
                name="about"
                id="about"
                value={formData.about}
                className="px-4 py-2 rounded-lg my-2 text-white bg-[#1A1D21] placeholder:text-[#9B9C9E]"
                placeholder="About you...."
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p className="flex-1 px-2">
              I agree with{" "}
              <span
                style={{
                  background: "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                Terms and conditions
              </span>
            </p>
          </div>

          <button onClick={handleSubmit} className="bg-[#B6F09C] w-full px-4 py-2 my-4 rounded-lg text-black" disabled={isSaving}>
            {isSaving ? (isEditing ? "Saving..." : "Creating...") : isEditing ? "Save changes" : "Create free account"}
          </button>
        </div>
        <div className="flex justify-between items-center m-4">
          <p>Artificium.app © 2023</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <img src={assets.Illustration} className="h-full w-1/3" alt="" />
    </div>
  );
};

export default CreateProfile;
