import React from "react";
import "./HomePageMain.css";
import PizzaCreator from "../pizzas";
import PizzaItem from "../pizzas";
import { FaPizzaSlice } from "react-icons/fa";

export default function HomePageMain({ sendClick }) {
  return (
    <div
      className="contain"
      style={{ height: "1743,75px", backgroundColor: "#FAF7F2" }}
    >
      <div className="secenekler-div" style={{ backgroundColor: "white" }}>
        <div className="options">
          <span>
            <img src="./Assets/mile2-aseets/icons/1.svg" />
            <p>YENİ! Kore</p>
          </span>
          <span>
            <img src="./Assets/mile2-aseets/icons/2.svg" />
            <p>Pizza</p>
          </span>
          <span>
            <img src="./Assets/mile2-aseets/icons/3.svg" />
            <p>Burger</p>
          </span>
          <span>
            <img src="./Assets/mile2-aseets/icons/4.svg" />
            <p>Kızartmalar</p>
          </span>
          <span>
            <img src="./Assets/mile2-aseets/icons/5.svg" />
            <p>Fast Food</p>
          </span>
          <span>
            <img src="./Assets/mile2-aseets/icons/6.svg" />
            <p>Gazlı İçecek</p>
          </span>
        </div>
      </div>
      <div id="uclu-foto">
        <div className="uclu-foto">
          <div className="uclu-foto-first">
            <div className="uclu-foto-first-child">
              <p
                style={{
                  fontFamily: "Quattrocento",
                  fontWeight: "700",
                  fontSize: "68px",
                  lineHeight: "72px",
                  width: "50%",
                  color: "white",
                }}
              >
                Özel Lezzetus
              </p>
              <p
                style={{
                  fontFamily: "Barlow",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "26.76px",
                  color: "white",
                }}
              >
                Position:Absolute Acı Burger
              </p>
              <button onClick={sendClick}>SİPARİŞ VER</button>
            </div>
          </div>
          <div className="uclu-foto-second-child">
            <div className="uclu-foto-second">
              <div style={{ width: "40%" }}>
                <p
                  style={{
                    fontFamily: "Barlow",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "44.72px",
                    color: "white",
                  }}
                >
                  Hackathlon Burger Menü
                </p>
                <button onClick={sendClick}>Sipariş Ver</button>
              </div>
            </div>
            <div className="uclu-foto-third">
              <div style={{ width: "40%" }}>
                <p
                  style={{
                    fontFamily: "Barlow",
                    fontSize: "32px",
                    fontWeight: "600",
                    lineHeight: "44.72px",
                    color: "black",
                  }}
                >
                  <span style={{ color: "#D80027" }}>Çoooook</span> hızlı npm
                  gibi kurye{" "}
                </p>
                <button onClick={sendClick}>Sipariş Ver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paketlenenler">
        <div className="yazilar">
          <p>en çok paketlenen menüler</p>
          <p className="yazilar-last">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
        <div className="paket-buton">
          <button>
            <img src="./Assets/mile2-aseets/icons/1.svg" />
            <p>Ramen</p>
          </button>
          <button>
            <img src="./Assets/mile2-aseets/icons/2.svg" />
            <p>Pizza</p>
          </button>
          <button>
            <img src="./Assets/mile2-aseets/icons/3.svg" />
            <p>Burger</p>
          </button>
          <button>
            <img src="./Assets/mile2-aseets/icons/4.svg" />
            <p>Kızartmalar</p>
          </button>
          <button>
            <img src="./Assets/mile2-aseets/icons/5.svg" />
            <p>Fast Food</p>
          </button>
          <button>
            <img src="./Assets/mile2-aseets/icons/6.svg" />
            <p>Gazlı İçecek</p>
          </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "502px",
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PizzaCreator />
        </div>
      </div>
    </div>
  );
}
