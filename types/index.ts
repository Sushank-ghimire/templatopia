// Template types
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

// UI Component types
export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  code: string;
  preview: string;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// Pricing Plan types
export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended: boolean;
  buttonText: string;
}

// Form Data types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Animation types
export type AnimationDirection = "up" | "down" | "left" | "right";
export type AnimationType = "fade" | "slide" | "scale" | "rotate" | "flip";
