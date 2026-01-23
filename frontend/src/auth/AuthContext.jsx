import { createContext, useContext, useState, useEffect } from "react";
import * as authService from "../services/auth.service.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .checkAuth()
      .then((res) => {
        setIsAuth(true);
        setUser(res.data.user);
      })
      .catch(() => {
        setIsAuth(false);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (data) => {
    const res = await authService.login(data);
    if (res.data?.message === "Login successful") {
      setIsAuth(true);
      setUser(res.data.user);
    }
    return res.data;
  };

  const logout = async () => {
    await authService.logout();
    setIsAuth(false);
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
