import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

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
    <div className="secenekler">
      {ingredients.map((ingredient) => (
        <FormGroup check key={ingredient}>
          <Input
            type="checkbox"
            value={ingredient}
            onChange={handleIngredientChange}
            checked={selectedIngredients.includes(ingredient)}
          />
          <Label>{ingredient}</Label>
        </FormGroup>
      ))}
    </div>
  );
};

export default IngredientSelector;
