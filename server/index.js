const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/resume', (req, res) => {
  res.json({
    personalInfo: {
      name: "Akhil",
      title: "Software Developer",
      email: "akhil@example.com",
      phone: "+1 (555) 123-4567",
      location: "Your City, Country",
      linkedin: "https://linkedin.com/in/akhil",
      github: "https://github.com/akhil",
      website: "https://akhil.dev"
    },
    summary: "Experienced software developer with a passion for creating innovative solutions. Skilled in full-stack development, problem-solving, and collaborating with cross-functional teams to deliver high-quality applications.",
    experience: [
      {
        title: "Senior Software Developer",
        company: "Tech Company Inc.",
        location: "City, Country",
        period: "2021 - Present",
        description: [
          "Developed and maintained web applications using React, Node.js, and Express",
          "Collaborated with team members to design and implement new features",
          "Optimized application performance and improved user experience",
          "Mentored junior developers and conducted code reviews"
        ]
      },
      {
        title: "Software Developer",
        company: "StartupXYZ",
        location: "City, Country",
        period: "2019 - 2021",
        description: [
          "Built responsive web applications using modern JavaScript frameworks",
          "Integrated third-party APIs and services",
          "Participated in agile development processes"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University Name",
        location: "City, Country",
        period: "2015 - 2019",
        achievements: ["Dean's List", "GPA: 3.8/4.0"]
      }
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      frontend: ["React", "HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind CSS"],
      backend: ["Node.js", "Express", "REST APIs", "GraphQL"],
      databases: ["MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    },
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce application with payment integration",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://github.com/akhil/ecommerce"
      },
      {
        name: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
        link: "https://github.com/akhil/taskmanager"
      }
    ]
  });
});

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Error: Port ${PORT} is already in use!`);
    console.error(`\nTo fix this, you can:`);
    console.error(`1. Kill the process using port ${PORT}:`);
    console.error(`   - Windows: taskkill /PID <process_id> /F`);
    console.error(`   - Or find it with: netstat -ano | findstr :${PORT}`);
    console.error(`2. Use a different port by setting PORT environment variable:`);
    console.error(`   - Create a .env file with: PORT=5001`);
    console.error(`   - Or run: set PORT=5001 && npm run server\n`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});



