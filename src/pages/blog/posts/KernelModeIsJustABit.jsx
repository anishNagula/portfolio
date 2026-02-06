import React from "react";
import { Link } from "react-router-dom";

export default function KernelModeIsJustABit() {
  return (
    <div className="container">
      <Link to="/blog" className="home-link">
        ← back to blog
      </Link>

      <h1 className="intro">
        <p className="intro-p">
          kernel mode is just a <span className="name_color">bit</span>
        </p>
      </h1>

      <p className="subtitle">so why can’t we just flip it?</p>

      <div className="about-content">
        <div className="about-card-minimal">
          <p>
            When I first learned about kernel mode and user mode, it sounded
            mystical. Special. Almost magical.
          </p>
          <p>
            Then I learned the uncomfortable truth: it’s literally represented
            by a bit.
          </p>
          <p>
            Naturally, my next thought was — if it’s just a bit, why can’t a
            program flip it?
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the naive idea</h2>
          <p>
            If switching to kernel mode were as easy as setting a flag, any
            process could give itself full access to memory, devices, and the
            CPU.
          </p>
          <p>
            Which would be… catastrophic.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>where the bit actually lives</h2>
          <p>
            That bit isn’t sitting in normal memory.
          </p>
          <p>
            It lives inside a <strong>privileged CPU register</strong>, and the
            hardware itself enforces who can read or write it.
          </p>
          <p>
            User-mode code simply does not have the instructions required to
            change it.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>what happens if you try anyway</h2>
          <p>
            If user code attempts a privileged instruction, the CPU doesn’t
            “politely refuse”.
          </p>
          <p>
            It traps.
          </p>
          <p>
            Control is immediately transferred to the kernel, and the process
            is usually terminated.
          </p>
          <p>
            The instruction never executes.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>hardware is the real security boundary</h2>
          <p>
            This is the part that really clicked for me.
          </p>
          <p>
            Security here isn’t based on trust, policy, or convention. It’s
            based on <strong>impossibility</strong>.
          </p>
          <p>
            The hardware is designed such that certain actions literally cannot
            be performed from user mode.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>is one bit really enough?</h2>
          <p>
            Surprisingly, yes — when combined with:
          </p>
          <ul>
            <li>privilege rings</li>
            <li>separate page tables</li>
            <li>controlled entry points (syscalls, interrupts)</li>
            <li>instruction-level checks</li>
          </ul>
          <p>
            That “one bit” becomes part of a much larger, layered defense.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the takeaway</h2>
          <p>
            Kernel mode feels powerful not because it’s complex, but because
            it’s protected by hardware rules you cannot bypass.
          </p>
          <p>
            It’s not about hiding the switch.
          </p>
          <p>
            It’s about making sure your fingers can never reach it.
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
