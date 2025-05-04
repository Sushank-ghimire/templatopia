import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex justify-start items-center font-bold text-2xl mb-4">
              <Image
                loading="lazy"
                width={64}
                height={64}
                src={"/Logo.svg"}
                aria-label="Logo"
                alt="Logo"
              />
              Templatopia
            </Link>
            <p className="text-gray-400 mb-6">
              Premium website templates and UI components for modern web
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", url: "/" },
                { name: "Templates", url: "/templates" },
                { name: "Components", url: "/components" },
                { name: "Contact", url: "/contact" },
                { name: "Buy", url: "/buy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                "Landing Pages",
                "Portfolio",
                "E-Commerce",
                "Blogs",
                "Dashboards",
                "UI Components",
              ].map((category) => (
                <li key={category}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new templates and features.
            </p>
            <form className="flex w-full p-2 overflow-hidden md:flex-col md:gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-white border-0 focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Templatopia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
