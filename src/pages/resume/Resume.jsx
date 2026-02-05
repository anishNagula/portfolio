// Resume.jsx
import React from "react";
import { Link } from "react-router-dom";
import pdf from "/Anish_Resume.pdf";

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <Link to="/" className="home-link">
          ← back
        </Link>
        <h1 className="intro">
          <p className="intro-p">
            my <span className="name_color">resume</span>
          </p>
        </h1>
        <a href={pdf} download className="resume-download">
          download pdf ↓
        </a>
      </div>

      <iframe
        src={pdf}
        title="Anish Nagula Resume"
        className="resume-iframe"
      ></iframe>

      <footer className="resume-footer">
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