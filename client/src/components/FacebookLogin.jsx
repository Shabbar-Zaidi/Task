import axios from "axios";
import React from "react";
import { useAppContext } from "../context/AppContext.jsx";
import { facebookAuth } from "../api/api.js";
import toast from "react-hot-toast";

function FacebookLogin() {
  const { setUser } = useAppContext();
  const login = async () => {
    try {
      // const res = await facebookAuth();
      // if (res.data.success) {
      //     setUser(res.data.user);
      //     localStorage.setItem("user", JSON.stringify(res.data.user));
      //     toast.success("Facebook login successful!");
      // }
      window.location.href = "http://localhost:8080/auth/facebook";
    } catch (error) {
      console.error("Facebook login error:", error);
      toast.error("Facebook login failed. Please try again.");
    }
  };

  return (
    <button className="bg-[#1A1D21] text-white px-5 py-2 rounded-lg cursor-pointer" onClick={login}>
      Continue with Facebook
    </button>
  );
}

export default FacebookLogin;
