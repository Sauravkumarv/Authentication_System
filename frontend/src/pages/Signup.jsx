import { Link } from "react-router-dom";
import { useSignup } from "./useSignup";

const Input = ({ label, type = "text", placeholder, onChange, value, required }) => (
  <div className="relative">
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all backdrop-blur-sm"
    />
    <label className="absolute -top-2 left-3 px-2 bg-gradient-to-r from-violet-600 to-purple-600 text-xs text-white/90 rounded">
      {label}
    </label>
  </div>
);

const Signup = () => {
  const {
    form,
    loading,
    error,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleGoogleSignup,
    handleGithubSignup,
  } = useSignup();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white">Join Us Today</h1>
          <p className="text-white/80 mt-4">
            Create your account and start your journey with us.
          </p>
        </div>

        {/* RIGHT */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/90 p-12 flex flex-col gap-5"
          noValidate   
        >
          <h2 className="text-3xl font-bold text-white">Create Account</h2>

          <Input
            label="Full Name"
            placeholder="John Doe"
            value={form.username}
            onChange={handleNameChange}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleEmailChange}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handlePasswordChange}
            required
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 py-3 rounded-xl text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10"
            >
              Google
            </button>

            <button
              type="button"
              onClick={handleGithubSignup}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10"
            >
              GitHub
            </button>
          </div>

          <p className="text-center text-white/60 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 font-semibold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
