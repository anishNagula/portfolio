import React from "react";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h2 className="about-heading">👋 Hey, I'm Anish Nagula!</h2>
                <p className="about-text">
                    I'm a BTech Computer Science student who likes building and breaking things in tech.
                </p>
                <p className="about-text">
                    I work mostly with systems programming, OS development, and Webdev.
                </p>
                <p className="about-text">
                    I enjoy getting into low-level stuff and making software faster and better.
                </p>

                <h2 className="about-subheading">🛠️ What I'm Working On</h2>
                <ul className="about-list">
                    <li>
                        <strong>Secure Communication Systems</strong><br />
                        Designing encrypted communication protocols and tools focused on privacy, authentication, and resilience over networks.
                    </li>
                    <li>
                        <strong>Self-Sovereign Identity Solutions</strong><br />
                        Building decentralized identity systems where users own and control their credentials using cryptography.
                    </li>
                    <li>
                        <strong>Applied AI for Real-World Problems</strong><br />
                        Developing AI-powered tools that automate tasks, optimize workflows, and solve domain-specific challenges beyond text generation.
                    </li>
                </ul>

                <h2 className="about-subheading">⚡ What I'm Into</h2>
                <ul className="about-list">
                    <li><strong>Systems and AI</strong><br />
                        Learning how computers and AI work at a deeper level.
                    </li>
                    <li><strong>Rust and C Programming</strong><br />
                        Writing low-level code that talks closely to hardware.
                    </li>
                    <li><strong>Music and Random Stuff</strong><br />
                        Listening to music, reading about random topics.
                    </li>
                </ul>

                <h2 className="about-subheading">🧠 Skills</h2>
                <ul className="about-list">
                    <li><strong>Languages:</strong> Python, C, Go, JavaScript, Rust, SQL, Bash, Assembly (Beginner), Verilog (Beginner)</li>
                    <li><strong>Tools:</strong> React, Node.js, MongoDB, Git, Linux, VS Code, Postman, Arduino IDE</li>
                </ul>
            </div>
        </div>
    );
}
