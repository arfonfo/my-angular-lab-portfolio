export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}
