import { SiteConfig, NavLink } from "@/types";

// ─── EDIT ME ─────────────────────────────────────────────────────────────
// This is the single source of truth for identity, bio and contact info.
// Update values here and they propagate through the whole site.
export const siteConfig: SiteConfig = {
  name: "KYPHER",
  role: "Web Developer • Software Developer • Tech Enthusiast",
  tagline: "Developer • Tech Enthusiast • Cybersecurity",
  focus: "Software Development & Cybersecurity",
  bio: "I'm KYPHER, a young developer passionate about technology, software development and digital innovation. I enjoy turning ideas into functional, modern and visually engaging digital experiences.",
  email: "kyphertech@gmail.com",
  phone: "0658004446",
  whatsapp: "https://wa.me/255658004446", // TODO: confirm country code prefix is correct for your line
  githubUsername: "KYPHER26",
  socials: [
    { label: "GitHub", href: "https://github.com/KYPHER26", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zakaria-killenga-a9980a437",
      icon: "linkedin",
    },
    { label: "Instagram", href: "https://www.instagram.com/kypher.tch", icon: "instagram" },
    { label: "WhatsApp", href: "https://wa.me/255658004446", icon: "whatsapp" },
  ],
  // Edit these freely — keep them honest, no fabricated numbers.
  stats: [
    { label: "Projects Shipped", value: "5+" },
    { label: "Technologies", value: "15+" },
    { label: "Growth", value: "Every Day" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

// Formspree endpoint powering the contact form.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjwljed";
