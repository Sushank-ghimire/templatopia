// Template data
export interface Template {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  images: string[];
  downloads: number;
  date: string;
  features: { title: string; description: string }[];
}

export const templates: Template[] = [
  {
    id: "aurora-landing",
    name: "Aurora Landing Page",
    description:
      "Modern landing page template with sleek animations and clean design",
    price: 49,
    category: "landing",
    tags: ["landing", "business", "startup"],
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    images: [
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
    ],
    downloads: 1245,
    date: "2023-08-15",
    features: [
      {
        title: "Responsive Design",
        description: "Looks great on all devices from mobile to desktop",
      },
      {
        title: "Modern Animations",
        description: "Smooth scrolling effects and animated components",
      },
      {
        title: "SEO Optimized",
        description: "Built with best practices for search engine visibility",
      },
      {
        title: "Fast Loading",
        description: "Optimized for quick loading times",
      },
      {
        title: "Easy Customization",
        description: "Well-structured code for simple modifications",
      },
      {
        title: "Browser Compatible",
        description: "Works perfectly on all modern browsers",
      },
    ],
  },
  {
    id: "nova-portfolio",
    name: "Nova Portfolio",
    description: "Showcase your work with this elegant portfolio template",
    price: 39,
    category: "portfolio",
    tags: ["portfolio", "creative", "designer"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1487700160041-babef9c3cb55",
    ],
    downloads: 986,
    date: "2023-09-22",
    features: [
      {
        title: "Project Showcase",
        description: "Beautiful layouts to display your work",
      },
      {
        title: "Filtering System",
        description: "Filter projects by category for easy navigation",
      },
      {
        title: "Lightbox Gallery",
        description: "View project images in a beautiful lightbox",
      },
      {
        title: "Contact Form",
        description: "Built-in form for potential clients to reach you",
      },
      {
        title: "Blog Ready",
        description: "Integrated blog section for your thoughts and insights",
      },
      {
        title: "Social Media Integration",
        description: "Connect all your social profiles easily",
      },
    ],
  },
  {
    id: "pulse-ecommerce",
    name: "Pulse eCommerce",
    description: "Complete eCommerce solution with modern shopping experience",
    price: 59,
    category: "ecommerce",
    tags: ["ecommerce", "shop", "business"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
    ],
    downloads: 1572,
    date: "2023-05-11",
    features: [
      {
        title: "Product Catalog",
        description: "Beautifully designed product listings",
      },
      {
        title: "Shopping Cart",
        description: "Smooth shopping cart experience",
      },
      {
        title: "Checkout Process",
        description: "Streamlined checkout with multiple payment options",
      },
      {
        title: "User Accounts",
        description: "User registration and account management",
      },
      {
        title: "Order Tracking",
        description: "Customers can track their orders",
      },
      {
        title: "Product Reviews",
        description: "Review system for customer feedback",
      },
    ],
  },
  {
    id: "zenith-blog",
    name: "Zenith Blog",
    description: "Minimalist blog template focused on readability and content",
    price: 35,
    category: "blog",
    tags: ["blog", "minimal", "content"],
    image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55",
    images: [
      "https://images.unsplash.com/photo-1487700160041-babef9c3cb55",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    ],
    downloads: 847,
    date: "2023-10-05",
    features: [
      {
        title: "Reading Experience",
        description: "Designed for optimal readability",
      },
      {
        title: "Categories & Tags",
        description: "Organize content with taxonomies",
      },
      {
        title: "Author Profiles",
        description: "Showcase your writers with detailed profiles",
      },
      {
        title: "Related Posts",
        description: "Smart suggestions for further reading",
      },
      {
        title: "Newsletter Integration",
        description: "Built-in subscription forms",
      },
      {
        title: "Social Sharing",
        description: "Make your content easily shareable",
      },
    ],
  },
  {
    id: "atlas-dashboard",
    name: "Atlas Dashboard",
    description: "Admin dashboard with modern UI and comprehensive components",
    price: 69,
    category: "dashboard",
    tags: ["admin", "dashboard", "application"],
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
    images: [
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
      "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
    ],
    downloads: 1089,
    date: "2023-07-03",
    features: [
      {
        title: "Interactive Charts",
        description: "Visualize data with beautiful charts",
      },
      {
        title: "Data Tables",
        description: "Powerful tables with sorting and filtering",
      },
      {
        title: "User Management",
        description: "Comprehensive user administration",
      },
      {
        title: "Dark/Light Mode",
        description: "Switch between dark and light themes",
      },
      {
        title: "Form Components",
        description: "Extensive collection of form elements",
      },
      {
        title: "Notification System",
        description: "Real-time notification functionality",
      },
    ],
  },
  {
    id: "luna-restaurant",
    name: "Luna Restaurant",
    description: "Elegant template for restaurants and food businesses",
    price: 45,
    category: "landing",
    tags: ["restaurant", "food", "business"],
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
    images: [
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    ],
    downloads: 762,
    date: "2023-11-18",
    features: [
      {
        title: "Menu Display",
        description: "Beautiful layouts for food menus",
      },
      {
        title: "Reservation System",
        description: "Online table booking functionality",
      },
      { title: "Gallery", description: "Showcase your venue and dishes" },
      {
        title: "Customer Reviews",
        description: "Testimonials section for customer feedback",
      },
      {
        title: "Special Events",
        description: "Promote special events and offers",
      },
      {
        title: "Contact Information",
        description: "Clear display of location and hours",
      },
    ],
  },
  {
    id: "minimalist-portfolio",
    name: "Minimalist Portfolio",
    description: "Clean and minimal portfolio for creatives",
    price: 35,
    category: "portfolio",
    tags: ["minimal", "portfolio", "creative"],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    ],
    downloads: 584,
    date: "2023-12-02",
    features: [
      {
        title: "Minimal Interface",
        description: "Clean design that puts your work first",
      },
      {
        title: "Project Showcase",
        description: "Beautiful project presentation layouts",
      },
      {
        title: "About Section",
        description: "Tell your story and showcase skills",
      },
      {
        title: "Resume Integration",
        description: "Display your experience and education",
      },
      {
        title: "Contact Form",
        description: "Simple form for potential clients",
      },
      { title: "Fast Loading", description: "Optimized for quick performance" },
    ],
  },
  {
    id: "fresh-blog",
    name: "Fresh Blog",
    description: "Modern and clean blog template with great typography",
    price: 29,
    category: "blog",
    tags: ["blog", "modern", "minimal"],
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
    images: [
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    ],
    downloads: 429,
    date: "2024-01-15",
    features: [
      {
        title: "Typography Focus",
        description: "Beautiful typography for great readability",
      },
      { title: "Grid Layout", description: "Modern grid layout for posts" },
      { title: "Categories", description: "Organize posts by categories" },
      {
        title: "Search Functionality",
        description: "Search through all content",
      },
      { title: "Related Posts", description: "Smart post recommendations" },
      {
        title: "Comment System",
        description: "Engaging comment system for readers",
      },
    ],
  },
  {
    id: "horizon-saas",
    name: "Horizon SaaS",
    description: "Perfect template for SaaS and software products",
    price: 59,
    category: "landing",
    tags: ["saas", "software", "business"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
    ],
    downloads: 913,
    date: "2023-06-22",
    features: [
      {
        title: "Feature Showcase",
        description: "Highlight your product features",
      },
      { title: "Pricing Tables", description: "Clear pricing plans display" },
      {
        title: "Testimonials",
        description: "Show customer feedback and success stories",
      },
      { title: "FAQ Section", description: "Address common questions" },
      {
        title: "Newsletter Integration",
        description: "Collect leads with signup forms",
      },
      { title: "Demo Request", description: "Form for demo or trial requests" },
    ],
  },
  {
    id: "artistry-creative",
    name: "Artistry Creative",
    description: "Bold and creative template for artists and designers",
    price: 45,
    category: "portfolio",
    tags: ["creative", "art", "design"],
    image: "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0",
    images: [
      "https://images.unsplash.com/photo-1448318440207-ef1893eb8ac0",
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    ],
    downloads: 651,
    date: "2023-08-30",
    features: [
      {
        title: "Creative Layouts",
        description: "Unique and artistic design approach",
      },
      {
        title: "Portfolio Gallery",
        description: "Showcase your work beautifully",
      },
      {
        title: "Animation Effects",
        description: "Engaging animations and transitions",
      },
      {
        title: "Color Customization",
        description: "Easily change the color scheme",
      },
      { title: "Video Integration", description: "Embed videos of your work" },
      {
        title: "Client List",
        description: "Display brands you've worked with",
      },
    ],
  },
];

