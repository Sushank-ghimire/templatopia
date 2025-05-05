"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";
import FadeIn from "@/components/animations/FadeIn";
import TemplateCard from "@/components/ui/TemplateCard";
import { templates } from "@/lib/data";

export default function HomePage() {
  // Calculate viewport height for mobile browsers
  useEffect(() => {
    if (typeof window === "undefined") return;
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <FadeIn>
            <h2 className="heading-2 text-white text-center mb-12">
              Why Choose Templatopia?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Premium Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Handcrafted templates with attention to detail and modern
                  design trends.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Fast & Responsive
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized for speed and perfect display on all devices and
                  screen sizes.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Easy Customization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Clean, well-documented code that makes customization a breeze.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <FadeIn>
              <h2 className="heading-2 mb-4 md:mb-0 text-white">
                Featured Templates
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/templates" className="btn-primary">
                View All Templates
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.slice(0, 6).map((template, idx) => (
              <FadeIn key={template.id} delay={idx * 0.1}>
                <TemplateCard template={template} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to create your dream website?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Browse our collection of premium templates and start building
                today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/templates"
                  className="bg-white text-primary hover:bg-opacity-90 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Browse Templates
                </Link>
                <Link
                  href="/components"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Explore Components
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn>
            <h2 className="heading-2 text-center mb-12 text-white">
              What Our Customers Say
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                        J
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">John Doe</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  &ldquo;The templates from Templatopia saved me so much time.
                  Clean code and beautiful design right out of the box!&ldquo;
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                        S
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      UX Designer
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  &ldquo;As a designer, I appreciate the attention to detail in
                  these templates. They&lsquo;re beautiful and highly
                  customizable.&ldquo;
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                        M
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Michael Brown</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Startup Founder
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  &ldquo;Launched our company website using a Templatopia
                  template. The process was quick and the result looks
                  professional.&ldquo;
                </p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < 4
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
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
