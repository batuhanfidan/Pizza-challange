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
        <img src="./Assets/mile1-assets/logo.svg" className="logo" />
        <div className="promp">
          <p
            style={{
              fontFamily: "Satisfy",
              color: "#FDC913",
              fontSize: "32px",
              height: "40px",
              width: "50%",
              lineHeight: "44.27px",
            }}
          >
            fırsatı kaçırma
          </p>
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
        </div>
        <img
          src="./Assets/mile1-assets/home-banner.png"
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
