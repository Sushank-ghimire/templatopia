import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Templatopia - Premium Website Templates",
  description:
    "Find the perfect website template for your next project. High-quality templates and UI components for modern web development.",
  openGraph: {
    title: "Templatopia - Premium Website Templates",
    description:
      "Find the perfect website template for your next project. High-quality templates and UI components for modern web development.",
    url: "https://templatopia.ghimiresushank.com.np",
    siteName: "Templatopia",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Templatopia - Premium Website Templates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Templatopia - Premium Website Templates",
    description:
      "Find the perfect website template for your next project. High-quality templates and UI components for modern web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden`}
      >
        <NextTopLoader color="#6366F1" height={3} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
