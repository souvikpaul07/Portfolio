export const site = {
  name: "Souvik Paul",
  domain: "",
  profileImage: "/profile.jpg",
  employerLogo: "/wipro-logo.png",
  title: "Project Engineer",
  bio: "1+ years of experience in the field of software development. I have a strong background in Java Backend Development and Database Management.",
  availability: "Available — open to Software Developer roles",
  location: "Bengaluru, India",
  email: "souvikpaul568@gmail.com",
  timezone: "IST (UTC +5:30)",
  resumeUrl:
    "https://drive.google.com/file/d/1iAAGWUwNb7Y-o89osyeI1mMhBej8AxsK/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/paul-souvik/",
  github: "https://github.com/souvikpaul07",
  // learnProfile: "https://learn.microsoft.com/en-us/users/Akash-Jadav",
};

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const techTags = [
  "Java",
  "Spring Boot",
  "Microservices",
  "React.js",
  "MySQL",
  "DBeaver",
  "Git",
  "GitLabs",
  "Jenkins",
  "Fortify",
  "Postman",
  "BlackDuck",
  "Docker",
  "Linux",
  "AWS",
  "AI Tools",
];

export const stats = [
  { value: "1+", label: "Years experience" },
  { value: "1", label: "Projects shipped" },
  { value: "3", label: "Certifications" },
  { value: "1", label: "Industries served" },
];

export const industries = [
  "Banking",
  "Microsoft 365",
];

export const projectFilters = [
  "All",
  "Banking",
  "AI",
  "SaaS",
  "Migration",
  "Web",
];

export const projects = [
  {
    title: "Product Inventory Management System",
    category: "Logistics",
    period: "Training Project - Apr 2025",
    description:
      "Developed a full-stack product management system with authentication, role-based access and CRUD operations. Implemented microservices architecture with service discovery, API gateway and fault tolerance mechanisms.",
    tech: ["Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs", "Microservices", "Eureka", "Feign Client", "Resilience4j", "Twilio", "Okta"],
  },
  {
    title: "Legacy Application Modernization",
    category: "Migration & Modernization",
    period: "Training Project - May 2025",
    description:
      "Modernized a legacy Struts2-based application into a scalable Spring Boot system using AI-assisted development. Improved performance, maintainability and project structure with updated dependencies.",
    tech: ["Java", "Spring Boot", "Struts2", "Maven", "REST APIs", "GitHub Copilot"],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      "React.js",
      "Angular",
      "JavaScript",
      "HTML/CSS"
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Java",
      "Spring Boot",
      "Express.js",
      "Microservices",
      "REST APIs"
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      "MySQL",
      "MongoDB",
      "DBeaver",
    ],
  },
  {
    title: "Cloud",
    icon: "cloud",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS CloudWatch",
      "AWS CloudFormation",
    ],
  },
  {
    title: "Microsoft 365",
    icon: "microsoft",
    skills: [
      "SharePoint Online",
      "Microsoft Graph API",
      "Power Platform",
      "Power Automate",
      "Power Apps",
      "Teams",
      "OneDrive",
      "ServiceNow",
    ],
  },
  {
    title: "AI & Modern Tools",
    icon: "sparkles",
  skills: [
    "GitHub Copilot",
    "GitLabs",
    "Jenkins",
    "Fortify",
    "Postman",
    "BlackDuck",
    "ChatGPT",
    "OpenAI API",
    "LangChain",
    "Prompt Engineering",
    "AI-assisted Development",
    "REST API Integration",
    "Postman AI",
    "Code Generation Tools"
  ],
  },
];

export const proficiencies = [
  { name: "Java / Spring Boot", level: 85 },
  { name: "Microservices & REST APIs", level: 80 },
  { name: "React.js / Frontend", level: 80 },
  { name: "SQL / Database Design", level: 75 },
  { name: "Git / GitHub", level: 80 },
  { name: "AI Tools & Prompt Engineering", level: 70 }
];

export const experience = [
  {
  title: "Full-Stack Developer",
  company: "US Bank (via Wipro)",
  type: "Contract",
  period: "2025 - Present",
  highlights: [
    "Led remediation of container security vulnerabilities across multiple services, improving overall application security posture and compliance",
    "Designed and optimized Dockerfiles for Java-based microservices, enabling efficient containerization and faster deployment cycles",
    "Managed application redeployments across environments, ensuring high availability and minimal downtime during releases",
    "Developed and enhanced backend services using Java and Spring Boot, contributing to scalable and maintainable enterprise systems",
    "Collaborated with cross-functional teams to identify performance bottlenecks and implement improvements in deployment workflows",
    "Strengthened CI/CD processes by integrating container best practices and improving build reliability"
  ],
  tech: ["Java", "Spring Boot", "Docker", "Microservices", "CI/CD", "Linux", "Git", "GitLabs","Jenkins","Fortify","Postman","BlackDuck",]
},
];

export const education = [
  {
    degree: "Bachelor of Technology",
    school: "Institute of Engineering & Management, Kolkata",
    detail: "Lateral 2021 - 2024",
    note: "CGPA: 8.30",
  },
  {
    degree: "Diploma",
    school: "Kanyapur Polytechnic",
    detail: "2018 - 2021",
    note: "CGPA: 7.80",
  },
];

export const certifications = [
  {
    code: "GH-300",
    title: "GitHub Copilot Certification",
    issuer: "Microsoft",
    period: "2025",
    earned: true,
  },
  {
    code: "Wipro-Java-L1",
    title: "Core Java Certification",
    issuer: "Wipro",
    period: "2025",
    earned: true,
  },
  {
    code: "AIF-C01",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    period: "2025",
    earned: true,
  },
];
