import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../footer";
import HomePageMain from "./HomePageMain";
import PizzaItem from "../pizzas";

export default function homePage() {
  let history = useHistory();
  const sendClick = () => {
    history.push("/OrderPage");
  };

  const FoodClick = () => {
    const windowHeight = window.innerHeight;
    window.scrollBy(0, windowHeight * 1.8);
  };
  return (
    <>
      <div className="main-container">
        <img
          src="https://fontmeme.com/temporary/85fabc5d05986f12e3ac5939324d79ab.png"
          className="logo"
        />
        <div className="promp">
          <p className="promp-first-p">fırsatı kaçırma</p>
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
        </div>
        <img
          src="https://i.hizliresim.com/k8w27gc.png"
          className="main-image"
        />
        <button onClick={FoodClick} className="aciktim">
          ACIKTIM
        </button>
      </div>
      <HomePageMain sendClick={sendClick} />
      <Footer />
    </>
  );
}
