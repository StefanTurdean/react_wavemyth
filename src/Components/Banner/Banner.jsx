import React from "react";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="packImgContainer">
        <img src="img/Pack/pack.jpg" alt="oops" />
        <p className="imgText">pack</p>
      </div>
      <span className="arrow">›</span>
      <div className="rocketImgContainer">
        <img src="img/Fly/fly.jpg" alt="oh... no" />
        <p className="imgText">fly</p>
      </div>
      <span>›</span>
      <div className="leafImgContainer">
        <img src="img/Live/leaf.jpg" alt="oh YES" />
        <p className="imgText">live</p>
      </div>
      <span>›</span>
      <div className="enjoyContainer">
        <span>ENJOY</span>
        <p>A NEW WORLD!</p>
      </div>
    </div>
  );
};
