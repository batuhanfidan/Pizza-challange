import React from "react";
import { useHistory } from "react-router-dom";

const Pizzas = [
  {
    image: "Assets/mile2-aseets/pictures/food-1.png",
    name: "Terminal Pizza",
    puan: "4.9",
    yorum: "(200)",
    price: "60",
  },
  {
    image: "Assets/mile2-aseets/pictures/food-2.png",
    name: "Position Absolute Pizza",
    puan: "4.9",
    yorum: "(928)",
    price: "85",
  },
  {
    image: "Assets/mile2-aseets/pictures/food-3.png",
    name: "useEffect Tavuklu Burger",
    puan: "4.9",
    yorum: "(462)",
    price: "75",
  },
];

export function PizzaItem({ image, name, puan, yorum, price }) {
  let history = useHistory();
  function sendClick() {
    window.scrollTo(0, 0);
    const names = encodeURIComponent(name);
    history.push(`/OrderPage?price=${price}&name=${names}`);
  }
  return (
    <button
      onClick={sendClick}
      className="pizza-item"
      style={{ backgroundColor: "white" }}
    >
      <span>
        <img src={image} className="pizza-image" />
      </span>
      <span style={{ width: "358px", textAlign: "start" }}>
        <p className="pizza-name">{name}</p>
        <span
          style={{
            display: "flex",
            width: "358px",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "Barlow",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "28.8px",
            }}
            className="pizza-rating"
          >
            {puan}
          </p>
          <p
            style={{
              fontFamily: "Barlow",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "28.8px",
            }}
          >
            {yorum}
          </p>
          <p
            style={{
              fontFamily: "Barlow",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24.76px",
            }}
          >
            {price}₺
          </p>
        </span>
      </span>
    </button>
  );
}

const PizzaCreator = () => {
  return (
    <div className="pizza">
      {Pizzas.map((pizza, index) => (
        <PizzaItem
          key={index}
          image={pizza.image}
          name={pizza.name}
          puan={pizza.puan}
          yorum={pizza.yorum}
          price={pizza.price}
        />
      ))}
    </div>
  );
};

export default PizzaCreator;
