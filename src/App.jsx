import { useState } from "react";
import "./App.scss";
import { Banner } from "./Components/Banner/Banner";
import { Item } from "./Components/Item/Item";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  let [cartList, setCartList] = useState([]);

  const addToCart = (toBeAdded) => {
    setCartList([...cartList, toBeAdded]);
    console.log(cartList);
  };

  return (
    <div className="App">
      <NavBar numberOfItems={cartList.length} />
      <Item setCart={addToCart} />
      <Banner />
    </div>
  );
}

export default App;
