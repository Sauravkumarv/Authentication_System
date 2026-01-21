import { useState, useCallback } from "react";
import { useAuth } from "../auth/AuthContext"
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { login } = useAuth(); // 🔥 CONTEXT LOGIN

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const navigate = useNavigate();

  const handleEmailChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, password: e.target.value }));
  }, []);

  // 🔥 YAHI MAIN FIX HAI
 const handleSubmit = useCallback(
  async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("Email and password required");
      return;
    }

    try {
      setLoading(true);

      const res = await login(form);
      console.log("LOGIN RESPONSE 👉", res);

      if (res?.message === "Login successful") {
        setForm({ email: "", password: "" }); // ✅ form clear
        navigate("/", { replace: true });     // ✅ redirect
      }

    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  },
  [form, login, navigate]
);


  const handleSocialLogin = useCallback((provider) => {
    console.log(`${provider} login coming soon`);
  }, []);

  return {
    form,
    loading,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleSocialLogin,
  };
};
