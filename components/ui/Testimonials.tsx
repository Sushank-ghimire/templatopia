"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    content:
      "The templates from Templatopia saved me so much time. Clean code and beautiful design right out of the box!",
    rating: 5,
    avatar: "JD",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UX Designer",
    content:
      "As a designer, I appreciate the attention to detail in these templates. They&lsquo;re beautiful and highly customizable.",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Startup Founder",
    content:
      "Launched our company website using a Templatopia template. The process was quick and the result looks professional.",
    rating: 4,
    avatar: "MB",
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Marketing Director",
    content:
      "The templates are not only beautiful but also conversion-focused. Our landing page conversion rate increased by 35%!",
    rating: 5,
    avatar: "EP",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Web Developer",
    content:
      "The code quality is exceptional. Well structured, properly commented, and easy to customize. Saved me days of work.",
    rating: 5,
    avatar: "DW",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden py-10 px-8 sm:px-12">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>

          {/* Quote Icon */}
          <div className="absolute top-8 right-8 text-gray-200 dark:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              fill="currentColor"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full text-center"
              >
                <div className="mb-8">
                  <div className="inline-flex relative">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 dark:text-gray-300">
                      {testimonials[current].avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white mb-6">
                  &ldquo;{testimonials[current].content}&ldquo;
                </p>

                <div className="text-primary font-semibold">
                  {testimonials[current].name}
                </div>

                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonials[current].role}
                </div>

                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < testimonials[current].rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "bg-primary scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
