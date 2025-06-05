import React from "react";
import calenderIcon from '../../assets/calendar.svg';

function ProjectCard({ title, description, started, lastWorkedon, link }) {
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-bottom">
                <div className="project-date">
                    <img src={calenderIcon} alt="calendar icon" className="calendar-icon" />
                    <p>{started} - {lastWorkedon}</p>
                </div>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit <sup>&#8599;</sup>
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const completedProjects = [
        { title: "Bash-PassMgr", description: "A minimal password manager that securely stores your credentials using AES-256 encryption with OpenSSL. No cloud storage, no third-party dependencies—just a lightweight, local password manager.", started: "Apr 20205", lastWorkedon: "Apr 2024", link: "https://github.com/anishNagula/Bash-PassMgr" },
        { title: "ShadowExec", description: "A stealthy, encrypted UDP-based remote command execution system with RSA + AES hybrid encryption and command whitelisting. ", started: "Mar 2024", lastWorkedon: "Apr 2025", link: "https://github.com/anishNagula/ShadowExec" },
        { title: "GhostDrop", description: "A privacy-focused, peer-to-peer file-sharing app that generates a download link & QR code for seamless transfers between devices. No accounts, no hassle. Built with React + Supabase.", started: "Mar 2025", lastWorkedon: "Mar 2025", link: "https://ghostdrop.anishnagula.me" },
        { title: "LeetCode-Backend", description: "A simple backend system built in Go, designed to emulate core features of platforms like LeetCode. This project includes user authentication, running code in python, and managing coding problems with test cases.", started: "Oct 2024", lastWorkedon: "Oct 2024", link: "https://github.com/anishNagula/Leetcode-Backend" },
        { title: "Simple-User-and-Product-Management-System", description: "This is a basic C program that helps manage user and product information. The program uses hash tables for organizing products and binary trees to keep track of what user purchases. Every time a user purchases a product he will be automatically recommended related products using hashtables.", started: "Sep 2024", lastWorkedon: "Sep 2024", link: "https://github.com/anishNagula/Simple-User-and-Product-Management-System" },
        { title: "Amazon-Clone", description: "Built as a project when learning basic front-end development. Used languages such as HTML/CSS/JavaScript", started: "Mar 2024", lastWorkedon: "Apr 2024", link: "https://github.com/anishNagula/Amazon-Clone" },
    ];

    const workingOnProjects = [
        { title: "NekoOS", description: "A minimalist 32-bit x86 operating system built from scratch in C and Assembly. Features include a custom bootloader, protected mode transition, VGA text output, and direct keyboard input handling via scancodes. ", started: "May 2025", lastWorkedon: "Jun 2025", link: "https://github.com/anishNagula/NekoOS" },
        { title: "QuickBang", description: "A simple and lightweight search tool with custom bang shortcuts (!bang) for quick redirections to various search engines and websites. Supports dropdown suggestions, arrow key navigation, and auto-search on selection.", started: "Jan 2025", lastWorkedon: "Mar 2025", link: "https://quickbang.netlify.app" },
        { title: "Whisper", description: "A private, real-time chat app with disappearing messages and secure friend-to-friend conversations.", started: "Mar 2025", lastWorkedon: "Mar 2025", link: "https://anishnagula.me/projects" },
        { title: "DevLink", description: "A MERN stack application where developers can collaborate, share projects, and engage in discussions. Users can showcase their work, connect with others, and contribute to open-source initiatives.", started: "Nov 2024", lastWorkedon: "Mar 2025", link: "" },
        { title: "Smart Door Security System", description: "Uses sensors to detect intrusions", started: "Mar 2025", lastWorkedon: "Mar 2025", link: "" },
    ];

    const futureProjects = [
        { title: "FormulaOne", description: "An application that allows users to track races, drivers, and team standings in real time. Users can view race results, explore driver stats, and engage with the latest F1 updates.", started: "yet", lastWorkedon: "to start", link: "" },
        { title: "Tetris in Assembly", description: "A low-level implementation of the classic Tetris game using assembly language. It focuses on optimizing performance, managing graphics, and handling input at the hardware level.", started: "yet", lastWorkedon: "to start", link: "" },
    ];

    return (
        <div className="projects-main">
            <div className="projects-columns">
                <div className="projects-column">
                    <h2>Completed</h2>
                    {completedProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className="projects-column">
                    <h2>Currently Working On</h2>
                    {workingOnProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className="projects-column">
                    <h2>To Do in Future</h2>
                    {futureProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
