// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, description, started, lastWorkedon, link }) {
  return (
    <div className="project-card-minimal">
      <div className="project-header">
        <h3>{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-minimal"
          >
            ↗
          </a>
        )}
      </div>
      <p className="project-desc">{description}</p>
      <span className="project-date-minimal">
        {started} — {lastWorkedon}
      </span>
    </div>
  );
}

export default function Projects() {
  const completedProjects = [
    {
      title: "Bash-PassMgr",
      description:
        "Minimal password manager using AES-256 encryption. No cloud, no dependencies.",
      started: "Apr 2024",
      lastWorkedon: "Apr 2024",
      link: "https://github.com/anishNagula/Bash-PassMgr",
    },
    {
      title: "ShadowExec",
      description:
        "Stealthy UDP-based remote command execution with RSA + AES hybrid encryption.",
      started: "Mar 2024",
      lastWorkedon: "Apr 2025",
      link: "https://github.com/anishNagula/ShadowExec",
    },
    {
      title: "GhostDrop",
      description:
        "P2P file sharing with download links & QR codes. React + Supabase.",
      started: "Mar 2025",
      lastWorkedon: "Mar 2025",
      link: "https://ghostdrop.anishnagula.me",
    },
    {
      title: "LeetCode-Backend",
      description:
        "Go backend with user auth, Python code execution, and problem management.",
      started: "Oct 2024",
      lastWorkedon: "Oct 2024",
      link: "https://github.com/anishNagula/Leetcode-Backend",
    },
    {
      title: "User & Product Mgmt",
      description:
        "C program using hash tables and binary trees with auto-recommendations.",
      started: "Sep 2024",
      lastWorkedon: "Sep 2024",
      link: "https://github.com/anishNagula/Simple-User-and-Product-Management-System",
    },
    {
      title: "Amazon-Clone",
      description: "Front-end project built with HTML/CSS/JS.",
      started: "Mar 2024",
      lastWorkedon: "Apr 2024",
      link: "https://github.com/anishNagula/Amazon-Clone",
    },
  ];

  const workingOnProjects = [
    {
      title: "NekoOS",
      description:
        "32-bit x86 OS from scratch—bootloader, protected mode, VGA output.",
      started: "May 2025",
      lastWorkedon: "Jun 2025",
      link: "https://github.com/anishNagula/NekoOS",
    },
    {
      title: "QuickBang",
      description: "Search tool with custom !bang shortcuts and keyboard nav.",
      started: "Jan 2025",
      lastWorkedon: "Mar 2025",
      link: "https://quickbang.netlify.app",
    },
    {
      title: "Whisper",
      description: "Private real-time chat with disappearing messages.",
      started: "Mar 2025",
      lastWorkedon: "Mar 2025",
      link: "",
    },
    {
      title: "DevLink",
      description: "MERN platform for devs to collaborate and share projects.",
      started: "Nov 2024",
      lastWorkedon: "Mar 2025",
      link: "",
    },
    {
      title: "Smart Door Security",
      description: "Sensor-based intrusion detection system.",
      started: "Mar 2025",
      lastWorkedon: "Mar 2025",
      link: "",
    },
  ];

  const futureProjects = [
    {
      title: "FormulaOne",
      description: "Real-time F1 tracker for races, drivers, and standings.",
      started: "—",
      lastWorkedon: "planned",
      link: "",
    },
    {
      title: "Tetris in Assembly",
      description: "Low-level Tetris with hardware graphics and input.",
      started: "—",
      lastWorkedon: "planned",
      link: "",
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <Link to="/" className="home-link">
          ← back
        </Link>
        <h1 className="intro">
          <p className="intro-p">
            my <span className="name_color">projects</span>
          </p>
        </h1>
        <p className="subtitle">stuff i've built & things i'm working on</p>
      </div>

      <div className="projects-grid">
        <div className="projects-column">
          <h2 className="column-label">completed</h2>
          {completedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="projects-column">
          <h2 className="column-label">
            in progress <span className="status-dot"></span>
          </h2>
          {workingOnProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="projects-column">
          <h2 className="column-label">planned</h2>
          {futureProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <footer className="projects-footer">
        <a
          href="https://github.com/anishNagula"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        •
        <a
          href="https://www.instagram.com/anishnagula"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        •
        <a
          href="https://buymeacoffee.com/anishnagula"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Me a Coffee
        </a>
      </footer>
    </div>
  );
}