// UI Components data
export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  code: string;
  preview: string;
}

export const uiComponents: UIComponent[] = [
  {
    id: "button-primary",
    name: "Primary Button",
    description: "A stylish primary action button with hover effects",
    category: "buttons",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    code: `<button class="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
  Click Me
</button>`,
    preview:
      "A primary button with a background color that changes on hover and has rounded corners.",
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "A set of buttons grouped together for related actions",
    category: "buttons",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    code: `<div class="inline-flex rounded-md shadow-sm">
  <button class="bg-primary text-white py-2 px-4 rounded-l-md">Left</button>
  <button class="bg-primary text-white py-2 px-4 border-l border-r border-primary-dark">Middle</button>
  <button class="bg-primary text-white py-2 px-4 rounded-r-md">Right</button>
</div>`,
    preview:
      "Three buttons joined together as a group, with the left and right buttons having rounded outer corners.",
  },
  {
    id: "product-card",
    name: "Product Card",
    description: "A card for displaying product information and actions",
    category: "cards",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
    code: `<div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden max-w-sm">
  <div class="relative h-48 overflow-hidden">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586953208448-b95a79798f07" alt="Product image">
    <div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
  </div>
  <div class="p-6">
    <h3 class="font-bold text-xl mb-2">Product Name</h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">Product description goes here. This is a short description of the product.</p>
    <div class="flex justify-between items-center">
      <span class="font-bold text-xl">$49.99</span>
      <button class="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md">Add to Cart</button>
    </div>
  </div>
</div>`,
    preview:
      "A product card with an image, sale tag, product name, description, price, and add to cart button.",
  },
  {
    id: "testimonial-card",
    name: "Testimonial Card",
    description: "A card for displaying customer testimonials and reviews",
    category: "cards",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec",
    code: `<div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
  <div class="flex items-center mb-4">
    <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
      <span class="text-xl font-bold text-gray-600">JD</span>
    </div>
    <div>
      <h4 class="font-bold">John Doe</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">CEO, Company Name</p>
    </div>
  </div>
  <p class="text-gray-600 dark:text-gray-300 mb-4">"This product has completely transformed our business. We've seen amazing results and couldn't be happier!"</p>
  <div class="flex text-yellow-400">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  </div>
</div>`,
    preview:
      "A testimonial card with a user avatar, name, role, quote, and star rating.",
  },
  {
    id: "contact-form",
    name: "Contact Form",
    description: "A styled contact form with validation",
    category: "forms",
    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
    code: `<form class="space-y-6 max-w-lg">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
    <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
  </div>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
    <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
  </div>
  <div>
    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
    <textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
  </div>
  <div>
    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
      <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      Send Message
    </button>
  </div>
</form>`,
    preview:
      "A contact form with name, email, and message fields, plus a send button with an icon.",
  },
  {
    id: "search-input",
    name: "Search Input",
    description: "A clean search input with icon",
    category: "forms",
    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
    code: `<div class="relative max-w-md">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input type="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Search...">
</div>`,
    preview: "A search input with a magnifying glass icon on the left.",
  },
  {
    id: "navigation-bar",
    name: "Navigation Bar",
    description: "A responsive navigation bar with logo and links",
    category: "navigation",
    image: "https://images.unsplash.com/photo-1697665896501-80dda6979405",
    code: `<nav class="bg-white dark:bg-gray-800 shadow-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-primary">Logo</span>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" class="border-primary text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
          <a href="#" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</a>
          <a href="#" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Services</a>
          <a href="#" class="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
        </div>
      </div>
      <div class="-mr-2 flex items-center sm:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>`,
    preview:
      "A navigation bar with a logo on the left, navigation links in the middle, and a mobile menu button that appears on small screens.",
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Navigation breadcrumbs to indicate current page location",
    category: "navigation",
    image: "https://images.unsplash.com/photo-1697665896501-80dda6979405",
    code: `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <a href="#" class="ml-1 text-sm text-gray-700 hover:text-primary md:ml-2 dark:text-gray-400 dark:hover:text-white">Category</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Current Page</span>
      </div>
    </li>
  </ol>
</nav>`,
    preview:
      "A breadcrumb navigation component showing the path from home to the current page.",
  },
  {
    id: "modal-dialog",
    name: "Modal Dialog",
    description:
      "A modal/dialog component for displaying important information",
    category: "modals",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48",
    code: `<div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all max-w-lg w-full">
    <div class="p-6">
      <div class="flex items-start justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Modal Title</h3>
        <button class="text-gray-400 hover:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-4">
        <p class="text-gray-600 dark:text-gray-300">Your modal content goes here. This could be text, form elements, or other components.</p>
      </div>
      <div class="mt-6 flex justify-end space-x-3">
        <button class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
        <button class="px-4 py-2 bg-primary border border-transparent rounded-md text-sm font-medium text-white hover:bg-primary-dark">Confirm</button>
      </div>
    </div>
  </div>
</div>`,
    preview:
      "A modal dialog box with a title, content area, and action buttons.",
  },
  {
    id: "alert-component",
    name: "Alert Component",
    description: "Alert messages for providing feedback to users",
    category: "feedback",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48",
    code: `<div class="rounded-md p-4 mb-4 bg-green-50 dark:bg-green-900/20">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-green-800 dark:text-green-200">Successfully saved your changes!</p>
    </div>
    <div class="ml-auto pl-3">
      <div class="-mx-1.5 -my-1.5">
        <button class="inline-flex bg-green-50 dark:bg-transparent rounded-md p-1.5 text-green-500 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`,
    preview:
      "A success alert with a green background, check icon, and dismissible close button.",
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A tooltip component for displaying additional information",
    category: "feedback",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48",
    code: `<div class="relative inline-block">
  <button class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span>Hover Me</span>
  </button>
  <div class="absolute z-10 w-48 text-sm text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 p-2 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
    <div class="py-1 px-2">
      <p>This is a tooltip with helpful information.</p>
    </div>
    <div class="absolute w-2 h-2 bg-gray-900 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1"></div>
  </div>
</div>`,
    preview:
      "A tooltip that appears when hovering over a button, displaying additional helpful information.",
  },
];
