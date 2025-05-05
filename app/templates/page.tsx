"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import TemplateCard from "@/components/ui/TemplateCard";
import Filter from "@/components/ui/Filter";
import { templates } from "@/lib/data";

// Define filter categories
const categories = [
  { id: "all", name: "All" },
  { id: "landing", name: "Landing Page" },
  { id: "portfolio", name: "Portfolio" },
  { id: "ecommerce", name: "E-Commerce" },
  { id: "blog", name: "Blog" },
  { id: "dashboard", name: "Dashboard" },
];

const sortOptions = [
  { id: "newest", name: "Newest" },
  { id: "popular", name: "Most Popular" },
  { id: "priceAsc", name: "Price: Low to High" },
  { id: "priceDesc", name: "Price: High to Low" },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...templates];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (template) => template.category === selectedCategory
      );
    }

    // Sort templates
    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.downloads - a.downloads);
        break;
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        result.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    setFilteredTemplates(result);
  }, [selectedCategory, sortBy]);

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-4 text-white">Browse Our Templates</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find the perfect starting point for your next project from our
              collection of professionally designed templates.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <div className="mb-12">
          <FadeIn delay={0.1}>
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortOptions={sortOptions}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </FadeIn>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template, idx) => (
              <FadeIn key={template.id} delay={idx * 0.05}>
                <TemplateCard template={template} />
              </FadeIn>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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
                <h3 className="text-xl font-bold mb-2">No templates found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We couldn't find any templates matching your criteria. Try
                  changing your filters.
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
