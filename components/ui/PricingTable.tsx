"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface PricingTableProps {
  templateName: string;
  price: number;
}

const PricingTable: React.FC<PricingTableProps> = ({ templateName, price }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  // Define pricing plans
  const plans = [
    {
      name: "Personal",
      price: billingCycle === "yearly" ? price : Math.round(price * 1.2),
      description: "Perfect for individuals and personal projects",
      features: [
        "Single end product",
        "Use for personal project",
        "6 months support",
        "Access to updates for 6 months",
        "Basic documentation",
      ],
      recommended: false,
      buttonText: "Get Personal License",
    },
    {
      name: "Developer",
      price: billingCycle === "yearly" ? price * 2 : Math.round(price * 2.4),
      description: "Ideal for freelancers and agencies",
      features: [
        "Multiple end products",
        "Use for client projects",
        "12 months support",
        "Access to updates for 1 year",
        "Premium documentation",
        "Priority email support",
      ],
      recommended: true,
      buttonText: "Get Developer License",
    },
    {
      name: "Enterprise",
      price: billingCycle === "yearly" ? price * 5 : Math.round(price * 6),
      description: "For large teams and organizations",
      features: [
        "Unlimited end products",
        "Use for multiple clients",
        "Lifetime support",
        "Lifetime access to updates",
        "Premium documentation",
        "Priority email support",
        "Custom modifications",
        "Commercial applications",
      ],
      recommended: false,
      buttonText: "Get Enterprise License",
    },
  ];

  return (
    <div>
      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
          <button
            className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-white dark:bg-gray-700 shadow-sm"
                : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
              billingCycle === "yearly"
                ? "bg-white dark:bg-gray-700 shadow-sm"
                : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
            <span className="ml-1 text-xs text-green-500">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md ${
              plan.recommended ? "ring-2 ring-primary" : ""
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-0 right-0 bg-primary text-white text-xs font-bold text-center py-1">
                RECOMMENDED
              </div>
            )}

            <div className="p-6 pt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  /{billingCycle === "yearly" ? "year" : "month"}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-md font-medium text-sm transition-colors duration-200 ${
                  plan.recommended
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* License Information */}
      <div className="mt-12 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          License Information for {templateName}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          All licenses include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Quality Checked",
              description: "Thoroughly tested to ensure high quality",
            },
            {
              title: "Future Updates",
              description: "Access to improvements and new features",
            },
            {
              title: "Technical Support",
              description: "Get help when you need it",
            },
            {
              title: "Documentation",
              description: "Comprehensive guides for setup and customization",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
