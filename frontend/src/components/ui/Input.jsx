const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-600 bg-slate-800 text-white rounded-md
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        {...props}
      />
    </div>
  );
};

export default Input;
