"use client";
import { ReactNode, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  from?: "bottom" | "left" | "right" | "top";
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  from = "bottom",
  distance = 20,
  className = "",
  once = true,
  threshold = 0.1,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  // Define animation variants
  const getVariants = (): Variants => {
    let hidden: { opacity: number; y?: number; x?: number } = { opacity: 0 };

    // Add direction-based translation
    switch (from) {
      case "bottom":
        hidden = { ...hidden, y: distance };
        break;
      case "top":
        hidden = { ...hidden, y: -distance };
        break;
      case "left":
        hidden = { ...hidden, x: -distance };
        break;
      case "right":
        hidden = { ...hidden, x: distance };
        break;
    }

    return {
      hidden,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth easing
        },
      },
    };
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
