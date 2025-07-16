import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Spot() {
  const [showText, setShowText] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [visibleTerminals, setVisibleTerminals] = useState(0);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1000);
    const hideTimer = setTimeout(() => setShowText(false), 1050);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (!showText) {
      const timers = [];
      for (let i = 1; i <= 5; i++) {
        timers.push(setTimeout(() => setVisibleTerminals(i), i * 100));
      }
      return () => timers.forEach(clearTimeout);
    }
  }, [showText]);

  if (!showText) {
    return (
      <div className="grid-container">
        {visibleTerminals >= 1 && (
          <div className="spot-item1 terminal-pop">
            <div>$ ls -la</div>
            <div>drwxr-xr-x 5 anish users 4096 Jul 7 23:00 .</div>
            <div>-rw-r--r-- 1 anish users 220 Jul 7 22:51 .bashrc</div>
            <div className="spot-progressbar">&#9608; &#9608; &#9608; &#9608; &#9608; &#9608; &#9608; &#9608; &#9608; &#9608; &#9608; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; &#9617; </div>
          </div>
        )}
        {visibleTerminals >= 2 && (
          <div className="spot-item2 terminal-pop">
            
          </div>
        )}
        {visibleTerminals >= 3 && (
          <div className="spot-item3 terminal-pop">
            <div>@coding <span className="spot-name-two">[2/7]</span></div>
            <div className="spot-name-two">  <span className="spot-name-three">1.</span> <span className="spot-checkbox">&#9633;</span> Review PR #42 <span className="spot-name-two">3d</span></div>
            <div className="spot-name-three">  <  span className="spot-name-three">2.</span> <span className="spot-tick">&#10003;</span> Improve documentation <span className="spot-name-three">3d</span> ⭐</div>
            <div className="spot-name-two">  <span className="spot-name-three">3.</span> <span className="spot-checkbox">&#9633;</span> Update contributing guidelines <span className="spot-name-three">3d</span></div>
            <div className="spot-name-yellow">  <span className="spot-name-three">4.</span> <span className="spot-checkbox">&#9633;</span> Tree-shake unused modules (!) <span className="spot-name-three">2d</span></div>
            <div>  <span className="spot-name-three">5.</span> <span className="spot-checkbox">&#9633;</span> Write release notes for v2.0.0 <span className="spot-name-three">2d</span></div>
            <div>  <span className="spot-name-three">6.</span> <span className="spot-dot">&#xb7;</span> Mergesort worst-case 0(nlogn) <span className="spot-name-three">2d</span></div>
            <div className="spot-name-two">  <span className="spot-name-three">7.</span> <span className="spot-tick">&#10003;</span> Fix declaration leak on AST <span className="spot-name-three">1d</span></div>
            <div>  <span className="spot-name-three">8.</span> <span className="spot-checkbox">&#9633;</span> Get seats @ Unicorn dev-summit <span className="spot-name-three">1d</span> ⭐</div>
            <div style={{ height: '10px' }}></div>
            <div style={{ height: '10px' }}></div>
            <div className="spot-name-three">28% of all task complete.</div>
            <div className="spot-name-three"><span className="spot-name-green">2</span> done &#xb7; <span className="spot-name-purple">5</span> pending &#xb7; <span className="spot-name-blue">1</span> notes</div>
          </div>
        )}
        {visibleTerminals >= 4 && (
          <div className="spot-item4 terminal-pop">
            <div className="spot-name-yellow">echo "anish.nagula" (!)</div>
            <div className="spot-name-three">Linux anish 5.15.0 x86_64 GNU/Linux</div>
            <div className="spot-name-two">--- Dev Focus Today ---</div>
            <div className="spot-name-three">Files edited: 17</div>
            <div className="spot-name-two">Lines added: 323</div>
            <div className="spot-name-two">Coffee consumed:</div>

          </div>
        )}
        {visibleTerminals >= 5 && (
          <div className="spot-item5 terminal-pop">
            <div>neofetch-like ASCII art here 🚀</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center h-screen bg-black text-white text-4xl font-mono transition-opacity duration-1000 ease-in-out`}
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      <span>
        <Typewriter
          words={['Hello']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}
