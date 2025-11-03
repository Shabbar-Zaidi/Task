import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./context/AppContext.jsx";

// If the OAuth popup redirected back to the client with a token query param,
// save it to localStorage so the parent window (which polls) can pick it up.
(() => {
  try {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const user = params.get("user");
    if (token) {
      localStorage.setItem("token", token);
      if (user) {
        // If the server encoded a user payload as JSON in the `user` query param,
        // store it safely. Otherwise ignore.
        try {
          localStorage.setItem("user", JSON.stringify(JSON.parse(user)));
        } catch (e) {
          // not JSON — skip
        }
      }

      // Close the popup if this window was opened by another window (oauth popup flow)
      if (window.opener) {
        // optionally notify opener by postMessage in the future
        window.close();
      } else {
        // remove token from the URL to keep things clean
        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        url.searchParams.delete("user");
        window.history.replaceState({}, document.title, url.toString());
      }
    }
  } catch (err) {
    // don't block rendering if something goes wrong
    // console.debug("oauth token handler error", err);
  }
})();

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <div className="dark:bg-white dark:text-black">
          <App />
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </AppContextProvider>
);
