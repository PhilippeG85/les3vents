import React from "react";

function LinkCard({ number, title, link }) {
  return (
    <a href={link} target="_blank" className="link-btn">
      <div className="center link-card">
        <div className="flex-link">
          <h1 className="link-title">{number}</h1>
          <p style={{ fontSize: "18px" }}>{title}</p>
        </div>
      </div>
    </a>
  );
}

export default LinkCard;
