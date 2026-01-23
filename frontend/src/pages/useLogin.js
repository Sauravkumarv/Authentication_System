import { useState, useCallback } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const {login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
    setError(null);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, password: e.target.value }));
    setError(null);
  }, []);

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
        console.log("LOGIN RESPONSE", res);

        if (res?.message === "Login successful") {
          setForm({ email: "", password: "" });
          navigate("/", { replace: true });
        }
      } catch (err) {
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError("Server not responding. Try again later.");
        }
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
