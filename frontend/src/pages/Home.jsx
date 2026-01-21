const Home = () => {
  const logout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-3 text-white text-center">
          Welcome Back!
        </h1>

        <p className="text-white/60 mb-8 text-center">
          You're successfully logged in and ready to explore.
        </p>

        <button
          onClick={logout}
          className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transform hover:-translate-y-0.5"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;