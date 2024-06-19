import React from "react";
import "./OrderPage.css";
import { useHistory } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src="./Assets/mile1-assets/logo.svg" />
    </div>
  );
}

function MainOrder() {
  return <div className="Order-container"></div>;
}

function OrderPage() {
  return (
    <>
      <Header />
      <MainOrder />
    </>
  );
}

export default OrderPage;
