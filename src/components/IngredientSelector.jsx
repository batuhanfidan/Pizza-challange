import React from "react";
import "./IngredientSelector.css";

const ingredients = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
];

const IngredientSelector = ({
  selectedIngredients,
  handleIngredientChange,
}) => {
  return (
    <div className="seceneklerr">
      {ingredients.map((ingredient, index) => (
        <div className="ctnr" key={ingredient}>
          <input
            id={`cbx-${index}`}
            className="hidden-xs-up"
            type="checkbox"
            value={ingredient}
            onChange={handleIngredientChange}
            checked={selectedIngredients.includes(ingredient)}
          />
          <label className="cbx-label" htmlFor={`cbx-${index}`}>
            <span className="cbx"></span>
            <p
              style={{
                fontFamily: "Barlow",
                fontWeight: "700",
                lineHeight: "28.8px",
                color: "#5F5F5F",
                margin: 0,
              }}
            >
              {ingredient}
            </p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default IngredientSelector;
