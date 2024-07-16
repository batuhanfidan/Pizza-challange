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
            <img
              src="https://cdn-icons-png.freepik.com/512/2821/2821803.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>YENİ! Kore</p>
          </span>
          <span>
            <img
              src="data:image/png;base64,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"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Pizza</p>
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/256/1046/1046784.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Burger</p>
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4853/4853280.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Kızartmalar</p>
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3703/3703377.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Fast Food</p>
          </span>
          <span>
            <img
              src="https://cdn0.iconfinder.com/data/icons/drink-50/512/soft-drink-soda-carbonated-512.png"
              style={{ width: "50px", height: "50px" }}
            />
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
            <img
              src="https://cdn-icons-png.freepik.com/512/2821/2821803.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>YENİ! Kore</p>
          </button>
          <button>
            <img
              src="data:image/png;base64,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"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Pizza</p>
          </button>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/256/1046/1046784.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Burger</p>
          </button>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4853/4853280.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Kızartmalar</p>
          </button>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3703/3703377.png"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Fast Food</p>
          </button>
          <button>
            <img
              src="https://cdn0.iconfinder.com/data/icons/drink-50/512/soft-drink-soda-carbonated-512.png"
              style={{ width: "50px", height: "50px" }}
            />
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
