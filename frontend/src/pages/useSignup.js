import { useState, useCallback } from "react";
import { signup } from "../services/auth.service";

export const useSignup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNameChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, username: e.target.value }));
    setError(null);
  }, []);

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

      if (!form.username || !form.email || !form.password) {
        setError("All fields are required");
        return;
      }

      try {
         setLoading(true);

        const res = await signup(form);
        console.log("LOGIN RESPONSE", res);

        if (res?.message === "User registered successfully") {
          setForm({username:" ", email: "", password: "" });
          navigate("/login", { replace: true });
        }
      } catch (err) {
       if (err.response) {
          const data = err.response.data;

          if (data?.message) {
            setError(data.message); 
          } 
        } else if (err.request) {
          setError("Server not responding. Try again later.");
        }
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  const handleGoogleSignup = useCallback(() => {
    console.log("Google signup coming soon");
  }, []);

  const handleGithubSignup = useCallback(() => {
    console.log("GitHub signup coming soon");
  }, []);

  return {
    form,
    loading,
    error,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleGoogleSignup,
    handleGithubSignup,
  };
};
