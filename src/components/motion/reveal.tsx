"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Delay before the animation starts, in seconds. */
  delay?: number;
  /** Vertical offset to animate from, in pixels. */
  y?: number;
}

/**
 * Lightweight scroll-reveal wrapper: content gently fades and slides up the
 * first time it enters the viewport. Animation is disabled automatically for
 * users who prefer reduced motion.
 */
export function Reveal({ children, delay = 0, y = 16, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
