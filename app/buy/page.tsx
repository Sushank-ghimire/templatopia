"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import PricingTable from "@/components/ui/PricingTable";
import Testimonials from "@/components/ui/Testimonials";
import { templates } from "@/lib/data";

export default function BuyPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("id");

  const [template, setTemplate] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (templateId) {
      const found = templates.find((t) => t.id === templateId);
      if (found) {
        setTemplate(found);
      }
    } else if (templates.length > 0) {
      // Show the first template if none is specified
      setTemplate(templates[0]);
    }
  }, [templateId]);

  // For carousel
  useEffect(() => {
    if (!template) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === (template.images?.length - 1 || 0) ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [template]);

  if (!template) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-16 w-16 mb-4"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-52 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Template Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-4 text-white">{template.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {template.description}
            </p>
          </div>
        </FadeIn>

        {/* Preview Carousel */}
        <div className="mb-20">
          <FadeIn delay={0.1}>
            <div className="rounded-xl overflow-hidden shadow-2xl relative aspect-video bg-gray-100 dark:bg-gray-800">
              {template.images &&
                template.images.map((image: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentImage === idx ? 1 : 0,
                      zIndex: currentImage === idx ? 10 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image}
                      alt={`${template.name} - Preview ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {template.images &&
                  template.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentImage === idx
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Features */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="heading-2 text-center mb-12 text-white">Template Features</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {template.features &&
              template.features.map((feature: any, idx: number) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <div className="text-primary mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="heading-2 text-center mb-12 text-white">Choose Your License</h2>
          </FadeIn>

          <PricingTable templateName={template.name} price={template.price} />
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="heading-2 text-center mb-12 text-white">
              What Our Customers Say
            </h2>
          </FadeIn>

          <Testimonials />
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <FadeIn>
            <h2 className="heading-2 text-center mb-12 text-white">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the purchase?",
                answer:
                  "When you purchase this template, you'll receive all HTML/CSS/JS files, documentation, and access to future updates. You'll also get 6 months of support to help with any issues.",
              },
              {
                question: "Can I use this for client projects?",
                answer:
                  "Yes, our Standard license allows you to use the template for one end product (your own or a client's). For multiple projects, you'll need the Extended license.",
              },
              {
                question: "Do you offer customization services?",
                answer:
                  "Yes, we offer custom development services for our templates. Please contact us with your requirements for a quote.",
              },
              {
                question: "What if I need help with the template?",
                answer:
                  "We offer 6 months of support with your purchase. You can contact us through our support portal, and we'll help you with any issues related to the template's functionality.",
              },
            ].map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <svg
                        className="transition-transform duration-300 group-open:rotate-180 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <FadeIn>
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Purchase this template now and bring your website to life
                  today.
                </p>
                <button className="bg-white text-primary hover:bg-opacity-90 font-semibold py-3 px-8 rounded-md transition-colors duration-200">
                  Buy Now - ${template.price}
                </button>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
