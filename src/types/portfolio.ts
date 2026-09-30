export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  githubUrl: string;
  featured?: boolean;
  mockupBadge: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  affiliate: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  description: string;
  date: string;
  type: 'award' | 'hackathon' | 'conference';
}

export interface Language {
  name: string;
  proficiency: string;
  level: string;
}
