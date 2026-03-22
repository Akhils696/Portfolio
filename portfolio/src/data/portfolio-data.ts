import {
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiLeetcode, SiNodedotjs, SiOpenjdk } from "react-icons/si";
import type { IconType } from "react-icons";

export type ProjectCategory = "AI" | "ML" | "Systems";

export type Project = {
  title: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  features: string[];
};

export type Profile = {
  label: string;
  href: string;
  handle: string;
  icon: IconType;
};

export type SkillMetric = {
  label: string;
  value: number;
  tier: string;
  detail: string;
  spotlight?: boolean;
};

export const heroContent = {
  name: "Akhil Senthil",
  tagline: "AI/ML Developer | Software Engineer | Building Intelligent Systems",
  intro:
    "Computer Science student passionate about Artificial Intelligence, Machine Learning, and scalable software systems. I enjoy building intelligent tools that solve real-world problems using data and modern software engineering practices.",
  resumeHref: "/akhil-senthil-resume.pdf",
};

export const quickStats = [
  { label: "Current Focus", value: "AI Systems + Backend Engineering" },
  { label: "Status", value: "2nd Year CSE Student" },
  { label: "Mindset", value: "Research Driven, Production Ready" },
];

export const interestAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Software Engineering",
  "Backend Systems",
  "Open Source",
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "Embedded C", "JavaScript"],
    icon: FaPython,
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "Tailwind", "Node.js", "REST APIs"],
    icon: SiNodedotjs,
  },
  {
    title: "AI/ML",
    items: ["Scikit-learn", "OpenCV", "NumPy", "Pandas", "Model training & evaluation"],
    icon: FaGithub,
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Linux", "Docker (basic)"],
    icon: SiJavascript,
  },
];

export const skillChart: SkillMetric[] = [
  {
    label: "Python / ML Tooling",
    value: 90,
    tier: "Advanced",
    detail: "Built multiple AI and analytics projects with Python-first workflows.",
    spotlight: true,
  },
  {
    label: "Backend Engineering",
    value: 82,
    tier: "Strong",
    detail: "Comfortable shipping APIs, app logic, and clean project structure.",
  },
  {
    label: "Web Development",
    value: 80,
    tier: "Strong",
    detail: "Building responsive interfaces with Next.js, Tailwind, and modern UI patterns.",
  },
  {
    label: "Computer Vision",
    value: 78,
    tier: "Strong",
    detail: "Worked with OpenCV pipelines, preprocessing, and model evaluation.",
  },
  {
    label: "Cybersecurity",
    value: 77,
    tier: "Strong",
    detail: "Building automation ideas around security workflows, tool orchestration, and system defense.",
  },
  {
    label: "Systems Thinking",
    value: 76,
    tier: "Growing",
    detail: "Interested in scalable architecture, networking, and dependable engineering tradeoffs.",
  },
];

export const focusBadges = [
  { label: "Python First", icon: FaPython },
  { label: "Java Foundations", icon: SiOpenjdk },
  { label: "Node APIs", icon: SiNodedotjs },
  { label: "Frontend Logic", icon: SiJavascript },
];

export const projects: Project[] = [
  {
    title: "Evo Academy - AI-Powered Adaptive Learning Platform",
    description:
      "An adaptive learning platform built on a production-style RAG stack that ingests study materials, retrieves relevant context, and delivers personalized tutoring, quizzes, and study plans.",
    category: "AI",
    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "OpenAI API / Ollama",
      "LangChain",
      "Weaviate / Pinecone",
      "PostgreSQL / MongoDB",
      "Docker",
      "Tailwind CSS",
    ],
    features: [
      "Document-grounded Q&A over PDFs, notes, and docs",
      "RAG pipeline with embeddings, retrieval, and answer generation",
      "Adaptive recommendations driven by learner progress",
    ],
  },
  {
    title: "API Documentation & Testing Platform (kpr-api)",
    description:
      "An interactive API documentation and testing platform with a modular dashboard for endpoint exploration, analytics, and Postman-style request workflows.",
    category: "Systems",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "REST APIs",
      "Chart.js / Recharts",
    ],
    features: [
      "Interactive API documentation and in-browser testing",
      "Performance and load-testing utilities",
      "Analytics dashboards for API lifecycle visibility",
    ],
  },
  {
    title: "AI-Powered Emergency Call Triage & Dispatch System (RAPID-100)",
    description:
      "A real-time emergency response intelligence system that transcribes live calls, classifies incidents, scores severity, and supports faster dispatch decisions with explainable AI outputs.",
    category: "AI",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Whisper / Vosk",
      "spaCy / Transformers",
      "Scikit-learn / PyTorch",
      "SHAP",
      "WebSockets",
      "PostgreSQL",
    ],
    features: [
      "Live speech-to-text and emergency type classification",
      "Severity scoring with location and entity extraction",
      "Monitoring dashboard with explainability signals for operators",
    ],
  },
  {
    title: "AI Cybersecurity Multi-Agent System",
    description:
      "A multi-agent security orchestration platform that coordinates AI workers with cybersecurity tools to automate defense workflows, investigations, and controlled attack simulations.",
    category: "Systems",
    stack: [
      "Python",
      "LangChain / CrewAI / AutoGen",
      "FastAPI",
      "Docker",
      "REST APIs",
      "Nmap / Metasploit integrations",
      "Redis",
    ],
    features: [
      "Multi-agent coordination across specialized security roles",
      "Tool-driven automation for defense and simulation workflows",
      "Systems-level architecture for extensible cyber operations",
    ],
  },
  {
    title: "Hybrid OpenCV Domain-Adaptive Droplet Analysis Pipeline",
    description:
      "A hybrid, domain-adaptive ML pipeline that converts complex experimental droplet imagery into interpretable size predictions by combining classical CV, foundation-model segmentation, CNN regression, and explainable AI.",
    category: "ML",
    stack: [
      "Python",
      "OpenCV",
      "SAM",
      "CNN Regression",
      "SHAP",
      "Domain Adaptation",
      "Experimental Imaging",
    ],
    features: [
      "OpenCV preprocessing and candidate detection under dense overlap",
      "Foundation-model segmentation plus CNN diameter regression",
      "SHAP-based feature attribution, uncertainty filtering, and SMD output",
    ],
  },
];

export const codingProfiles: Profile[] = [
  {
    label: "GitHub",
    href: "https://github.com/Akhils696",
    handle: "@Akhils696",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akhil-senthil-430b6a317",
    handle: "akhil-senthil-430b6a317",
    icon: FaLinkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/AKHIL_S_696/",
    handle: "AKHIL_S_696",
    icon: SiLeetcode,
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/akhilsenthil696",
    handle: "@akhilsenthil696",
    icon: FaHackerrank,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/akxil_s/",
    handle: "@akxil_s",
    icon: FaInstagram,
  },
];

export const contactInfo = {
  email: "akhilsenthil696@gmail.com",
  heading: "Let’s build intelligent systems that matter.",
  description:
    "I’m open to AI/ML Engineer and Software Development Engineer opportunities, collaborative builds, and research-driven product work.",
};
