import React from "react";

const Banner = (props) => {
  return (
    <div>
      <div className="welcome-banner-container">
        <img className="welcome-banner" src={props.image} alt="banner-image" />
        <h1 className="welcome-banner-title">{props.title}</h1>
      </div>
    </div>
  );
};

export default Banner;
