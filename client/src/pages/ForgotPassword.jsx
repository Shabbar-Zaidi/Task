import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import GoogleSignin from "../components/GoogleSignin.jsx";
import { forgotPassword, verifyEmail } from "../api/api.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
const ForgotPassword = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(emailAddress);
      console.log("Forgot password response:", res);
      if (res.data.success) {
        toast.success("Password reset link sent successfully!");
        // Redirect to profile or home page
        navigate("/");
      } else {
        toast.error(res.data.message || "Forgot password failed");
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      console.log("Error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#131619] h-screen w-full text-[#9B9C9E]">
      <img className="w-[52px] h-[52px] m-4" src={assets.logo} alt="" />
      <div className="flex flex-col justify-center px-[112px]">
        <h1 className="text-[52px] text-center">
          Add your{" "}
          <span
            className=""
            style={{
              background: "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
            }}
          >
            Email Address
          </span>
        </h1>

        <p className="py-3">Enter your email address and we'll send you a link to reset your password.</p>

        <div className="flex flex-col gap-2 py-5">
          <input
            onChange={(e) => setEmailAddress(e.target.value)}
            type="text"
            name="emailAddress"
            id="emailAddress"
            className="px-4 py-3 text-white placeholder:text-[#9B9C9E] bg-[#1A1D21] rounded-lg"
            placeholder="Enter your email address"
          />
        </div>
        <button onClick={onSubmitHandler} className="bg-[#B6F09C] w-full px-4 py-2 my-4 rounded-lg text-black cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
