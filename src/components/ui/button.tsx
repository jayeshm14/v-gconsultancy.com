"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "outline-dark" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
      default:
        "bg-brand-gold text-brand-dark font-bold hover:bg-[#e7b26b] shadow-sm",
      outline:
        "border border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-dark font-semibold",
      "outline-dark":
        "border border-brand-ink/25 text-brand-ink bg-white hover:border-brand-bronze hover:bg-brand-light font-semibold",
      ghost: "text-brand-muted hover:text-brand-ink hover:bg-brand-light",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      default: "min-h-[44px] px-5 py-2.5 text-sm",
      sm: "min-h-[38px] px-3.5 py-1.5 text-xs",
      lg: "min-h-[48px] px-7 py-3 text-base",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
