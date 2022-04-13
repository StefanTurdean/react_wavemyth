import React from "react";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="packImgContainer">
        <img src="" alt="" />
        <p>pack</p>
      </div>
      <span className="arrow">›</span>
      <div className="rocketImgContainer">
        <img src="" alt="" />
        <p>fly</p>
      </div>
      <span>›</span>
      <div className="lifeImgContainer">
        <img src="" alt="" />
        <p>live</p>
      </div>
      <span>›</span>
      <div className="enjoyContainer">
        <span>ENJOY</span>
        <p>A NEW WORLD!</p>
      </div>
    </div>
  );
};
