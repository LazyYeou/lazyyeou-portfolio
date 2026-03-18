import { Github, Mail, Linkedin, JournalPage } from "iconoir-react";

import type {
  Project,
  SkillCategory,
  TimelineItem,
  ContactLink,
} from "./types";

export const PROJECTS: Project[] = [
  {
    id: "lastcamp",
    num: "01 — LASTCAMP",
    name: "Last Camp",
    description:
      "Short 3d retro-style horror game, built in Unity with over 8k downloads.",
    tags: ["Unity", "C#", "Blender", "Photoshop"],
    href: "#",
    accentColor: "rgba(251,146,60)",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    label: "Languages",
    pills: ["Python", "JavaScript", "TypeScript", "C / C++", "SQL"],
    bg: "rgba(253,186,116,0.12)",
  },
  {
    label: "Frontend & Backend",
    pills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "hono",
    ],
    bg: "rgba(110,231,183,0.12)",
  },
  {
    label: "Database",
    pills: ["PostgreSQL", "MongoDB", "Prisma"],
    bg: "rgba(147,197,253,0.12)",
  },
  {
    label: "Tools",
    pills: ["Git", "Github", "Docker", "Postman"],
    bg: "rgba(251,146,60,0.12)",
  },
  {
    label: "Data Science",
    pills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    bg: "rgba(251,191,36,0.12)",
  },
  {
    label: "UAVs/Robotics",
    pills: ["ROS", "Gazebo", "OpenCV", "Ardupilot"],
    bg: "rgba(34,197,94,0.12)",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2025 — Present",
    role: "Computer Science Undergraduate",
    place: "Institut Teknologi Bandung",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "lazyyeou@gmail.com",
    href: "mailto:lazyyeou@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/lazyyeou",
    href: "https://github.com/lazyyeou",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mridwannf",
    href: "https://linkedin.com/in/mridwannf",
  },
  { icon: JournalPage, label: "Resume", value: "Download CV", href: "#" },
];

export const STATS = [
  { num: "4+", label: "Projects Built" },
  { num: "3+", label: "Programming Language" },
  { num: "2029", label: "Graduation Year" },
  { num: "∞", label: "Bugs Created and Fixed" },
];
