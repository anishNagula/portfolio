import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-link-back">
        <Link to="/home"> {`<-`} Back To Home</Link>
      </div>
      <p>
        I’m Anish — a curious, no-nonsense problem solver who thrives on breaking things apart just to put them back together, but better. 🛠️ Whether it’s coding, optimizing workflows, or questioning why something is done a certain way, I don’t just accept things at face value. If there’s a more efficient way to do something, I will find it.🔪
      </p>
      <p>
        I have a love-hate relationship with web development 💻, a growing fascination with AI 🤖, and a borderline obsession with operating systems and low-level computing ⚙️. One day, I might be writing Rust just for fun 🦀; the next, I’ll be deep-diving into the Linux kernel 🐧 trying to understand what makes it tick. I love thinking in systems, leveraging what I know to maximize efficiency, and pushing myself past my comfort zone.
      </p>
      <p>
        But life isn’t just about code. Music keeps me sane 🎶— whether it’s rock 🎸, jazz 🎷, punk 🎧, or something completely random I found at 2 AM. I enjoy deep conversations, especially about philosophy, tech, or the weird quirks of the universe. When I’m not debugging something (which, let’s be real, is most of the time 🫠), I’m probably tinkering with new ideas, questioning my life choices, or dreaming up my next big project—only to delete and restart it a week later. 🔄
      </p>
      <p>
        At the core, I just want to build cool things, challenge myself, and never stop learning. If that means rewriting my OS project from scratch three times, so be it. 💀🔥
      </p>
    </div>
  );
}
