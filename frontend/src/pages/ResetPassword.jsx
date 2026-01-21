import { useState } from 'react';

const Input = ({ type = "text", name, placeholder, value, onChange, required }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all backdrop-blur-sm"
  />
);

const ResetPassword = () => {
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setSuccess('');
      return;
    }
    // Simulate API call
    setSuccess('Password reset successfully. Redirecting...');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
            <p className="text-white/60 text-sm">Enter your new password below</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-400 text-sm text-center">{success}</p>
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="block text-white/70 text-sm mb-2 ml-1">New Password</label>
              <Input
                type="password"
                name="password"
                placeholder="Enter new password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-2 ml-1">Confirm Password</label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3.5 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-0.5 mt-6"
            >
              Reset Password
            </button>

            <div className="text-center pt-4">
              <button className="text-purple-400 hover:text-purple-300 transition text-sm font-medium">
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;