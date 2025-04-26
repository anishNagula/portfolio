import React from "react";

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-heading">🧾 My Resume</h2>
      <iframe
        src="../../public/Anish_Resume.pdf"
        title="Anish Nagula Resume"
        className="resume-frame"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
