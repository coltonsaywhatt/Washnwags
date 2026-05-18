"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "sage" | "ghost" | "cream" | "outlineCream";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<ButtonVariant, string> = {
  sage:
    "bg-[var(--button-bg)] text-[var(--button-fg)] shadow-[0_14px_36px_var(--shadow-color)] hover:bg-[var(--button-hover)]",
  ghost:
    "border border-sage/35 bg-[var(--glass-bg)] text-charcoal hover:border-sage hover:bg-sage/10",
  cream:
    "bg-[var(--glass-strong)] text-sage-dark shadow-[0_14px_36px_var(--shadow-color)] hover:bg-[var(--card-bg)]",
  outlineCream:
    "border border-[var(--strong-section-text)] bg-[var(--glass-bg)] text-[var(--strong-section-text)] hover:bg-[var(--strong-section-text)] hover:text-[var(--strong-section)]"
};

export function Button({
  children,
  href,
  variant = "sage",
  className = "",
  ariaLabel,
  onClick,
  type = "button"
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    variantClasses[variant],
    className
  ].join(" ");

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
  };

  if (href) {
    return (
      <motion.a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick}
      type={type}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
