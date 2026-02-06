import React from "react";
import { Link } from "react-router-dom";

export default function OpenSourceFailsBecauseIncentives() {
  return (
    <div className="container">
      <Link to="/blog" className="home-link">
        ← back to blog
      </Link>

      <h1 className="intro">
        <p className="intro-p">
          open source fails because of{" "}
          <span className="name_color">incentives</span>
        </p>
      </h1>

      <p className="subtitle">not because of bad code</p>

      <div className="about-content">
        <div className="about-card-minimal">
          <p>
            Some of the most important software on the internet is maintained by
            one person. Sometimes by no one.
          </p>
          <p>
            And yet, millions of systems quietly depend on it every single day.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the invisible foundation</h2>
          <p>
            Modern software is a dependency graph stacked on top of other
            dependency graphs.
          </p>
          <p>
            Libraries you’ve never heard of might sit directly beneath the
            frameworks you use every day.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>popularity ≠ importance</h2>
          <p>
            Stars, downloads, and hype don’t measure how critical a project is.
          </p>
          <p>
            A tiny compression library might be more important than a shiny new
            frontend framework — but nobody tweets about maintaining it.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>maintenance is not rewarding</h2>
          <p>
            Writing new code is visible. Maintenance is not.
          </p>
          <p>
            Fixing bugs, reviewing PRs, and responding to security issues rarely
            translate into status, money, or recognition.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>so what actually breaks</h2>
          <p>
            Open source doesn’t usually fail loudly.
          </p>
          <p>
            It decays.
          </p>
          <p>
            Maintainers burn out. Issues pile up. Security holes linger. Everyone
            assumes someone else is handling it.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>a thought that keeps coming back</h2>
          <p>
            What if we ranked projects not by popularity, but by how much other
            software depends on them?
          </p>
          <p>
            What if maintaining critical infrastructure was visible and valued?
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the takeaway</h2>
          <p>
            Open source is infrastructure.
          </p>
          <p>
            And infrastructure doesn’t fail because it’s poorly written — it
            fails because nobody is incentivized to take care of it.
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
