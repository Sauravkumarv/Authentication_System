import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import ProtectedRoute from "../auth/ProtectedRoute";
import Login from "../pages/Login"

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/reset-password/:token" element={<ResetPassword />} />

    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
