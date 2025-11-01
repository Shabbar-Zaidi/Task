import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import GoogleSignin from "../components/GoogleSignin.jsx";
import { loginUser, signupUser } from "../api/api.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
import FacebookLogin from "../components/FacebookLogin.jsx";

const Register = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAppContext();

  const onSubmitHandler = async () => {
    try {
      const res = await (isSignup ? signupUser({ name, email, password }) : loginUser({ email, password }));

      if (res.data.success) {
        // localStorage.setItem("token", res.data.token);
        toast.success(isSignup ? "Signup successful!" : "Login successful!");
        console.log("Auth response user:", res.data.user);
        setUser(res.data.user);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // navigate("/verify-email");
      } else {
        toast.error(res.data.message || "Login/Signup failed");
        // alert("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      console.log("Error: ", error);
    }
  };

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
          <p className="py-3">{isSignup ? "Sign up for Artificium to start creating magic." : "Log in to Artificium to start creating magic."}</p>
          <div className="flex flex-col gap-2 py-5">
            {isSignup && (
              <input
                onChange={(e) => setName(e.target.value)}
                type="name"
                name="name"
                id="name"
                className="px-4 py-3 text-white placeholder:text-[#9B9C9E] border border-[#9B9C9E] rounded-lg"
                placeholder="Name"
              />
            )}

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="px-4 py-3 text-white placeholder:text-[#9B9C9E] border border-[#9B9C9E] rounded-lg"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="px-4 py-3 text-white placeholder:text-[#9B9C9E] border border-[#9B9C9E] rounded-lg"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between my-4 items-center text-sm">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p className="flex-1 px-2">Remember me</p>
            {isSignup ? null : (
              <p
                onClick={() => navigate("/forgot-password")}
                className="flex-1 text-right cursor-pointer"
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
            )}
          </div>
          <button onClick={onSubmitHandler} className="bg-[#B6F09C] w-full px-4 py-2 my-4 rounded-lg text-black cursor-pointer">
            {isSignup ? "Sign Up" : "Login"}
          </button>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-3 text-gray-600 text-sm">continue with</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>
          <div className="flex items-center justify-center gap-6  my-4">
            <GoogleSignin />
            <FacebookLogin />
          </div>
        </div>

        {isSignup ? (
          <p className="m-[48px]">
            Already have an account?{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                display: "inline-block",
              }}
              className="cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              Log In
            </span>
          </p>
        ) : (
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
              className="cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
      <img src={assets.abstract} className="h-screen w-1/2" alt="" />
    </div>
  );
};

export default Register;
