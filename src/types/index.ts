export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "whatsapp" | "mail";
}

export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Cybersecurity";

export type SkillLevel = "Learning" | "Comfortable" | "Advanced";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type ProjectCategory = "Web" | "React" | "Firebase" | "Cybersecurity" | "Other";

export type ProjectStatus = "Live" | "In Development";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceEntry {
  id: string;
  position: string;
  organization: string;
  date: string;
  description: string;
  technologies?: string[];
}

export interface EducationEntry {
  id: string;
  level: string;
  institution: string;
  program: string;
  year: string;
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  verifyUrl?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  focus: string;
  bio: string;
  email: string;
  phone: string;
  whatsapp: string;
  githubUsername: string;
  socials: SocialLink[];
  stats: { label: string; value: string }[];
}
