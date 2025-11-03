import axios from "axios";
import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import { facebookAuth } from "../api/api.js";
import toast from "react-hot-toast";
import { use } from "react";

function FacebookLogin() {
  const { setUser } = useAppContext();
  const login = async () => {
    try {
      const fbLoginWindow = window.open("http://localhost:8080/auth/facebook", "Facebook Login", "width=600,height=700");
      const pollTimer = window.setInterval(() => {
        if (fbLoginWindow.closed) {
          window.clearInterval(pollTimer);
          // If token already persisted by callback handler in main.jsx or the postMessage listener,
          // facebookAuth will be triggered by the message handler. If not, try to read token from localStorage.
          const token = localStorage.getItem("token");
          if (token) {
            facebookAuth(token)
              .then((res) => {
                const userData = res.data.user;
                localStorage.setItem("user", JSON.stringify(userData));
                setUser(userData);
                toast.success("Logged in with Facebook successfully!");
              })
              .catch(() => {
                localStorage.removeItem("token");
                toast.error("Facebook login failed. Please try again.");
              });
          }
        }
      }, 500);
    } catch (error) {
      console.error("Facebook login error:", error);
      toast.error("An error occurred during Facebook login. Please try again.");
    }
  };

  useEffect(() => {
    // URL with token from popup redirect
    try {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (token) {
        // Store token and fetch user data
        localStorage.setItem("token", token);
        facebookAuth(token)
          .then((res) => {
            const userData = res.data.user;
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      }
    } catch (error) {
      console.error("Error parsing URL:", error);
    }
  }, []);

  return (
    <button className="bg-[#1A1D21] text-white px-5 py-2 rounded-lg cursor-pointer" onClick={login}>
      Continue with Facebook
    </button>
  );
}

export default FacebookLogin;
