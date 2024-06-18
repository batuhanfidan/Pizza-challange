import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function homePage() {
  let history = useHistory();
  const sendClick = () => {
    history.push("/orderPage");
  };
  return (
    <>
      <div className="main-container">
        <img src="./Assets/mile1-assets/logo.svg" className="logo" />
        <div className="promp">
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
        </div>
        <img
          src="./Assets/mile1-assets/home-banner.png"
          className="main-image"
        />
        <button onClick={sendClick} className="aciktim">
          ACIKTIM
        </button>
      </div>
    </>
  );
}
