"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Template } from "@/types";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden relative"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={template.image}
            alt={template.name}
            fill
            className="object-cover transition-transform duration-700 ease-in-out"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />

          {/* Overlay with Actions */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <span className="text-white text-sm font-semibold bg-primary/80 px-2 py-1 rounded">
                ${template.price}
              </span>
            </div>
            <Link
              href={`/buy?id=${template.id}`}
              className="bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {template.name}
          </h3>
          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded capitalize">
            {template.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer with Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {template.downloads} downloads
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-xs">
            {new Date(template.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
