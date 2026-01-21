import { memo } from "react";

export const BackgroundBlobs = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse [animation-delay:2s]" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse [animation-delay:4s]" />
    </div>
  );
});

BackgroundBlobs.displayName = "BackgroundBlobs";


export const FloatingElements = memo(() => {
  return (
    <>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full backdrop-blur-md" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-md rotate-12" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md" />
    </>
  );
});

FloatingElements.displayName = "FloatingElements";


export const GridPattern = memo(() => {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
});

GridPattern.displayName = "GridPattern";




