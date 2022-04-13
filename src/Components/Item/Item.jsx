import React, { useState } from "react";
import "./Item.scss";
import ItemsList from "./ItemsList";

export const Item = (props) => {
  let [index, setIndex] = useState(0);

  let addToCart = {
    planetName: ItemsList[index].planetName,
    planetDescription: ItemsList[index].planetDescriptionOne,
    planetPrice: ItemsList[index].planetPrice,
  };

  const addIndex = () => {
    if (ItemsList[index + 1] !== undefined) {
      setIndex(index + 1);
    }
  };

  const subIndex = () => {
    if (ItemsList[index - 1] !== undefined) {
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
          style={{ backgroundImage: "url(/img/background1.png)" }}
        >
          <div className="textContainer">
            <p>
              <b>{ItemsList[index].planetName.toLocaleUpperCase()}</b>
            </p>
            <p>{ItemsList[index].planetSysten}</p>
            <p>{ItemsList[index].planetDistance}</p>
            <p>{ItemsList[index].planetPopulation}</p>
          </div>
        </div>
        <div className="descriptionContainer">
          <span className="descPlanetName desc">
            {ItemsList[index].planetName}
          </span>
          <p className="desc">{ItemsList[index].planetDescriptionOne}</p>
          <p className="desc">{ItemsList[index].planetDescriptionTwo}</p>
          <div className="buyContainer">
            <div className="priceContainer">
              <p className="price">{ItemsList[index].planetPrice} €</p>
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
