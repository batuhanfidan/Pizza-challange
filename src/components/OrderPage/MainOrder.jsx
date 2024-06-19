import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PizzaDetails from "./PizzaDetails";
import SizeSelector from "./SizeSelector";
import DoughSelector from "./DoughSelector";
import IngredientSelector from "../IngredientSelector";
import OrderSummary from "./OrderSummary";

import "bootstrap/dist/css/bootstrap.min.css";

function MainOrder() {
  const history = useHistory();
  const sendClick = () => {
    history.push("/OrderCompleted");
  };

  const [price, setPrice] = useState(85.5);
  const [piece, setPiece] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const maxIngredients = 10;

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

  const totalPrice = (price + selectedIngredients.length * 5) * piece;

  return (
    <div className="nasi">
      <div className="order-container">
        <PizzaDetails price={price} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <SizeSelector />
          <DoughSelector />
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
  );
}

export default MainOrder;
