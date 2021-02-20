import React from "react";

function LinkCard({ number, title, link }) {
  return (
    <div className="link-card-content">
      <a target="_blank" rel="noreferrer" href={link} className="link-btn">
        <div className="center link-card">
          <div className="flex-link">
            <h1 className="link-title">{number}</h1>
            <p style={{ fontSize: "18px" }}>{title}</p>
          </div>
        </div>
      </a>

    </div>
  );
}

export default LinkCard;
