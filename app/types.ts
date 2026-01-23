export interface PersonalInfo {
  name: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  companyLinkedin: string;
}

export interface CoverLetter {
  title: string;
  paragraphs: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  projects?: string[];
}

export interface Education {
  school: string;
  period: string;
  degree: string;
}

export interface Skills {
  languages: string[];
  aiAndDevelopment: string[];
  platforms: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  coverLetter: CoverLetter;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
}
