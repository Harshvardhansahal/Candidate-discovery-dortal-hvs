export interface Candidate {
  id: string
  name: string
  title: string
  email: string
  phone: string
  location: string
  avatar: string
  bio: string
  skills: string[]
  experience: number
  branch: string
  college: string
  batch: string
  cgpa: string
  github?: string
  linkedin?: string
  portfolio?: string
  workExperience?: WorkExperience[]
  projects?: Project[]
}

export interface WorkExperience {
  position: string
  company: string
  duration: string
  description: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  link?: string
}

export interface Job {
  id: string
  title: string
  company: string
  description: string
  location: string
  type: string
  salary: string
  experience: string
  skills: string[]
  postedDate: string
  applicants: number
}
