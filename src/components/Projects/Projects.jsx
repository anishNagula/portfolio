import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "QuickBang",
    details: "A simple and lightweight search tool which emulates browser-custom bang shortcuts (!bang) for quick redirections to various search engines and websites. Supports dropdown suggestions, arrow key navigation, and auto-search on selection.",
    startTime: "Nov 2024",
    lastWorkedOn: "Dec 2024",
    technologies: ["React"],
    contributors: "Anish Nagula",
    future: "Convetring it into an all-in-one search engine",
    challenges: "Accurately summarizing technical PDFs.",
    site: "https://quickbang.netlify.app",
    link: "https://github.com/anishNagula/Quick-Search-A-Custom-Bang-Search-Engine",
  },
  {
    name: "LeetCode-Backend",
    details: "A simple backend system built in Go, designed to emulate core features of platforms like LeetCode. This project includes user authentication, running code in python, and managing coding problems with test cases.",
    startTime: "Nov 2024",
    lastWorkedOn: "Dec 2024",
    technologies: ["Golang"],
    contributors: "Anish Nagula",
    future: "Enhancing performance and adding more features.",
    challenges: "Accurately summarizing technical PDFs.",
    link: "https://github.com/anishNagula/Leetcode-Backend",
  },
  {
    name: "Simple-User/Product-Management-System",
    details: "This is a basic C program that helps manage user and product information. The program uses hash tables for organizing products and binary trees to keep track of what user purchases. Every time a user purchases a product he will be automatically recommended related products using hashtables.",
    startTime: "Oct 2024",
    lastWorkedOn: "Oct 2024",
    technologies: ["C", "DSA"],
    contributors: "Anish Nagula",
    future: "Converting it into a WebApp",
    challenges: "Figuring out how hastables work and the designing of the suggestion algorithm ",
    link: "https://github.com/anishNagula/Simple-User-and-Product-Management-System",
  },
  {
    name: "OS Dev",
    details: "Building a minimal OS from scratch using Rust and C.",
    startTime: "Jan 2025",
    lastWorkedOn: "Current",
    technologies: ["Rust", "C", "QEMU", "Assembly"],
    contributors: "Anish Nagula",
    future: "Get a full flegded Tetris game running on it.",
    challenges: "Understanding bootloaders and memory management.",
    link: "",
  },
  {
    name: "Student Hub",
    details:
      "A platform where students can connect with like-minded people and work on projects or get internships and maybe even launch their own startup.",
    startTime: "Jul 2024",
    lastWorkedOn: "Jan 2025",
    technologies: ["React", "Node.js", "MongoDB"],
    contributors: "Anish Nagula, Atharva Buthada, Sai Ganesh, Srivatsan",
    future: "Get the backend running and launch it for students to use.",
    challenges: "Implementing real-time communication and scaling.",
    site: "https://studenthub-codeberry.vercel.app/home",
    link: "https://github.com/yourrepo/student-hub",
  },
  {
    name: "File Explorer",
    details: "A Rust-based file explorer with a TUI.",
    startTime: "Jan 2025",
    lastWorkedOn: "Current",
    technologies: ["Rust", "TUI-rs"],
    contributors: "Anish Nagula",
    future: "Convert it into a package for people to download and use.",
    challenges: "Handling large file systems efficiently.",
    link: "",
  },
  {
    name: "Text Editor",
    details: "A lightweight text editor built in Rust.",
    startTime: "Jan 2025",
    lastWorkedOn: "Current",
    technologies: ["Rust", "Editor APIs"],
    contributors: "Anish Nagula",
    future: "Convert it into a package for people to download and use.",
    challenges: "Implementing syntax highlighting and undo/redo.",
    link: "",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setShowHelp(false);
      } else if (e.key === "?") {
        setShowHelp(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Projects</h2>
        <h6>
          <Link to="/home"> {`<-`} Back To Home</Link>
        </h6>
        <ul>
          {projects.map((project) => (
            <li
              key={project.name}
              className={selectedProject?.name === project.name ? "selected" : ""}
              onClick={() => setSelectedProject(project)}
            >
              &#10095; {project.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="content terminal-style fun-theme">
        {selectedProject ? (
          <div className="floating-panel enhanced-layout">
            <h1>{selectedProject.name}</h1>
            <p className="project-time">
              {selectedProject.startTime} | {selectedProject.lastWorkedOn}
            </p>

            <h3>🔹 Overview</h3>
            <p className="overview">{selectedProject.details}</p>

            <h3>🔹 Technologies Used</h3>
            <ul className="tech-list">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <h3>🔹 Challenges Faced & Learnings</h3>
            <p className="challenges">{selectedProject.challenges}</p>

            <h3>🔹 Links & Code</h3>
            <p className="links">
              {selectedProject.link ? (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              ) : (
                "Will be on GitHub soon"
              )}
            </p>

            <h3>🔹 Future Plans</h3>
            <p className="future">
              {selectedProject.future}
            </p>

            <h3>🔹 Project Contributors</h3>
            <p className="contributors">{selectedProject.contributors}</p>

            {selectedProject.site && (
              <button
                className="visit-site-btn"
                onClick={() => window.open(selectedProject.site, "_blank")}
              >
                Visit Site &#8599;
              </button>
            )}
          </div>
        ) : (
          <div className="welcome-message fun-welcome">
            <h3>👋 Welcome!</h3>
            <p>Select a project from the sidebar to explore more details.</p>
          </div>
        )}
      </div>

      <div className="status-bar colorful-status">
        <span className="fileStatusBar">
          {selectedProject ? `📂 Selected: ${selectedProject.name}` : "📁 No project selected"}
        </span>
        <span className="help-text" onClick={() => setShowHelp(true)}>
          Press ? for help
        </span>
      </div>

      {showHelp && (
        <div className="help-popup animated-popup">
          <h3>📜 Help</h3>
          <p>❌ Press Esc to deselect.</p>
          <p>❓ Press ? to show this help.</p>
          <button onClick={() => setShowHelp(false)}>Got it! 🎯</button>
        </div>
      )}
    </div>
  );
}
