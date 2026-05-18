import type { Variants } from "framer-motion";

export const easeOutExpo = [0.19, 1, 0.22, 1] as const;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: easeOutExpo
    }
  }
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.82,
      ease: easeOutExpo
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

export const clipReveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)"
  },
  show: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.92,
      ease: easeOutExpo
    }
  }
};
