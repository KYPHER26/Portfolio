import { Project } from "@/types";

// EDIT ME — add or remove projects here; the UI never needs to change.
// Leave githubUrl / liveUrl undefined (not an empty string) to hide that button.
export const projects: Project[] = [
  {
    id: "kypher-tech-solutions",
    name: "Kypher Tech Solutions",
    description:
      "Business site for Kypher Tech Solutions — dark, techy design showcasing services and contact details.",
    longDescription:
      "The public-facing site for the Kypher Tech Solutions brand: a dark, technology-forward design built to present services clearly and make it easy for prospective clients to get in touch.",
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["Web"],
    status: "Live",
    liveUrl: "https://kyphertech.online/",
    // githubUrl: "", // TODO: add repo link if you want a GitHub button here
  },
  {
    id: "kypher-xmd",
    name: "Kypher XMD",
    description:
      "WhatsApp automation bot built on the Baileys library for customer support and personal automation.",
    longDescription:
      "A WhatsApp bot built with Node.js and the Baileys library, handling automated responses and support workflows without relying on the official WhatsApp Business API.",
    technologies: ["Node.js", "JavaScript", "Baileys"],
    categories: ["Other"],
    status: "Live",
    githubUrl: "https://github.com/KYPHER26/KYPHER_XMD",
    // liveUrl: "", // TODO: add a live/demo link if available
  },
  {
    id: "cloud-bot",
    name: "Cloud Bot",
    description: "Cloud-hosted WhatsApp automation with a management dashboard. Currently in development.",
    technologies: ["Node.js", "Firebase"],
    categories: ["Firebase", "Other"],
    status: "In Development",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    description:
      "Multi-tenant expense tracking web app, free at launch with a planned subscription model. Currently in development.",
    technologies: ["React", "TypeScript", "Firebase"],
    categories: ["React", "Firebase"],
    status: "In Development",
  },
  {
    id: "visionnest-family",
    name: "Visionnest Family",
    description: "A digital services initiative. Details to be added.",
    technologies: [],
    categories: ["Other"],
    status: "In Development",
    // githubUrl / liveUrl: TODO — add once details are available
  },
];
