import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export const useLogout = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

 const handleLogout = useCallback(async () => {
  try {

    console.log(logout())
    await logout(); 
    navigate("/login", { replace: true });
  } catch (err) {
    setError("Logout failed");
  }
}, [logout, navigate]);


  return { handleLogout };
};
