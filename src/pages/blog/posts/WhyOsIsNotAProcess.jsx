import React from "react";
import { Link } from "react-router-dom";

export default function WhyOsIsNotAProcess() {
  return (
    <div className="container">
      <Link to="/blog" className="home-link">
        ← back to blog
      </Link>

      <h1 className="intro">
        <p className="intro-p">
          why the <span className="name_color">os</span> isn’t just a process
        </p>
      </h1>

      <p className="subtitle">a systems thought that bothered me for a while</p>

      <div className="about-content">
        <div className="about-card-minimal">
          <p>
            If the operating system schedules processes, manages their memory,
            and controls their execution… why isn’t the OS itself just another
            process?
          </p>
          <p>
            It feels intuitive to imagine the OS sitting at the top — a “parent”
            process — with everything else as its children.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>my initial (wrong) intuition</h2>
          <p>
            I used to think the OS was always running in the background, constantly
            watching processes, deciding who runs next, moving them between states.
          </p>
          <p>
            But that mental model breaks the moment you ask a simple question:
            who schedules the scheduler?
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>what a process really is</h2>
          <p>
            A process is something that exists <strong>inside</strong> an operating
            system. It has:
          </p>
          <ul>
            <li>its own virtual address space</li>
            <li>saved register state</li>
            <li>defined transitions (running, blocked, etc.)</li>
          </ul>
          <p>
            All of this is bookkeeping done by the OS itself.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the kernel doesn’t “run” all the time</h2>
          <p>
            This was the key realization for me.
          </p>
          <p>
            The kernel is not a continuously executing program. It only runs when
            something forces it to:
          </p>
          <ul>
            <li>an interrupt fires</li>
            <li>a syscall is made</li>
            <li>an exception occurs</li>
          </ul>
          <p>
            It does its work quickly, then hands control right back to a user
            process.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>why the os cannot be a process</h2>
          <p>
            If the OS were a process:
          </p>
          <ul>
            <li>who would schedule it?</li>
            <li>who would handle its page faults?</li>
            <li>what happens when it blocks?</li>
          </ul>
          <p>
            You end up with an infinite regress — a scheduler that needs its own
            scheduler.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the model that finally clicked</h2>
          <p>
            I now think of the kernel as a collection of privileged code paths —
            not a task, not a process, not a thread.
          </p>
          <p>
            It’s entered briefly, does something critical, and exits.
          </p>
          <p>
            The OS doesn’t run <em>instead of</em> processes.  
            It runs <em>in between</em> them.
          </p>
        </div>
      </div>

      <footer>
        <span>anish</span>
        <span>•</span>
        <span>systems thoughts</span>
      </footer>
    </div>
  );
}
