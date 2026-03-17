import type {
  Project,
  SkillCategory,
  TimelineItem,
  ContactLink,
} from "./types";

export const PROJECTS: Project[] = [
  {
    id: "crumb",
    num: "01 — CRUMB",
    name: "Crumb",
    description:
      "Real-time leftover food rescue platform for college campuses. Students post surplus food, others claim it — reducing waste and building community one meal at a time.",
    tags: ["React", "Firebase", "Maps API", "PWA"],
    href: "#",
    accentColor: "rgba(251,146,60,",
  },
  {
    id: "syncup",
    num: "02 — SYNCUP",
    name: "SyncUp",
    description:
      "Group scheduling tool that detects calendar conflicts instantly and suggests the best meeting windows across different time zones and team availability.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "#",
    accentColor: "rgba(110,231,183,",
  },
  {
    id: "brainswap",
    num: "03 — BRAINSWAP",
    name: "BrainSwap",
    description:
      "Skill-barter tutoring platform where students exchange knowledge instead of money. Teach what you know, learn what you need.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
    accentColor: "rgba(167,139,250,",
  },
  {
    id: "napmap",
    num: "04 — NAPMAP",
    name: "NapMap",
    description:
      "Crowdsourced campus quiet-spot finder. Rate and discover the best hidden study nooks with real-time occupancy signals from the community.",
    tags: ["React", "Maps API", "Firebase"],
    href: "#",
    accentColor: "rgba(34,197,94,",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    icon: "🐍",
    label: "Languages",
    pills: ["Python", "JavaScript", "TypeScript", "Java", "C / C++", "SQL"],
    bg: "rgba(253,186,116,0.12)",
  },
  {
    icon: "⚛️",
    label: "Frontend",
    pills: ["React", "Next.js", "HTML & CSS", "Tailwind", "Figma"],
    bg: "rgba(110,231,183,0.12)",
  },
  {
    icon: "🛠",
    label: "Backend",
    pills: [
      "Node.js",
      "Express",
      "Firebase",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
    ],
    bg: "rgba(167,139,250,0.12)",
  },
  {
    icon: "🔧",
    label: "Tools",
    pills: ["Git & GitHub", "Linux", "Docker", "VS Code", "Bash"],
    bg: "rgba(251,146,60,0.12)",
  },
  {
    icon: "🧠",
    label: "Concepts",
    pills: ["DSA", "OOP", "System Design", "Design Patterns", "Agile"],
    bg: "rgba(34,197,94,0.12)",
  },
  {
    icon: "📚",
    label: "Learning Now",
    pills: ["Machine Learning", "AWS / GCP", "WebSockets", "GraphQL"],
    bg: "rgba(251,191,36,0.12)",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 — Present",
    role: "B.Sc. Computer Science",
    place: "University · Expected 2026",
  },
  {
    year: "2024",
    role: "Freelance Web Developer",
    place: "Various clients · Remote",
  },
  { year: "2023", role: "Hackathon Finalist", place: "Campus Tech Hackathon" },
  {
    year: "2022",
    role: "Started Programming",
    place: "Python · First line of code",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: "✉️",
    label: "Email",
    value: "hello@nunyeou.dev",
    href: "mailto:hello@nunyeou.dev",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/nunyeou",
    href: "https://github.com/",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/nunyeou",
    href: "https://linkedin.com/",
  },
  { icon: "📄", label: "Resume", value: "Download CV", href: "#" },
];

export const STATS = [
  { num: "4+", label: "Projects Shipped" },
  { num: "3+", label: "Languages Fluent" },
  { num: "2026", label: "Graduation Year" },
  { num: "∞", label: "Coffee Consumed" },
];
