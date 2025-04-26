import React from "react";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h2 className="about-heading">👋 Hey, I'm Anish Nagula!</h2>
                <p className="about-text">
                    A BTech Computer Science student who loves breaking and building things in tech.
                </p>
                <p className="about-text">
                    I specialize in systems programming, OS development, and AI, constantly diving into low-level computing and performance optimization. 
                    My coding journey started with simple scripts, but now I’m building custom OS components, exploring AI-powered applications, and optimizing software using Rust and C.
                </p>

                <h2 className="about-subheading">🚀 What I’m Working On</h2>
                <ul className="about-list">
                    <li>💻 Custom OS Development → Bootloader, Kernel, File System</li>
                    <li>🔬 Smart Door Security System → Arduino, Sensors, AI Alerts</li>
                    <li>📚 Deep Dive into Rust → Advanced memory management, performance tweaks</li>
                </ul>

                <h2 className="about-subheading">🛠️ Things I’m Currently Into</h2>
                <ul className="about-list">
                    <li>AI & Low-Level Computing – Exploring how things work under the hood, from neural networks to kernel internals.</li>
                    <li>Rust & C – Writing code that’s closer to the metal because sometimes high-level just doesn’t cut it.</li>
                    <li>Side Projects – Building, scrapping, and rebuilding ideas on a loop. Some stick around, most don’t.</li>
                    <li>Music & Random Deep Dives – Discovering obscure bands, questioning reality at 2 AM, and going down rabbit holes just because.</li>
                </ul>
            </div>
        </div>
    );
}
