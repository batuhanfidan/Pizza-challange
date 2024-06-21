import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PizzaDetails from "./PizzaDetails";
import SizeSelector from "./SizeSelector";
import DoughSelector from "./DoughSelector";
import IngredientSelector from "../IngredientSelector";
import OrderSummary from "./OrderSummary";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function MainOrder() {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPrice = parseFloat(queryParams.get("price")) || 85.5;
  const initialName = queryParams.get("name") || "Pizza";

  const [price, setPrice] = useState(initialPrice);
  const [name, setName] = useState(initialName);
  const [piece, setPiece] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dough, setDough] = useState("");
  const [size, setSize] = useState("");
  const [orderName, setOrderName] = useState("");
  const maxIngredients = 10;
  const minIngredients = 4;

  const upClick = () => setPiece(piece + 1);
  const downClick = () => piece > 1 && setPiece(piece - 1);

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selectedIngredients.length < maxIngredients) {
        setSelectedIngredients([...selectedIngredients, value]);
      } else {
        alert(`En fazla ${maxIngredients} adet seçebilirsiniz.`);
      }
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== value)
      );
    }
  };

  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleOrderNameChange = (e) => {
    setOrderName(e.target.value);
  };

  const totalPrice = (price + selectedIngredients.length * 5) * piece;

  const sendClick = () => {
    if (selectedIngredients.length < minIngredients) {
      alert(`En az ${minIngredients} malzeme seçmelisiniz.`);
      return;
    }

    if (orderName.length < 3) {
      alert("İsim en az 3 karakter uzunluğunda olmalıdır.");
      return;
    }

    const obje = {
      pizzaName: name,
      size: size,
      dough: dough,
      selectedIngredients: selectedIngredients,
      piece: piece,
      price: totalPrice,
      orderName: orderName,
    };

    axios.post("https://reqres.in/api/pizza", obje).then((response) => {
      const encodedObje = encodeURIComponent(JSON.stringify(response.data));
      history.push(`/OrderCompleted?obje=${encodedObje}`);
    });
  };

  return (
    <>
      <div className="gereksiz" style={{ width: "100%", height: "650px" }}>
        <img src="Assets/mile2-aseets/pictures/form-banner.png" alt="Banner" />
      </div>
      <div className="nasi" style={{ marginTop: "-280px" }}>
        <div className="order-container">
          <PizzaDetails price={price} name={name} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
              marginTop: "20px",
            }}
          >
            <SizeSelector handleSizeChange={handleSizeChange} />
            <DoughSelector handleDoughChange={handleDoughChange} />
          </div>
          <div>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>Ek Malzemeler</p>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              En fazla {maxIngredients} malzeme seçebilirsiniz. 5₺
            </p>
            <IngredientSelector
              selectedIngredients={selectedIngredients}
              handleIngredientChange={handleIngredientChange}
            />
          </div>
          <div className="siparis-notu">
            <input
              type="text"
              placeholder="İsim"
              value={orderName}
              onChange={handleOrderNameChange}
              style={{
                border: "1px solid gray",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            />
            <p>Sipariş Notu</p>
            <input
              type="text"
              className="not"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>
          <div className="cizgi"></div>
          <OrderSummary
            piece={piece}
            totalPrice={totalPrice}
            selectedIngredients={selectedIngredients}
            downClick={downClick}
            upClick={upClick}
            sendClick={sendClick}
          />
        </div>
      </div>
    </>
  );
}

export default MainOrder;
