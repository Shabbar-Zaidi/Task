import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import GoogleSignin from "../components/GoogleSignin.jsx";
import { forgotPassword, resetPassword, verifyEmail } from "../api/api.js";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  React.useEffect(() => {
    console.log("ResetPassword page token param:", token);
  }, [token]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!token) {
      toast.error("Reset token missing from URL");
      console.error("ResetPassword: missing token in URL params");
      return;
    }

    try {
      const res = await resetPassword(token, password);
      console.log("Reset password response:", res);

      if (res.data.success) {
        toast.success("Password reset successfully, redirecting to login page...");
        setTimeout(() => {
          navigate("/register");
        }, 2000);
      } else {
        toast.error(res.data.message || "Reset password failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      console.log("Error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#131619] h-screen w-full text-[#9B9C9E]">
      <img className="w-[52px] h-[52px] m-4" src={assets.logo} alt="" />
      <div className="flex flex-col justify-center px-[112px]">
        <h1 className="text-[52px] text-center">
          Reset{" "}
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
            Password
          </span>
        </h1>

        <p className="py-3 text-center">Enter your new password.</p>

        <div className="flex flex-col gap-2 py-5">
          <input
            className="px-4 py-3 text-white placeholder:text-[#9B9C9E] bg-[#1A1D21] rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="px-4 py-3 text-white placeholder:text-[#9B9C9E] bg-[#1A1D21] rounded-lg"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={onSubmitHandler} className="bg-[#B6F09C] w-full px-4 py-2 my-4 rounded-lg text-black cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
