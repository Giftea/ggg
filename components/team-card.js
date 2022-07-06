import React from "react";

const TeamCard = ({ data }) => {
  const { name, designation, image, content } = data;
  return (
    <div className="single-team-carousel">
      <div className="inner">
        <div className="img-box">
          <img src={image} alt={name} />
        </div>
        <div className="team-content">
          <div className="title">
            <span>{designation}</span>
            <h3>{name}</h3>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
