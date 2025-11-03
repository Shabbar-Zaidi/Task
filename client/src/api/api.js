import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const headersWithAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("No token present - cannot delete profile");
    return;
  }
  return { headers: { Authorization: `Bearer ${token}` } };
};

// Authentication APIs
export const loginUser = (credentials) => api.post("/auth/login", credentials);
export const signupUser = (userData) => api.post("/auth/signup", userData);
export const verifyEmail = (verificationCode) => api.post("/auth/verify-email", { verificationCode });
export const forgotPassword = (email) => api.post("/auth/forgot-password", { email });
export const resetPassword = (token, password) => api.post("/auth/reset-password", { token, password });
export const googleAuth = (userData) => api.post("/auth/google", userData);
export const facebookAuth = (token) => api.get("/auth/facebook", { headers: { Authorization: `Bearer ${token}` } });

// Profile APIs
export const getProfile = (userId) => api.get(`/profile/get`, headersWithAuth());
export const createProfile = (profileData) => api.post("/profile/create", headersWithAuth(), profileData);
export const updateProfile = (profileData) => api.put("/profile/update", headersWithAuth(), profileData);
export const deleteProfile = (userId) => api.delete(`/profile/delete`, headersWithAuth());

export default api;
