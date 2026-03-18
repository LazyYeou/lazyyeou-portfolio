import type React from "react";

export interface Project {
  id: string;
  num: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
  accentColor: string;
}

export interface SkillCategory {
  label: string;
  pills: string[];
  bg: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  place: string;
}

export interface ContactLink {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}
