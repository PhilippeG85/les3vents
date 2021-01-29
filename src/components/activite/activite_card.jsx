import React from "react";

function ActiviteCard({ number, title, text }) {
  return (
    <div className="d-flex">
      <div className="card-content">
        <h1 className="numero-activity">{number}</h1>
        <h1 className="card-content-title center">{title}</h1>
        <p className="center">{text}</p>
      </div>
    </div>
  );
}

export default ActiviteCard;
