"use client";
import { motion } from "framer-motion";

export default function TemplatesLoading() {
  // Template card skeleton animation
  const skeletonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skeletonItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ width: "30%" }}
            animate={{ width: "60%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md mb-4"
          />
          <motion.div
            initial={{ width: "50%" }}
            animate={{ width: "80%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md"
          />
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="w-48 h-10 bg-gray-200 dark:bg-gray-800 rounded-md" />
          <div className="w-32 h-10 bg-gray-200 dark:bg-gray-800 rounded-md" />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={skeletonVariants}
          initial="hidden"
          animate="visible"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={skeletonItemVariants}
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
                    style={{ backgroundSize: "200% 100%" }}
                  />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 w-5/6" />

                <div className="mt-auto pt-4 flex justify-between items-center">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3" />
                  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
