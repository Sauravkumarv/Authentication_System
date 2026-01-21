import { Link } from "react-router-dom";

import { useLogin } from "./useLogin";
import { GoogleIcon, GitHubIcon, LightningIcon } from "../components/ui/Icons";
import SocialButton from "../components/ui/SocialButton";
import { BackgroundBlobs, FloatingElements, GridPattern } from "../components/ui/Decorations";
import Input from "../components/ui/Input";

const Login = ({error,loading}) => {
  const {
    form,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleSocialLogin,
  } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <BackgroundBlobs />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-12 flex flex-col justify-center relative">
          <FloatingElements />
          <LightningIcon />
          <h1 className="text-5xl font-bold text-white mt-6">Welcome Back</h1>
          <GridPattern />
        </div>

        {/* RIGHT */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/90 p-12 flex flex-col justify-center gap-5"
        >
          <h2 className="text-3xl font-bold text-white">Sign In</h2>

          <Input
            label="Email"
            value={form.email}
            onChange={handleEmailChange}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={handlePasswordChange}
            placeholder="••••••••"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 py-3 rounded-xl text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>


          <div className="grid grid-cols-2 gap-3">
            <SocialButton
              icon={GoogleIcon}
              label="Google"
              onClick={() => handleSocialLogin("Google")}
            />
            <SocialButton
              icon={GitHubIcon}
              label="GitHub"
              onClick={() => handleSocialLogin("GitHub")}
            />
          </div>

          <p className="text-center text-white/60 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-400 font-semibold">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;


