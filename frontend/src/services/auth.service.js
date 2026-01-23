import api from "../api/axiosInstance";

export const signup = (data) => api.post("/signup", data);
export const login = (data) => api.post("/signin", data);
export const logout = () => api.post("/logout");
export const checkAuth = () => api.get("/me");
export const forgotPassword = (data) => api.post("/forgot-password", data);
export const resetPassword = (token, data) =>
  api.post(`/reset-password/${token}`, data);
