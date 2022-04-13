import { useState } from "react";
import "./App.scss";
import { Banner } from "./Components/Banner/Banner";
import { Footer } from "./Components/Footer/Footer";
import { Item } from "./Components/Item/Item";
import { NavBar } from "./Components/NavBar/NavBar";
import { TextArea } from "./Components/TextArea/TextArea";

function App() {
  let [cartList, setCartList] = useState([]);

  const addToCart = (toBeAdded) => {
    setCartList([...cartList, toBeAdded]);
    console.log(cartList);
  };

  const emptyCart = () => {
    setCartList([]);
    console.log(cartList);
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: "url(/img/mainBackground.jpg)" }}
    >
      <NavBar numberOfItems={cartList.length} />
      <Item setCart={addToCart} />
      <Banner />
      <TextArea emptyCart={emptyCart} />
      <Footer />
    </div>
  );
}

export default App;
