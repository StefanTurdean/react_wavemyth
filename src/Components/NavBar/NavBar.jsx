import React from "react";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavMain">
        <span className="title">
          <b>C</b>O<b>SM</b>O<b>S</b>
        </span>
        <div className="NavContainer">
          <img src="img/Home/Home.jpg" alt="oops" />
          <a href="">Home</a>
        </div>
        <div className="NavContainer">
          <img src="img/Destination/Destination.jpg" alt="oops" />
          <a href="">Destinations</a>
        </div>
        <div className="NavContainer">
          <img src="img/Spaceship/Spaceship.jpg" alt="oops" />
          <a href="">Spaceship</a>
        </div>
        <div className="NavContainer Cart">
          <img src="img/Cart/CartImg.jpg" alt="oops" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};
