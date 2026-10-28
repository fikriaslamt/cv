import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Fikri Aslam Taufiqurrahman",
  location: "Pringsewu, Lampung, Indonesia, GMT+7",
  locationLink:
    "https://www.google.com/maps/place/Pringsewu,+Lampung,+Indonesia",
  about: "Backend-focused Software Engineer building APIs, data, and cloud.",
  summary:
    "Backend-focused software engineer with experience building web applications and information systems in Go, JavaScript, and PHP. I care about clean APIs, reliable data, and the quiet infrastructure that keeps a product running. Bachelor of Computer Science from Universitas Lampung.",
  avatar,
  siteUrl: "https://fikriaslam.my.id",
  personalWebsiteUrl: "https://fikriaslam.my.id",
  contact: {
    email: "fikriaslam.t@gmail.com",
    tel: "+6287896214709",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fikriaslamt",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fikri-aslam/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universitas Lampung",
      degree: "Bachelor of Computer Science · GPA 3.63",
      start: "2019",
      end: "2024",
    },
  ],
  work: [
    {
      company: "CODE.ID",
      link: "https://code.id",
      badges: ["Go", "JavaScript", "PHP", "REST APIs", "PostgreSQL"],
      title: "Backend Developer",
      start: "Mar 2025",
      end: null,
      description:
        "Building backend services and web applications with Go, JavaScript, and PHP, with a focus on APIs, data, and cloud delivery.",
    },
    {
      company: "TPST Universitas Lampung",
      link: "https://www.unila.ac.id",
      badges: ["PHP", "CodeIgniter 4", "Tailwind CSS", "MySQL"],
      title: "Web Developer (Freelance)",
      start: "Jul 2023",
      end: "Dec 2023",
      description:
        "Built SI TPST Unila, a web-based information system for the university's integrated waste processing facility, as my undergraduate thesis.",
      highlights: [
        "Developed the system with CodeIgniter 4 and Tailwind CSS",
        "Modeled waste data in MySQL and built the management views used by facility staff",
      ],
    },
    {
      company: "Ruangguru",
      link: "https://www.ruangguru.com",
      badges: ["Go", "PostgreSQL", "Backend"],
      title: "Assistant Mentor",
      start: "Aug 2022",
      end: "Dec 2022",
      description:
        "Assistant mentor in a project-based intensive backend engineering bootcamp run by Digital Talent Scholarship.",
      highlights: [
        "Helped students work through the backend curriculum",
        "Built a simple Kanban app with Go and PostgreSQL as a teaching project",
      ],
    },
    {
      company: "Universitas Lampung",
      link: "https://www.unila.ac.id",
      badges: ["PHP", "CodeIgniter", "MySQL"],
      title: "Web Developer (Internship)",
      start: "Jan 2022",
      end: "May 2022",
      description:
        "Built an information system for the Department of Business Administration.",
      highlights: [
        "Created the lecturer and student pages with CodeIgniter and MySQL",
      ],
    },
  ],
  skills: [
    "Go",
    "JavaScript",
    "PHP",
    "REST APIs",
    "Gin",
    "CodeIgniter 4",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Elasticsearch",
    "Docker",
    "Linux",
    "Git",
    "Fly.io",
    "Grafana",
    "MinIO",
  ],
  projects: [
    {
      title: "Deploy Golang",
      techStack: ["Go", "net/http", "GitHub Actions"],
      description:
        "A deployment-focused Go service built with the standard library and shipped with a GitHub Actions workflow.",
      link: "https://github.com/fikriaslamt/deploy-golang",
    },
    {
      title: "SI TPST Unila",
      techStack: ["PHP", "CodeIgniter 4", "Tailwind CSS", "MySQL"],
      description:
        "Web-based information system for the integrated waste processing facility at Universitas Lampung. Built as my undergraduate thesis.",
      link: "https://github.com/fikriaslamt/si-tpst",
    },
    {
      title: "Book API",
      techStack: ["Go", "Gin", "PostgreSQL", "JWT"],
      description:
        "REST API for managing books with Gin, GORM, and PostgreSQL, including JWT authentication and layered handlers.",
      link: "https://github.com/fikriaslamt/book-api",
    },
    {
      title: "Kanban App",
      techStack: ["Go", "GORM", "PostgreSQL", "Docker"],
      description:
        "Kanban backend with boards, lists, and tasks, backed by PostgreSQL and shipped with Docker and Fly.io.",
      link: "https://github.com/fikriaslamt/kanban-app",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "About",
  work: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
} satisfies Partial<Record<keyof ResumeData, string>>;
