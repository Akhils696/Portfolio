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

export const skillChart = [
  { label: "Python / ML Tooling", value: 90 },
  { label: "Backend Engineering", value: 82 },
  { label: "Computer Vision", value: 78 },
  { label: "Web Development", value: 80 },
  { label: "Systems Thinking", value: 76 },
];

export const focusBadges = [
  { label: "Python First", icon: FaPython },
  { label: "Java Foundations", icon: SiOpenjdk },
  { label: "Node APIs", icon: SiNodedotjs },
  { label: "Frontend Logic", icon: SiJavascript },
];

export const projects: Project[] = [
  {
    title: "RAG LLM Learning System",
    description:
      "An intelligent learning assistant that uses Retrieval Augmented Generation (RAG) to answer academic questions with context-aware explanations.",
    category: "AI",
    stack: ["Python", "LangChain", "Vector Databases", "LLM APIs"],
    features: ["Semantic search", "Contextual answers", "Document embeddings"],
  },
  {
    title: "Hybrid OpenCV Domain Adaptation System",
    description:
      "A computer vision system designed to adapt models across domains using OpenCV preprocessing and hybrid learning techniques.",
    category: "ML",
    stack: ["Python", "OpenCV", "NumPy", "Machine Learning"],
    features: ["Domain shift handling", "Image preprocessing pipeline", "Model evaluation metrics"],
  },
  {
    title: "Peer-to-Peer WiFi + Bluetooth Mesh Network",
    description:
      "A decentralized communication network using WiFi Direct and Bluetooth Mesh for device-to-device data exchange without internet.",
    category: "Systems",
    stack: ["Embedded C", "Networking protocols", "IoT communication"],
    features: ["Mesh routing", "Offline communication", "Device discovery"],
  },
  {
    title: "AI Code Analysis Assistant",
    description:
      "A tool that scans software repositories and identifies API connection issues, dependency loops, and architectural problems.",
    category: "AI",
    stack: ["Python", "Static analysis", "LLM based reasoning"],
    features: ["Code dependency graph", "API error detection", "Debugging insights"],
  },
  {
    title: "Intelligent Learning Analytics System",
    description:
      "An ML system that analyzes student learning behavior and predicts performance using data-driven insights.",
    category: "ML",
    stack: ["Python", "Scikit-learn", "Pandas", "Data Visualization"],
    features: ["Performance prediction", "Learning pattern analysis", "Data dashboards"],
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
