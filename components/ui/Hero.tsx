"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animated text component
interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-primary/20 to-gray-900 opacity-90"></div>

      {/* Placeholder for 3D Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-600/30 via-purple-500/30 to-pink-500/30">
        {/* Animated background elements as placeholder */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-2/3 right-1/4 w-40 h-40 bg-indigo-600/20 rounded-full filter blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-pink-600/20 rounded-full filter blur-xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container-custom z-10 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/20 text-primary inline-block">
              Premium Website Templates
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <AnimatedText text="Build Beautiful Websites" />
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              <AnimatedText text="Faster Than Ever" delay={0.5} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
          >
            High-quality, responsive templates and UI components for modern web
            development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/templates"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
            >
              Browse Templates
            </Link>
            <Link
              href="/components"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-md backdrop-blur-sm transition-colors duration-200"
            >
              Explore Components
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <motion.div
        className="absolute hidden md:flex bottom-2 left-1/2 pt-4 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
