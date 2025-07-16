// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const links = [
  { title: "about me 👤", description: "some stuff about me + random facts", url: "/about" },
  { title: "resume 🧾", description: "my pdf resume, updated(ish)", url: "/resume" },
  { title: "projects ⚡", description: "stuff i built/building", url: "/projects" },
  { title: "blog ✏️", description: "my thoughts on stuff", url: "/blog" },
];


export default function Home() {
  return (
    <div className="container">
      <h1 className="intro">hi, i'm anish.</h1>
      <p className="subtitle">
        i build things no one asked for —<br />
        and somehow, they work (usually...🤞).
      </p>
      <Link to="/spot"><p className="home-link">link to my secret home</p></Link>
      <div className="link-list">
        {links.map((link, idx) => (
          <Link to={link.url} className="card" key={idx}>
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </div>
      <footer>
        <a href="https://github.com/anishNagula" target="_blank" rel="noopener noreferrer">GitHub</a>
        •
        <a href="https://www.instagram.com/anishnagula" target="_blank" rel="noopener noreferrer">Instagram</a>
        •
        <a href="https://buymeacoffee.com/anishnagula" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
      </footer>
    </div>
  );
}
