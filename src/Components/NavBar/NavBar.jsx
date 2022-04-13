import React from "react";
import "./NavBar.scss";

export const NavBar = (props) => {
  const numberOfItems = props.numberOfItems;
  return (
    <div className="navBar">
      <span className="title">
        <b>C</b>O<b>SM</b>O<b>S</b>
      </span>
      <div className="navContainer">
        <img src="img/Home/home.jpg" alt="oops" />
        <a href="">Home</a>
      </div>
      <div className="navContainer">
        <img src="img/Destination/destination.jpg" alt="oops" />
        <a href="">Destinations</a>
      </div>
      <div className="navContainer">
        <img src="img/Spaceship/spaceship.jpg" alt="oops" />
        <a href="">Spaceship</a>
      </div>
      <div className="navContainer cart">
        <img src="img/Cart/cartImg.jpg" alt="oops" />
        <span>{numberOfItems}</span>
      </div>
    </div>
  );
};
