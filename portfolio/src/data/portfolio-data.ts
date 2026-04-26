import {
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiLeetcode,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
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
  tagline: "AI/ML Researcher & Full-Stack Developer building production-style intelligent systems",
  intro:
    "B.Tech Computer Science undergraduate at Amrita Vishwa Vidyapeetham with hands-on work across computer vision, NLP, LLM applications, and full-stack engineering using FastAPI, React, Docker, and vector databases.",
  resumeHref: "/akhil-senthil-resume.pdf",
};

export const quickStats = [
  { label: "Education", value: "B.Tech CSE, Amrita - Expected 2028" },
  { label: "CGPA", value: "8.3 / 10.0" },
  { label: "Experience", value: "Python Development Intern, ShadowFox" },
];

export const interestAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "LLM Applications",
  "Software Engineering",
  "Backend Systems",
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C", "Embedded C", "JavaScript", "TypeScript", "Shell Script"],
    icon: FaPython,
  },
  {
    title: "Web Technologies",
    items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "REST APIs"],
    icon: SiNodedotjs,
  },
  {
    title: "AI/ML",
    items: ["Computer Vision", "NLP", "CNNs", "RAG", "LLM APIs", "SHAP", "OpenCV"],
    icon: FaGithub,
  },
  {
    title: "Databases & Tools",
    items: ["Weaviate", "MongoDB", "PostgreSQL", "Firebase", "Milvus", "Git", "Docker", "Postman"],
    icon: SiPostgresql,
  },
];

export const skillChart: SkillMetric[] = [
  {
    label: "Python / ML Tooling",
    value: 91,
    tier: "Advanced",
    detail: "Built computer vision, NLP, RAG, and automation projects with Python-first workflows.",
    spotlight: true,
  },
  {
    label: "Full-Stack Engineering",
    value: 84,
    tier: "Strong",
    detail: "Shipping FastAPI, React/Next.js, Node.js, and REST API systems with clean structure.",
  },
  {
    label: "Computer Vision",
    value: 83,
    tier: "Strong",
    detail: "Processed large image datasets with OpenCV, CNNs, segmentation, and explainability.",
  },
  {
    label: "RAG / LLM Applications",
    value: 81,
    tier: "Strong",
    detail: "Building document ingestion, vector search, contextual Q&A, and adaptive workflows.",
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
  { label: "TypeScript Ready", icon: SiTypescript },
  { label: "Java Foundations", icon: SiOpenjdk },
  { label: "Node APIs", icon: SiNodedotjs },
  { label: "React/Next.js", icon: SiJavascript },
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
  heading: "Let's build intelligent systems that matter.",
  description:
    "I'm open to AI/ML Engineer, Full-Stack Developer, and Software Development Engineer opportunities, collaborative builds, and research-driven product work.",
};
