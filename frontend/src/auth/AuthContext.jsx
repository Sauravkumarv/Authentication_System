import { createContext, useContext, useState, useEffect } from "react";
import * as authService from "../services/uth.service.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  // app reload pe token check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
  }, []);

  const login = async (data) => {
    const res = await authService.login(data);

    // axios => res.data
    const result = res.data;

    if (result?.message === "Login successful") {
    setIsAuth(true); // 🔥 cookie already browser me hai
  }

  return result;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
