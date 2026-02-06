import React from "react";
import { Link } from "react-router-dom";

export default function DoMoreCoresMeanMoreRegisters() {
  return (
    <div className="container">
      <Link to="/blog" className="home-link">
        ← back to blog
      </Link>

      <h1 className="intro">
        <p className="intro-p">
          do more cpu cores mean more{" "}
          <span className="name_color">registers</span>?
        </p>
      </h1>

      <p className="subtitle">a question about hardware illusions</p>

      <div className="about-content">
        <div className="about-card-minimal">
          <p>
            This question popped into my head while thinking about parallelism.
          </p>
          <p>
            If a CPU has more cores, does that mean it has more registers for
            programs to use?
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>what the compiler thinks exists</h2>
          <p>
            Compilers don’t target physical hardware.
          </p>
          <p>
            They target an abstract machine defined by the ISA.
          </p>
          <p>
            That means the number of registers is fixed — regardless of how many
            cores the CPU has.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>what the hardware actually does</h2>
          <p>
            Each core has its own private register file.
          </p>
          <p>
            So an 8-core CPU doesn’t give one program 8× the registers — it gives
            8 independent execution contexts.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the hidden layer</h2>
          <p>
            Modern CPUs go even further.
          </p>
          <p>
            Internally, they use register renaming, speculative execution, and
            physical registers that vastly outnumber the architectural ones.
          </p>
          <p>
            The compiler never sees this.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>who knows about the cores then?</h2>
          <p>
            The OS and runtime do.
          </p>
          <p>
            They decide which thread runs on which core, when registers are
            saved, and when state is restored.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the illusion that matters</h2>
          <p>
            To the compiler, the machine always looks the same.
          </p>
          <p>
            To the hardware, everything is parallel and duplicated.
          </p>
          <p>
            The abstraction boundary is deliberate — and incredibly powerful.
          </p>
        </div>

        <div className="about-card-minimal">
          <h2>the takeaway</h2>
          <p>
            More cores don’t mean more registers for your program.
          </p>
          <p>
            They mean more places your program <em>can</em> run.
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
