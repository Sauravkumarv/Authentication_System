import { useLogout } from "./useLogout";
import { useAuth } from "../auth/AuthContext";
import { useLogin } from "./useLogin";

const Home = () => {
  const { handleLogout } = useLogout();
  const {user}=useAuth();
  const initial = user?.username?.charAt(0)?.toUpperCase();
// console.log(user)
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600 rounded-full blur-3xl opacity-25 animate-pulse" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
        
        {/* Avatar */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 
                          flex items-center justify-center text-3xl font-bold text-white shadow-lg">
            {initial || "U"}
          </div>
        </div>

        {/* User Info */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            {user?.username || "User"}
          </h1>

          <p className="text-white/60 text-sm mt-1">
            {user?.email}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Message */}
        <p className="text-center text-white/70 text-sm mb-8">
          You’re logged in successfully.  
          Welcome to your dashboard ✨
        </p>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600
                     text-white font-semibold transition-all
                     hover:from-red-600 hover:to-red-700
                     shadow-lg shadow-red-500/30 hover:shadow-red-500/50"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
