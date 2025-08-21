import React from "react";
import { FaCode, FaPaintBrush, FaTools, FaBrain, FaRocket, FaMusic, FaLanguage, FaTerminal } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

// You can create a small helper component for section titles to keep the main component clean
const SectionTitle = ({ icon, title }) => (
    <h2 className="section-title">
        {icon}
        <span>{title}</span>
    </h2>
);

export default function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <p className="about-intro">
                        A Computer Science student passionate about building and breaking things in tech. I enjoy diving into low-level systems to make software faster, more efficient, and secure.
                    </p>
                </div>

                <div className="about-grid">
                    {/* Skills Section */}
                    <div className="about-card skills-card">
                        <SectionTitle icon={<FaBrain />} title="My Skillset" />
                        <div className="skills-category">
                            <h3><FaLanguage /> Languages</h3>
                            <div className="skills-list">
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">C</span>
                                <span className="skill-tag">Go</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Rust</span>
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">Bash</span>
                                <span className="skill-tag">Assembly</span>
                                <span className="skill-tag">Verilog</span>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h3><FaTools /> Tools & Frameworks</h3>
                            <div className="skills-list">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Linux</span>
                                <span className="skill-tag">VS Code</span>
                                <span className="skill-tag">Postman</span>
                                <span className="skill-tag">Arduino</span>
                            </div>
                        </div>
                    </div>

                    {/* What I'm Working On Section */}
                    <div className="about-card">
                        <SectionTitle icon={<FaRocket />} title="What I'm Building" />
                        <ul className="project-list">
                            <li>
                                <strong>Secure Communication Systems</strong>
                                <p>Designing encrypted communication protocols and tools focused on privacy and resilience.</p>
                            </li>
                            <li>
                                <strong>Self-Sovereign Identity Solutions</strong>
                                <p>Building decentralized identity systems where users own and control their credentials.</p>
                            </li>
                            <li>
                                <strong>Applied AI for Real-World Problems</strong>
                                <p>Developing AI-powered tools that automate tasks and optimize complex workflows.</p>
                            </li>
                        </ul>
                    </div>

                    {/* What I'm Into Section */}
                    <div className="about-card">
                        <SectionTitle icon={<GoGoal />} title="What I'm Into" />
                        <ul className="interest-list">
                            <li>
                                <FaTerminal className="interest-icon" />
                                <div>
                                    <strong>Systems & AI</strong>
                                    <span>Exploring how computers and AI work at a fundamental level.</span>
                                </div>
                            </li>
                            <li>
                                <FaCode className="interest-icon" />
                                <div>
                                    <strong>Rust & C Programming</strong>
                                    <span>Writing low-level code that interfaces directly with hardware.</span>
                                </div>
                            </li>
                            <li>
                                <FaMusic className="interest-icon" />
                                <div>
                                    <strong>Music & Deep Dives</strong>
                                    <span>Listening to music and getting lost in random technical topics.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}