import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();

  // 👇 token present hai but state update pending hai
  const token = localStorage.getItem("token");

  if (!isAuth && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
