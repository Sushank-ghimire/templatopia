"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-4 text-white">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our templates or need custom work? We&lsquo;re here
              to help.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <FadeIn delay={0.1}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact Info & Map */}
          <FadeIn delay={0.2}>
            <div className="space-y-10">
              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        contact@ghimiresushank.com.np
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        We&lsquo;ll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Hours
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 9AM - 5PM EST
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Closed on weekends and holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "Twitter",
                      icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                      href: "https://x.com/ghimire_sushank",
                    },
                    {
                      name: "Instagram",
                      icon: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01",
                      href: "https://www.instagram.com/ghimiresushank/",
                    },
                    {
                      name: "GitHub",
                      icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
                      href: "https://github.com/Sushank-ghimire",
                    },
                    {
                      name: "LinkedIn",
                      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                      href: "https://www.linkedin.com/in/sushank-ghimire-aba6ba303/",
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      target="_blank"
                    >
                      <svg
                        className="text-gray-600 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={social.icon}></path>
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4305785469824!2d85.38288997405162!3d27.673083927004402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b44a92eca23%3A0x48715f277c02f6d5!2sNaya%20Thimi%20Micro%20Bus%20Stand!5e0!3m2!1sen!2snp!4v1746348315657!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Map location"
                  ></iframe>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
