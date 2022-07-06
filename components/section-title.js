import React from "react";

const SectionTitle = ({ data }) => {
  const { textAlignment, subText, title } = data;
  return (
    <div className={`title text-${textAlignment}`}>
      <span>{subText}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
