import React from "react";
import pdf from '/Anish_Resume.pdf'

export default function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-heading">🧾 My Resume</h2>
      <iframe
        src={pdf}
        title="Anish Nagula Resume"
        className="resume-frame"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
