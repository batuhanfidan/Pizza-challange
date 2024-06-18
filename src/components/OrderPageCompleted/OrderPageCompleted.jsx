import React from "react";
import { useHistory } from "react-router-dom";
import "./OrderPageCompleted.css";

export default function OrderCompleted() {
  return (
    <>
      <div className="order">
        <img src="./Assets/mile1-assets/logo.svg" className="img" />
        <div className="order_child">
          <div className="h1">
            <p>TEBRİKLER!</p>
            <p>SİPARİŞİNİZ ALINDI!</p>
          </div>
        </div>
      </div>
    </>
  );
}
