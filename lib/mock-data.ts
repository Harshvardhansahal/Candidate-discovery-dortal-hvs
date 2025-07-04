import type { Candidate, Job } from "./types"

export const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    title: "Full Stack Developer",
    email: "arjun.xyz@email.com",
    phone: "+91 98765XXXXX",
    location: "Bangalore, India",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Passionate full-stack developer with 3 years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies. Love solving complex problems and learning new technologies.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
    experience: 3,
    branch: "Computer Science",
    college: "IIT Delhi",
    batch: "2021",
    cgpa: "8.5",
    github: "https://github.com/XYZ",
    linkedin: "https://linkedin.com/in/XYZ",
    workExperience: [
      {
        position: "Senior Software Engineer",
        company: "TechCorp",
        duration: "2022 - Present",
        description: "Led development of microservices architecture, improved system performance by 40%",
      },
      {
        position: "Software Engineer",
        company: "StartupXYZ",
        duration: "2021 - 2022",
        description: "Built full-stack applications using React and Node.js",
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a complete e-commerce solution with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      },
      {
        name: "Task Management App",
        description: "Real-time task management application with team collaboration features",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      },
    ],
  },
  {
    id: "2",
    name: "Priya Patel",
    title: "Frontend Developer",
    email: "priya.xyz@email.com",
    phone: "+91 98765XXXXX",
    location: "Mumbai, India",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Creative frontend developer with a keen eye for design and user experience. Specialized in React, Vue.js, and modern CSS frameworks. Passionate about creating beautiful and accessible web interfaces.",
    skills: ["React", "Vue.js", "JavaScript", "CSS", "Figma", "Tailwind CSS"],
    experience: 2,
    branch: "Information Technology",
    college: "IIT Bombay",
    batch: "2022",
    cgpa: "9.1",
    github: "https://github.com/xyz",
    linkedin: "https://linkedin.com/in/xyz",
    workExperience: [
      {
        position: "Frontend Developer",
        company: "DesignStudio",
        duration: "2022 - Present",
        description: "Developed responsive web applications and improved user engagement by 35%",
      },
    ],
    projects: [
      {
        name: "Portfolio Website",
        description: "Personal portfolio showcasing projects and skills",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
      },
    ],
  },
  {
    id: "3",
    name: "Rahul Kumar",
    title: "Backend Developer",
    email: "rahul.xyz@email.com",
    phone: "+91 98765XXXXX",
    location: "Hyderabad, India",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Experienced backend developer with expertise in building scalable APIs and microservices. Strong background in Java, Python, and cloud technologies. Passionate about system design and performance optimization.",
    skills: ["Java", "Spring Boot", "Python", "PostgreSQL", "Redis", "Kubernetes"],
    experience: 4,
    branch: "Computer Science",
    college: "BITS Pilani",
    batch: "2020",
    cgpa: "8.8",
    github: "https://github.com/rahulkumar",
    linkedin: "https://linkedin.com/in/xyz",
    workExperience: [
      {
        position: "Senior Backend Engineer",
        company: "CloudTech",
        duration: "2021 - Present",
        description: "Architected and implemented microservices handling 1M+ requests daily",
      },
      {
        position: "Software Engineer",
        company: "DataCorp",
        duration: "2020 - 2021",
        description: "Developed REST APIs and optimized database queries",
      },
    ],
    projects: [
      {
        name: "Microservices Architecture",
        description: "Scalable microservices system with API gateway and service discovery",
        technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      },
    ],
  },
  {
    id: "4",
    name: "Sneha Reddy",
    title: "Data Scientist",
    email: "sneha.xyz@email.com",
    phone: "+91 9876XXXXXX",
    location: "Chennai, India",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Data scientist with strong analytical skills and experience in machine learning. Proficient in Python, R, and various ML frameworks. Passionate about extracting insights from data to drive business decisions.",
    skills: ["Python", "R", "TensorFlow", "Pandas", "SQL", "Tableau"],
    experience: 3,
    branch: "Computer Science",
    college: "NIT Trichy",
    batch: "2021",
    cgpa: "9.2",
    github: "https://github.com/snehareddy",
    linkedin: "https://linkedin.com/in/xyz",
    workExperience: [
      {
        position: "Data Scientist",
        company: "Analytics Pro",
        duration: "2021 - Present",
        description: "Built ML models for customer segmentation and predictive analytics",
      },
    ],
    projects: [
      {
        name: "Customer Churn Prediction",
        description: "ML model to predict customer churn with 92% accuracy",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      },
    ],
  },
  {
    id: "5",
    name: "Vikram Singh",
    title: "DevOps Engineer",
    email: "vikram.xyz@email.com",
    phone: "+91 98765XXXXX",
    location: "Pune, India",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "DevOps engineer with expertise in cloud infrastructure and automation. Experienced in AWS, Docker, Kubernetes, and CI/CD pipelines. Passionate about improving development workflows and system reliability.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Python"],
    experience: 5,
    branch: "Electronics",
    college: "VIT Vellore",
    batch: "2019",
    cgpa: "8.3",
    github: "https://github.com/vikramsingh",
    linkedin: "https://linkedin.com/in/xyz",
    workExperience: [
      {
        position: "Senior DevOps Engineer",
        company: "CloudOps",
        duration: "2020 - Present",
        description: "Managed cloud infrastructure for 50+ applications, reduced deployment time by 60%",
      },
      {
        position: "DevOps Engineer",
        company: "TechStart",
        duration: "2019 - 2020",
        description: "Implemented CI/CD pipelines and automated deployment processes",
      },
    ],
    projects: [
      {
        name: "Infrastructure as Code",
        description: "Terraform modules for AWS infrastructure automation",
        technologies: ["Terraform", "AWS", "Docker", "Kubernetes"],
      },
    ],
  },
  {
    id: "6",
    name: "Ananya Gupta",
    title: "Mobile App Developer",
    email: "ananya.xyz@email.com",
    phone: "+91 98765XXXXX",
    location: "Delhi, India",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Mobile app developer with experience in both native and cross-platform development. Skilled in React Native, Flutter, and native iOS/Android development. Love creating intuitive mobile experiences.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
    experience: 3,
    branch: "Computer Science",
    college: "IIT Delhi",
    batch: "2021",
    cgpa: "8.7",
    github: "https://github.com/ananyagupta",
    linkedin: "https://linkedin.com/in/xyz",
    workExperience: [
      {
        position: "Mobile Developer",
        company: "AppTech",
        duration: "2021 - Present",
        description: "Developed mobile apps with 100K+ downloads, improved app performance by 45%",
      },
    ],
    projects: [
      {
        name: "Fitness Tracking App",
        description: "Cross-platform fitness app with social features",
        technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      },
    ],
  },
]

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    description:
      "We are looking for an experienced full stack developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹15-25 LPA",
    experience: "3-5 years",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    postedDate: "2 days ago",
    applicants: 45,
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "StartupXYZ",
    description:
      "Join our dynamic startup as a frontend developer. You will work on cutting-edge projects and have the opportunity to shape our product direction.",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹8-15 LPA",
    experience: "1-3 years",
    skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
    postedDate: "1 week ago",
    applicants: 32,
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "Analytics Pro",
    description:
      "We are seeking a data scientist to help us extract insights from large datasets and build predictive models to drive business decisions.",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹12-20 LPA",
    experience: "2-4 years",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Pandas"],
    postedDate: "3 days ago",
    applicants: 28,
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    description:
      "Looking for a DevOps engineer to manage our cloud infrastructure and implement CI/CD pipelines for our development teams.",
    location: "Pune, India",
    type: "Full-time",
    salary: "₹18-28 LPA",
    experience: "3-6 years",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    postedDate: "5 days ago",
    applicants: 19,
  },
  {
    id: "5",
    title: "Mobile App Developer",
    company: "AppTech Solutions",
    description:
      "We are looking for a talented mobile app developer to create innovative mobile applications for iOS and Android platforms.",
    location: "Chennai, India",
    type: "Full-time",
    salary: "₹10-18 LPA",
    experience: "2-4 years",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    postedDate: "1 week ago",
    applicants: 23,
  },
]
