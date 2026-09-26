import { Service } from "@/types";

// EDIT ME — icon must match a key handled in Services/iconMap.tsx
export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Fast, responsive websites built with clean code and modern tooling — from landing pages to full multi-page sites.",
    icon: "globe",
  },
  {
    id: "web-app-development",
    title: "Web Application Development",
    description:
      "Interactive, data-driven web apps with React and TypeScript, built to be maintainable and easy to extend.",
    icon: "layout-dashboard",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces designed around how people actually use them — clear hierarchy, sensible flows, no clutter.",
    icon: "pen-tool",
  },
  {
    id: "tech-solutions",
    title: "Tech Solutions",
    description:
      "Custom automation, bots and tooling that solve a specific operational problem instead of a generic template.",
    icon: "cpu",
  },
  {
    id: "firebase-integration",
    title: "Firebase Integration",
    description:
      "Authentication, real-time data and storage wired up correctly — secure rules, not just a working demo.",
    icon: "flame",
  },
  {
    id: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    description:
      "Practical security fundamentals applied to real projects — safer defaults, hardened configs, informed reviews.",
    icon: "shield",
  },
];
