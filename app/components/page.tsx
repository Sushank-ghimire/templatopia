"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import FadeIn from "@/components/animations/FadeIn";
import ComponentCard from "@/components/ui/ComponentCard";
import { uiComponents } from "@/lib/data";

// Define component categories
const categories = [
  { id: "all", name: "All Components" },
  { id: "buttons", name: "Buttons" },
  { id: "cards", name: "Cards" },
  { id: "forms", name: "Forms" },
  { id: "navigation", name: "Navigation" },
  { id: "modals", name: "Modals & Dialogs" },
  { id: "feedback", name: "Feedback UI" },
];

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredComponents =
    activeCategory === "all"
      ? uiComponents
      : uiComponents.filter(
          (component) => component.category === activeCategory
        );

  const handleCopyCode = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => toast.success("Code copied to clipboard!"))
      .catch(() => toast.error("Failed to copy code"));
  };

  return (
    <div className="py-20 text-white">
      <div className="container-custom">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-4 text-white">UI Components</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modular, reusable UI components to build your website. Copy the
              code and integrate into your projects.
            </p>
          </div>
        </FadeIn>

        {/* Category Navigation */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredComponents.map((component, idx) => (
            <FadeIn key={component.id} delay={idx * 0.05}>
              <ComponentCard
                component={component}
                onCopyCode={handleCopyCode}
              />
            </FadeIn>
          ))}
        </div>

        {/* No results state */}
        {filteredComponents.length === 0 && (
          <div className="text-center py-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2">No components found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We couldn't find any components in this category. Please try
              another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
