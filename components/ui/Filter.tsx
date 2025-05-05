"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FilterProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOptions: { id: string; name: string }[];
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOptions,
  sortBy,
  onSortChange,
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-4 rounded-md flex justify-between items-center"
        >
          <span>Filters & Sorting</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isMobileFilterOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Filter Content */}
      <motion.div
        className={`md:flex md:flex-wrap md:justify-between ${
          isMobileFilterOpen ? "block" : "hidden md:flex"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileFilterOpen || windowDimensions.height >= 768 ? 1 : 0,
          height:
            isMobileFilterOpen || windowDimensions.width >= 768 ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Categories */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Sort By
          </h3>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md py-2 px-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </motion.div>
    </div>
  );
};

export default Filter;
