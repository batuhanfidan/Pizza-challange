import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./OrderPageCompleted.css";
import OrderSummary from "../OrderPage/OrderSummary";
import axios from "axios";

export default function OrderCompleted() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const objeString = queryParams.get("obje");

  let obje = null;

  if (objeString) {
    try {
      obje = JSON.parse(decodeURIComponent(objeString));
    } catch (e) {
      console.error("Failed to parse obje:", e);
    }
  }

  console.log(obje);
  return (
    <>
      <div className="order">
        <img
          src="./Assets/mile1-assets/logo.svg"
          className="img"
          style={{ marginTop: "-50px" }}
        />
        <div className="order_child">
          <div className="h1">
            <p
              style={{
                fontFamily: "Satisfy",
                fontWeight: "400",
                fontSize: "32px",
                lineHeight: "44.27px",
                color: "#FDC913",
              }}
            >
              lezzetin yolda
            </p>
            <p>SİPARİŞ ALINDI</p>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #FAF7F2",
            width: "30%",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{
            color: "#FFFFFF",
            fontFamily: "Barlow",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: "600",
                fontSize: "22px",
                lineHeight: "29.44px",
              }}
            >
              {obje.pizzaName}
            </p>
          </div>
          <div
            style={{
              width: "201px",
              height: "153px",
              color: "#FFFFFF",
              marginTop: "40px",
            }}
          >
            <p>
              Boyut:
              <span style={{ fontWeight: "600" }}>
                {obje.size} <span style={{ color: "red" }}>*</span>
              </span>
            </p>
            <p>
              Hamur:
              <span style={{ fontWeight: "600" }}>
                {obje.dough} <span style={{ color: "red" }}>*</span>
              </span>
            </p>
            <p>
              Ek Malzemeler:
              <span style={{ fontWeight: "600" }}>
                {obje.selectedIngredients.join(", ")}
                <span style={{ color: "red" }}>*</span>
              </span>
            </p>
          </div>
          <div
            style={{
              width: "288px",
              height: "191px",
              border: "1px solid #FAF7F2",
              borderRadius: "6PX",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontWeight: "600",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <p style={{ width: "75%" }}>Sipariş Toplamı</p>
            <span
              style={{
                display: "flex",
                width: "75%",
                justifyContent: "space-between",
              }}
            >
              <p>Seçimler: </p>
              <p>{obje.selectedIngredients.length * 5}₺</p>
            </span>
            <span
              style={{
                display: "flex",
                width: "75%",
                justifyContent: "space-between",
              }}
            >
              <p>Total Price: </p>
              <p>{obje.price}₺</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
