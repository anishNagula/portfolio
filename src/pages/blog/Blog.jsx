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

      <div className="link-list">
      <Link to="/blog/why-os-is-not-a-process" className="card">
        <h2>why the os isn’t just a process</h2>
        <p>a systems thought about schedulers and kernels</p>
      </Link>

      <Link to="/blog/kernel-mode-is-just-a-bit" className="card">
        <h2>kernel mode is just a bit</h2>
        <p>why user programs can’t flip it</p>
      </Link>

      <Link to="/blog/open-source-and-incentives" className="card">
        <h2>open source and incentives</h2>
        <p>why critical software quietly breaks</p>
      </Link>

      <Link to="/blog/do-more-cores-mean-more-registers" className="card">
        <h2>do more cpu cores mean more registers?</h2>
        <p>thinking about hardware abstractions</p>
      </Link>
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