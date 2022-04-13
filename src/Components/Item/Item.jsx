import React, { useState } from "react";
import "./Item.scss";
import itemsList from "./ItemsList";

export const Item = (props) => {
  let [index, setIndex] = useState(0);

  let addToCart = {
    planetName: itemsList[index].planetName,
    planetDescription: itemsList[index].planetDescriptionOne,
    planetPrice: itemsList[index].planetPrice,
  };

  const addIndex = () => {
    if (itemsList[index + 1] !== undefined) {
      setIndex(index + 1);
    }
  };

  const subIndex = () => {
    if (itemsList[index - 1] !== undefined) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="itemContainer">
      <button className="sideBtn" onClick={subIndex}>
        ‹
      </button>
      <div className="itemMain">
        <div
          className="imgContainer"
          style={{ backgroundImage: itemsList[index].planetBackground }}
        >
          <div className="textContainer">
            <p>
              <b>{itemsList[index].planetName.toLocaleUpperCase()}</b>
            </p>
            <p>{itemsList[index].planetSysten}</p>
            <p>{itemsList[index].planetDistance}</p>
            <p>{itemsList[index].planetPopulation}</p>
          </div>
        </div>
        <div className="descriptionContainer">
          <span className="descPlanetName desc">
            {itemsList[index].planetName}
          </span>
          <p className="desc">{itemsList[index].planetDescriptionOne}</p>
          <p className="desc">{itemsList[index].planetDescriptionTwo}</p>
          <div className="buyContainer">
            <div className="priceContainer">
              <p className="price">{itemsList[index].planetPrice} €</p>
              <p>one way ticket</p>
            </div>
            <button className="buyBtn" onClick={() => props.setCart(addToCart)}>
              Purchase
            </button>
          </div>
        </div>
      </div>
      <button className="sideBtn" onClick={addIndex}>
        ›
      </button>
    </div>
  );
};
