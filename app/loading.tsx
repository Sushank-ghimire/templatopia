"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Logo animation variants
  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Circle animation variants
  const circleVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="relative flex flex-col items-center">
        {/* Spinning circles */}
        <div className="absolute">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={circleVariants}
            className="w-32 h-32 rounded-full border-t-4 border-b-4 border-indigo-600"
          />
        </div>

        <div className="absolute">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={circleVariants}
            className="w-24 h-24 rounded-full border-r-4 border-l-4 border-pink-500"
            style={{ animationDirection: "reverse" }}
          />
        </div>

        {/* Logo */}
        <motion.div
          initial="hidden"
          animate={["visible", "pulse"]}
          variants={logoVariants}
          className="relative z-10 flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            T
          </span>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 mt-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading Templatopia...
      </motion.p>
    </div>
  );
}
