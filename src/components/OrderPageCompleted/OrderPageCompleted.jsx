import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderPageCompleted.css";
import OrderSummary from "../OrderPage/OrderSummary";

export default function OrderCompleted() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalPrice = parseFloat(queryParams.get("totalPrice")) || 0;
  const pizzaName = decodeURIComponent(queryParams.get("name")) || "Pizza";
  const dough = decodeURIComponent(queryParams.get("dough")) || "";
  const size = decodeURIComponent(queryParams.get("size")) || "";
  const ingredients =
    JSON.parse(decodeURIComponent(queryParams.get("ingredients"))) || [];

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
        <div className="cizgi"></div>
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
              {pizzaName}
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
                {size} <span style={{ color: "red" }}>*</span>
              </span>
            </p>
            <p>
              Hamur:
              <span style={{ fontWeight: "600" }}>
                {dough} <span style={{ color: "red" }}>*</span>
              </span>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <span style={{ fontWeight: "600" }}>
                {ingredients.join(", ")} <span style={{ color: "red" }}>*</span>
              </span>{" "}
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
              <p>{ingredients.length * 5}₺</p>
            </span>
            <span
              style={{
                display: "flex",
                width: "75%",
                justifyContent: "space-between",
              }}
            >
              <p>Total Price: </p>
              <p>{totalPrice}₺</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
