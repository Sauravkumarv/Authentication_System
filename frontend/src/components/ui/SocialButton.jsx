import { memo } from "react";

const SocialButton = memo(({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
    >
      <Icon />
      <span className="text-white/70 group-hover:text-white transition font-medium">
        {label}
      </span>
    </button>
  );
});

SocialButton.displayName = "SocialButton";

export default SocialButton;
