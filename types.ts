export interface Module {
  code: string;
  title: string;
  topics: string[];
}

export interface Semester {
  id: number;
  title: string;
  description: string;
  modules: Module[];
}

export interface AssessmentPattern {
  internal: number;
  endSemester: number;
  project: number;
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  level: string;
  eligibility: string;
  credits: number;
  price: number;
  image: string;
  objectives: string[];
  semesters: Semester[];
  assessment: AssessmentPattern;
  outcomes: string[];
  completionStatement?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  status: 'New' | 'Contacted' | 'Enrolled';
  date: string;
}