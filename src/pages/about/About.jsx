// About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <Link to="/" className="home-link">
        ← back
      </Link>

      <h1 className="intro">
        <p className="intro-p">
          about <span className="name_color">me</span>
        </p>
      </h1>

      <p className="subtitle">
        cs student. building & breaking things in tech.
      </p>

      <div className="about-content">
        <div className="about-card-minimal">
          <h2>languages</h2>
          <p>Python, C, Go, JavaScript, Rust, SQL, Bash, Assembly, Verilog</p>
        </div>

        <div className="about-card-minimal">
          <h2>tools</h2>
          <p>React, Node.js, MongoDB, Git, Linux, Arduino</p>
        </div>

        <div className="about-card-minimal">
          <h2>currently building</h2>
          <ul>
            <li>
              <strong>secure communication systems</strong> — encrypted
              protocols focused on privacy
            </li>
            <li>
              <strong>self-sovereign identity</strong> — decentralized systems
              where users own their data
            </li>
            <li>
              <strong>applied ai tools</strong> — automating tasks & optimizing
              workflows
            </li>
          </ul>
        </div>

        <div className="about-card-minimal">
          <h2>interests</h2>
          <ul>
            <li>systems programming & ai internals</li>
            <li>low-level rust & c</li>
            <li>music & random technical rabbit holes</li>
          </ul>
        </div>
      </div>

      <footer>
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