import React from "react";
import { assets } from "../assets/assets.js";
import GoogleSignin from "../components/GoogleSignin.jsx";
const Login = () => {
  return (
    <div className="flex justify-between bg-[#131619] h-full w-full text-[#9B9C9E]">
      <div className="flex flex-col justify-between h-full w-1/2">
        <img className="w-[32px] h-[32px] m-[48px]" src={assets.logo} alt="" />
        <div className="flex flex-col justify-center px-[112px]">
          <h1 className="text-[36px]">
            Let's get{" "}
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
              creative!
            </span>
          </h1>
          <p className="py-3">Log in to Artificium to start creating magic.</p>
          <div className="flex flex-col gap-2 py-5">
            <input type="email" name="email" id="email" className="px-4 py-3 text-[#363A3D] placeholder:text-[#9B9C9E]" placeholder="Email" />
            <input type="password" name="password" id="password" className="px-4 py-3 text-[#363A3D] placeholder:text-[#9B9C9E] " placeholder="Password" />
          </div>
          <div className="flex justify-between my-8">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p className="flex-1 px-2">Remember me</p>
            <p
              className="flex-1 text-right"
              style={{
                background: "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <button className="bg-[#B6F09C] w-full px-4 py-2 my-4 rounded-lg text-black">Login</button>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-3 text-gray-600 text-sm">continue with</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>
          <div className="flex items-center justify-center gap-6  my-4">
            <GoogleSignin />
            <button className="bg-[#1A1D21] text-white px-5 py-2 rounded-lg">Apple Account</button>
          </div>
        </div>
        <p className="m-[48px]">
          Don’t have an account?{" "}
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
            Sign Up
          </span>
        </p>
      </div>
      <img src={assets.abstract} className="h-screen w-1/2" alt="" />
    </div>
  );
};

export default Login;
