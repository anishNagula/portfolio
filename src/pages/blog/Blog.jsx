// Blog.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="container">
      <Link to="/" className="home-link">
        ← back
      </Link>

      <h1 className="intro">
        <p className="intro-p">
          my <span className="name_color">blog</span>
        </p>
      </h1>

      <p className="subtitle">thoughts, notes & random stuff</p>

      <div className="empty-state">
        <span className="empty-404">404</span>
        <p className="empty-message">nothing to see here yet</p>
        <p className="empty-sub">check back soon — i'm working on it</p>
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