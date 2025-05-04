import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Head from "next/head";

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
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/android-chrome-192x192.png"
        />
        <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
