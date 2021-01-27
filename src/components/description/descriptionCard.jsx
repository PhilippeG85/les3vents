import React from "react";

function DescriptionCard({ title, description, liste }) {

  const displayList = liste.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div className="description-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {displayList}
      </ul>
    </div>
  );
}

export default DescriptionCard;
