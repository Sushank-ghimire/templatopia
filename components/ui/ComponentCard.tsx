"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { UIComponent } from "@/lib/data";

interface ComponentCardProps {
  component: UIComponent;
  onCopyCode: (code: string) => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  component,
  onCopyCode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Header */}
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {component.name}
          </h3>
          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded capitalize">
            {component.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {component.description}
        </p>
      </div>

      {/* Component Preview */}
      <div className="p-6 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center min-h-[200px]">
        <div
          className="component-preview"
          dangerouslySetInnerHTML={{ __html: component.code }}
        />
      </div>

      {/* Code Preview */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium text-gray-900 dark:text-white">Code</h4>

          <div className="flex space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {isExpanded ? "Collapse" : "Expand"}
            </button>

            <button
              onClick={() => onCopyCode(component.code)}
              className="text-xs text-primary hover:text-primary-dark transition-colors flex items-center"
            >
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
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy Code
            </button>
          </div>
        </div>

        <div
          className={`bg-gray-900 rounded-md overflow-auto ${
            isExpanded ? "max-h-96" : "max-h-40"
          } transition-all duration-300`}
        >
          <pre className="p-4 text-white text-sm font-mono">
            <code>{component.code}</code>
          </pre>
        </div>
      </div>

      {/* Component Actions */}
      <div className="p-6 pt-0 flex justify-between">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {component.preview}
        </div>

        <button
          onClick={() => onCopyCode(component.code)}
          className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 text-sm whitespace-nowrap"
        >
          Use Component
        </button>
      </div>
    </motion.div>
  );
};

export default ComponentCard;
