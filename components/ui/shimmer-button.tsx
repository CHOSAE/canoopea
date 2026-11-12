import React from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(({ children, className, shimmerColor = "rgba(255, 255, 255, 0.4)", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl",
        className
      )}
      {...props}
    >
      {/* Animated shimmer sweep */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
});

ShimmerButton.displayName = "ShimmerButton";
export default ShimmerButton;
