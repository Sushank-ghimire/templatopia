"use client";
import { ReactNode, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fade" | "slide" | "scale" | "rotate" | "flip";
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  withOverflow?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = "fade",
  direction = "up",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
  withOverflow = false,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  // Get animation variants based on selected animation type
  const getVariants = (): Variants => {
    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay, ease: "easeOut" },
          },
        };
      case "slide":
        let initial = {};
        switch (direction) {
          case "up":
            initial = { y: 50 };
            break;
          case "down":
            initial = { y: -50 };
            break;
          case "left":
            initial = { x: 50 };
            break;
          case "right":
            initial = { x: -50 };
            break;
        }
        return {
          hidden: { opacity: 0, ...initial },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration, delay, ease: "easeOut" },
          },
        };
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: direction === "left" ? -10 : 10 },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        };
      case "flip":
        return {
          hidden: {
            opacity: 0,
            rotateX: direction === "up" || direction === "down" ? 90 : 0,
            rotateY: direction === "left" || direction === "right" ? 90 : 0,
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transition: { duration, delay, ease: "easeOut" },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay, ease: "easeOut" },
          },
        };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={`${withOverflow ? "overflow-hidden" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
