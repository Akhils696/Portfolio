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

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
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

export const experienceItems: TimelineItem[] = [
  {
    title: "Python Development Intern",
    organization: "ShadowFox",
    period: "May 2025",
    summary:
      "Virtual internship focused on Python-based problem solving, modular code, and clean implementation habits.",
    highlights: [
      "Built Python solutions with attention to readability and maintainability",
      "Practiced modular design across small development tasks",
      "Strengthened debugging, documentation, and problem decomposition workflows",
    ],
  },
];

export const researchItems: TimelineItem[] = [
  {
    title: "Multidimensional Assessment of Drinking Water Scarcity",
    organization: "International Conference on Sustainable Resilience (ICSRF)",
    period: "2025",
    summary:
      "Authored and presented applied research on socio-economic impacts using HCD and PRA methodologies.",
    highlights: [
      "Presented at ICSRF 2025",
      "Analyzed water scarcity through human-centered and participatory research methods",
      "Connected data-driven engineering thinking with sustainable resilience challenges",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Evo Academy - AI-Powered Adaptive Learning Platform",
    description:
      "A personalized AI learning platform using LLMs and RAG to turn PDFs and notes into contextual Q&A, quizzes, and adaptive learning recommendations.",
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
      "Document ingestion pipeline that converts learning material into vector embeddings",
      "Semantic retrieval and document-grounded answer generation",
      "Adaptive quiz and recommendation flows driven by learner progress",
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
      "A real-time emergency call processing system that combines speech-to-text, NLP, and ML classification to support faster dispatch decisions.",
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
      "Severity scoring, location detection, and entity extraction",
      "FastAPI backend with real-time dashboard support for dispatch workflows",
    ],
  },
  {
    title: "CyberAgent - AI Cybersecurity Multi-Agent System",
    description:
      "A multi-agent security orchestration platform using LangChain/CrewAI-style agents to automate cybersecurity workflows, defense tasks, and controlled simulations.",
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
      "Tool integrations for automated defense and attack simulation",
      "REST API, Docker, and orchestration patterns for scalable cyber operations",
    ],
  },
  {
    title: "Centrifugal Atomizer Droplet Analysis using AI",
    description:
      "An AI-assisted experimental analysis pipeline that processed 100k+ droplet images with OpenCV, segmentation, CNN models, and explainability methods.",
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
      "OpenCV preprocessing and candidate detection across large image batches",
      "SAM-based segmentation with CNN regression for droplet analysis",
      "SHAP-based explainability to make model outputs easier to inspect",
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
