import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    console.log("Signup attempt:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* LEFT SECTION */}
        <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 flex flex-col justify-center overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full backdrop-blur-md"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-md rotate-12"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="inline-block">
              <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white leading-tight">
              Join Us<br />Today
            </h1>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Create your account and start your journey with us. Unlock exclusive features and be part of our community.
            </p>

            <div className="flex gap-3 pt-6">
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <div className="w-12 h-1 bg-white/50 rounded-full"></div>
              <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-xl p-12 flex flex-col justify-center">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-white/60">
              Sign up to get started with your account
            </p>
          </div>

          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <div className="flex items-start gap-2 pt-1">
              <input 
                type="checkbox" 
                className="w-4 h-4 mt-1 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-0" 
              />
              <label className="text-sm text-white/70">
                I agree to the{" "}
                <button className="text-purple-400 hover:text-purple-300 transition font-medium">
                  Terms of Service
                </button>
                {" "}and{" "}
                <button className="text-purple-400 hover:text-purple-300 transition font-medium">
                  Privacy Policy
                </button>
              </label>
            </div>

            <button
              onClick={submit}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3.5 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-0.5"
            >
              Create Account
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-white/40 bg-slate-900/90">or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => console.log('Google signup')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white/70 group-hover:text-white transition font-medium">Google</span>
              </button>
              
              <button
                onClick={() => console.log('GitHub signup')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white/70 group-hover:text-white transition font-medium">GitHub</span>
              </button>
            </div>

            <p className="text-center text-white/60 text-sm pt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-400 hover:text-purple-300 transition font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;