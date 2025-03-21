import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import styles from './home.module.css'

function ProjComp({ title, description, tech }) {
  return (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {tech}</p>
    </div>
  );
}

function TechStack() {
  const techSkills = [
    { name: "C", icon: "🔵" },
    { name: "Rust", icon: "🦀" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Go", icon: "🐹" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌿" },
    { name: "Linux", icon: "🐧" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <div className={styles.techStack}>
      {techSkills.map((tech, index) => (
        <div key={index} className={styles.techItem}>
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
}


export default function Home() {
    return (
        <div className={styles.main}>
          <Layout/>
          <div className={styles.topcontainer}>
            <div className={styles.leftcontainer}>
              <h2>👋 Hey, I'm Anish Nagula!</h2>
              <p>A BTech Computer Science student who loves breaking and building things in tech.</p>
              <p>I specialize in systems programming, OS development, and AI, constantly diving into low-level computing and performance optimization. My coding journey started with simple scripts, but now I’m building custom OS components, exploring AI-powered applications, and optimizing software using Rust and C.</p>
              <h2>🚀 What I’m Working On</h2>
              <ul>
                <li>💻 Custom OS Development → Bootloader, Kernel, File System</li>
                <li>🔬 Smart Door Security System → Arduino, Sensors, AI Alerts</li>
                <li>📚 Deep Dive into Rust → Advanced memory management, performance tweaks</li>
              </ul>
              <h2>🛠️ Things I’m Currently Into</h2>
              <ul>
                <li>AI & Low-Level Computing – Exploring how things work under the hood, from neural networks to kernel internals.</li>
                <li>Rust & C – Writing code that’s closer to the metal because sometimes high-level just doesn’t cut it.</li>
                <li>Side Projects – Building, scrapping, and rebuilding ideas on a loop. Some stick around, most don’t.</li>
                <li>Music & Random Deep Dives – Discovering obscure bands, questioning reality at 2 AM, and going down rabbit holes just because.</li>
              </ul>
            </div>
            <div className={styles.rightcontainer}>
              <h2>📌 Featured Projects</h2>
              <ProjComp 
                title="QuickBang" 
                description="A simple and lightweight search tool with custom bang shortcuts (!bang)." 
                tech="JavaScript" 
              />
              <ProjComp 
                title="Custom OS Development" 
                description="Building a minimal OS with a custom bootloader and kernel." 
                tech="Rust, C, Assembly" 
              />
              <ProjComp 
                title="Leetcode-Backend" 
                description="Simple LeetCode backend emulator written in Go." 
                tech="Go" 
              />
            </div>
          </div>
          <div className={styles.bottomcontainer}>
            <h2>⚙️ Tech Stack</h2>
            <TechStack />
          </div>
          <div className={styles.mylinks}>
            <ul>
              <li><a href="https://github.com/anishnagula" target="_blank">Github</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/anish-nagula-5369a030a/">Linkedin</a></li>
              <li><a target="_blank" href="mailto:anish.nagula@gmail.com">Mail</a></li>
              <li><a target="_blank" href="https://www.instagram.com/anishnagula/">Instagram</a></li>
            </ul>
          </div>
        </div>
    );
}
