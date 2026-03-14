const resumeData = {
  seo: {
    title: "Akhil | Software Developer Portfolio",
    description:
      "Full-stack portfolio highlighting experience, projects, skills, and education in a fast React and Express resume site.",
  },
  personalInfo: {
    name: "Akhil",
    title: "Software Developer",
    email: "akhilsenthil696@gmail.com",
    phone: "+91 00000 00000",
    location: "Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/akhil",
    github: "https://github.com/Akhils696",
    website: "https://github.com/Akhils696/Portfolio",
    tagline:
      "Building reliable full-stack products with clean APIs, thoughtful UI, and deployment-ready code.",
    availability: "Open to software developer and full-stack engineer roles",
  },
  quickFacts: [
    { label: "Primary Focus", value: "React, Node.js, Express" },
    { label: "Strength", value: "Shipping usable web experiences" },
    { label: "Workflow", value: "APIs, UI polish, iteration" },
  ],
  summary:
    "Software developer focused on turning ideas into clear, maintainable web experiences. Comfortable across frontend and backend work, with a practical approach to API design, responsive interfaces, and incremental product improvement.",
  highlights: [
    {
      title: "End-to-end delivery",
      description:
        "Owns implementation from backend routes through frontend presentation for cohesive product quality.",
    },
    {
      title: "UI refinement",
      description:
        "Improves portfolio and product interfaces with responsive layouts, clearer hierarchy, and stronger content framing.",
    },
    {
      title: "Developer experience",
      description:
        "Keeps projects approachable with clean structure, setup guidance, and reusable data models.",
    },
  ],
  experience: [
    {
      title: "Portfolio Project Lead",
      company: "Personal Projects",
      location: "Remote",
      period: "2024 - Present",
      achievements: ["React UI", "Node API", "Responsive design"],
      description: [
        "Built and iterated on personal web projects using React and Express.",
        "Structured frontend components and backend data responses for easier customization.",
        "Focused on clarity, maintainability, and recruiter-friendly presentation.",
      ],
    },
    {
      title: "Software Development Learner",
      company: "Hands-on Practice",
      location: "India",
      period: "2022 - 2024",
      achievements: ["Problem solving", "JavaScript", "Web fundamentals"],
      description: [
        "Practiced full-stack concepts through resume, portfolio, and application prototypes.",
        "Worked with JavaScript tooling, HTTP APIs, UI states, and deployment preparation.",
        "Strengthened debugging habits and iterative feature delivery.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree",
      school: "Add your university here",
      location: "India",
      period: "Add year range",
      achievements: ["Update with degree", "Add GPA or honors if relevant"],
    },
  ],
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    backend: ["Node.js", "Express", "REST APIs", "JSON"],
    tools: ["Git", "GitHub", "npm", "VS Code", "Postman"],
    workflow: ["Debugging", "Component Design", "API Integration", "Deployment Prep"],
  },
  projects: [
    {
      name: "Resume Website",
      description:
        "A full-stack portfolio app that serves structured resume data from an Express API and renders it in a polished React interface.",
      technologies: ["React", "Express", "Node.js", "CSS"],
      role: "Full-stack development",
      outcome: "Built a customizable portfolio base that can be adapted for job applications.",
      featured: true,
      repoUrl: "https://github.com/Akhils696/Portfolio",
      liveUrl: "",
    },
    {
      name: "API-driven Portfolio Iteration",
      description:
        "A project approach centered on improving content structure, visual storytelling, and recruiter readability over time.",
      technologies: ["REST API", "UI Design", "Content Strategy"],
      role: "Product iteration",
      outcome: "Created a stronger presentation format for skills, project proof, and career narrative.",
      featured: false,
      repoUrl: "https://github.com/Akhils696",
      liveUrl: "",
    },
  ],
  contact: {
    heading: "Let's build something useful",
    description:
      "If you are hiring for a software role or want to collaborate on a project, reach out by email or connect through GitHub and LinkedIn.",
    primaryCta: {
      label: "Email Akhil",
      href: "mailto:akhilsenthil696@gmail.com",
    },
    secondaryCta: {
      label: "View GitHub",
      href: "https://github.com/Akhils696",
    },
  },
};

module.exports = resumeData;
