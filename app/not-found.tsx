"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });


  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate position for elements that follow the mouse
  const calculatePosition = (offsetX = 0, offsetY = 0, intensity = 0.02) => {
    const x = (mousePosition.x - windowDimensions.width / 2) * intensity + offsetX;
    const y = (mousePosition.y - windowDimensions.height / 2) * intensity + offsetY;
    return { x, y };
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] },
    },
  };

  // Particle system for background effect
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Button hover animation
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  // Text glitch effect
  const glitchAnimation = {
    initial: { skew: 0, x: 0 },
    animate: {
      skew: [0, -2, 4, -4, 2, 0],
      x: [0, 2, -2, 4, -4, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-indigo-500 opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Main content container */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 py-12 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glitchy 404 heading */}
        <motion.h1
          className="text-9xl font-extrabold text-white leading-tight mb-6"
          variants={glitchAnimation}
          animate={isHovered ? "animate" : "initial"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            textShadow:
              "0 0 15px rgba(99, 102, 241, 0.6), 0 0 30px rgba(99, 102, 241, 0.4)",
          }}
        >
          404
        </motion.h1>

        {/* Parallax elements that follow mouse */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{
            transform: `translate(${calculatePosition(-20, -15, 0.015).x}px, ${
              calculatePosition(-20, -15, 0.015).y
            }px)`,
          }}
        >
          <div className="absolute left-[10%] top-[20%]">
            <div className="w-24 h-24 rounded-full bg-indigo-500 opacity-10 blur-xl" />
          </div>
          <div className="absolute right-[10%] bottom-[20%]">
            <div className="w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{
            transform: `translate(${calculatePosition(-20, -15, 0.015).x}px, ${
              calculatePosition(-20, -15, 0.015).y
            }px)`,
          }}
        >
          <div className="absolute right-[20%] top-[30%]">
            <div className="w-16 h-16 rounded-full bg-pink-500 opacity-10 blur-xl" />
          </div>
          <div className="absolute left-[25%] bottom-[25%]">
            <div className="w-20 h-20 rounded-full bg-blue-500 opacity-10 blur-xl" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-2xl font-medium text-indigo-200 mb-8"
          variants={itemVariants}
        >
          Oops! It seems the page you&lsquo;re looking for has gone missing in
          the digital void.
        </motion.p>

        <motion.p
          className="text-lg text-indigo-200/80 mb-12"
          variants={itemVariants}
        >
          Perhaps it&lsquo;s being redesigned with our cutting-edge templates or
          it never existed in the first place.
        </motion.p>

        {/* Navigation buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link href="/">
            <motion.button
              className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-xl shadow-indigo-900/30 hover:bg-indigo-700 cursor-pointer transition-colors duration-300 relative overflow-hidden group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Back to Homepage</span>
              <motion.div
                className="absolute inset-0 bg-indigo-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>

          <Link href="/templates">
            <motion.button
              className="px-8 cursor-pointer py-3 rounded-lg bg-transparent text-indigo-300 font-medium border border-indigo-600/50 hover:bg-indigo-900/30 transition-colors duration-300"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Browse Templates
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative shape */}
        <div className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none overflow-hidden h-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-indigo-800"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
