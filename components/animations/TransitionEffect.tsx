"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface TransitionEffectProps {
  children: ReactNode;
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
};

const TransitionEffect: React.FC<TransitionEffectProps> = ({ children }) => {
  // This is a client component but Next.js Router is no longer available in Next.js 13/14 with App Router
  // We would use the actual router in a real implementation
  // For demonstration purposes, we'll create a simplified version
  const pagePath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pagePath}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants.slideUp}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionEffect;
