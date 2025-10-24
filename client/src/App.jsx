import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import CreateProfile from "./pages/CreateProfile";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/profile" replace /> : <Login />} />

      <Route path="/create-profile" element={user ? <CreateProfile /> : <Navigate to="/" replace />} />

      <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
