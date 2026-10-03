// ============================================================
// EDIT YOUR CONTENT HERE — all site data lives in this file.
// ============================================================

/** Put your WhatsApp number here in international format, digits only (e.g. "8801XXXXXXXXX"). */
export const WHATSAPP_NUMBER = "+8801998703521";

/** Replace with your photo URL or import (e.g. import me from "@/assets/me.jpg"). Leave "" to show the placeholder. */
export const PROFILE_IMAGE = "/images/me.jpg";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/ayesha-ferdous-dev", // e.g. "https://linkedin.com/in/your-profile"
  whatsapp: "+8801998703521", // e.g. "https://github.com/your-username"
  instagram: "https://www.instagram.com/ayesha_ferdous_dev",
  facebook: "https://www.facebook.com/share/19hphY4sLk/",
};

export const PROFILE = {
  name: "Ayesha Ferdous",
  title: "Shopify Developer",
  location: "Bangladesh",
  headline: "Ayesha Ferdous",
  description:
    "I design and develop clean, responsive Shopify stores for international brands from theme customization and custom Liquid sections to product pages built to sell.",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    role: "Shopify Developer",
    company: "Softvence Agency",
    location: "Mohakhali, Dhaka",
    period: "May 2025 – July 2026",
    points: [
      "Developed and customized Shopify stores based on client requirements.",
      "Customized Shopify themes and sections.",
      "Worked with Shopify Liquid.",
      "Built responsive and user-friendly interfaces.",
      "Implemented product page customizations.",
      "Integrated third-party Shopify apps.",
      "Worked on revisions and improvements based on client feedback.",
      "Collaborated with international clients.",
      "Focused on clean design, usability, and e-commerce performance.",
    ],
  },
];

export const HIGHLIGHTS = [
  "1.5+ Years Shopify Experience",
  "International Client Experience",
  "Shopify Theme Customization",
  "Custom Sections & Liquid",
];

export const SKILLS = [
  { icon: "ShoppingBag", title: "Shopify", text: "Store architecture" },
  { icon: "CodeXml", title: "Liquid", text: "Theme development" },
  { icon: "Braces", title: "JavaScript", text: "Store interactions" },
  { icon: "FileCode2", title: "HTML5", text: "Semantic structure" },
  { icon: "Paintbrush", title: "CSS3", text: "Responsive styling" },
  { icon: "Figma", title: "Figma", text: "Design handoff" },
  { icon: "Github", title: "GitHub", text: "Version control" },
  { icon: "Webhook", title: "APIs", text: "App integrations" },
] as const;

export type Project = {
  name: string;
  url: string;
  type: string;
  description: string;
  tech: string[];
  /** Image URL or import. Leave "" to show the placeholder. */
  image: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Chelsea Mats",
    url: "https://chelseamats.com",
    type: "Shopify E-commerce Store",
    description:
      "A visually rich Shopify store designed to showcase artistic fitness and movement mats with a strong focus on product storytelling and brand experience.",
    tech: ["Shopify", "Liquid", "CSS", "JavaScript"],
    image: "/images/chelsamat.png",
  },
  {
    name: "Verlichting Groothandel",
    url: "https://verlichtinggroothandel.nl",
    type: "Shopify E-commerce Store",
    description:
      "A structured Shopify eCommerce experience built for a large lighting catalog, with clear product categories, easy navigation, and a professional shopping flow.",
    tech: ["Shopify 2.0", "Liquid", "CSS", "JavaScript"],
    image: "/images/verlichting.png",
  },
  {
    name: "Hectors Jewelry",
    url: "https://hectorsjewelry.com",
    type: "Shopify E-commerce Store",
    description:
      "An elegant Shopify storefront focused on premium product presentation, refined visuals, and a seamless browsing experience for jewelry customers.",
    tech: ["Shopify", "Liquid", "CSS", "JavaScript"],
    image: "/images/heclors jewelry.png",
  },
];

export const SERVICES = [
  { icon: "Store", title: "Shopify Store Design", text: "Clean, on-brand storefronts designed around your customers." },
  { icon: "Palette", title: "Shopify Theme Customization", text: "Tailor any theme to match your brand and business needs." },
  { icon: "LayoutGrid", title: "Custom Shopify Sections", text: "Flexible, editable sections you control from the theme editor." },
  { icon: "Code2", title: "Liquid Development", text: "Reliable Liquid code for custom logic, templates and features." },
  { icon: "ShoppingBag", title: "Product Page Development", text: "Product pages that inform, build trust and drive add-to-cart." },
  { icon: "Puzzle", title: "Shopify App Integration", text: "Set up and integrate third-party apps cleanly into your store." },
  { icon: "Smartphone", title: "Responsive UI/UX", text: "A polished experience across desktop, tablet and mobile." },
  { icon: "TrendingUp", title: "E-commerce Optimization", text: "Improve usability and flow to support more conversions." },
  { icon: "Gauge", title: "Store Speed Optimization", text: "Lighter pages and faster loads for a better shopping experience." },
  { icon: "Search", title: "Basic SEO Setup", text: "Solid on-page SEO foundations so customers can find you." },
] as const;

export const EDUCATION = {
  degree: "Bachelor of Business Administration (BBA)",
  major: "Major: Accounting",
  school: "Bhawal Badre Alam Government College",
  location: "Bangladesh",
  text: "My accounting background built strong analytical thinking, logical problem-solving, attention to detail and data-driven decision-making — skills I now apply every day to web development and e-commerce projects.",
};

export const PROCESS = [
  { step: "01", title: "Understand", text: "Understand the client's business, goals, target audience, and requirements." },
  { step: "02", title: "Plan", text: "Plan the store structure, user experience, features, and development approach." },
  { step: "03", title: "Build", text: "Design and develop the Shopify store with clean, responsive, and scalable implementation." },
  { step: "04", title: "Optimize", text: "Test the store, improve usability and performance, and make final refinements." },
];

export const WHY = [
  { title: "Clean & Modern Shopify Development", text: "Well-structured code and modern, maintainable stores." },
  { title: "Responsive Design", text: "Every store looks and works great on any screen." },
  { title: "Client-Focused Communication", text: "Clear updates and responsive collaboration throughout." },
  { title: "Attention to Detail", text: "Careful work on the small things customers notice." },
  { title: "International Client Experience", text: "Comfortable working across time zones and markets." },
  { title: "Practical E-commerce Experience", text: "Hands-on experience with real, live Shopify stores." },
];

export const whatsappLink = (text?: string) =>
  WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : "";
