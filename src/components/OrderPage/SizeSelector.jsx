import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function SizeSelector() {
  return (
    <FormGroup tag="fieldset">
      <legend style={{ display: "flex", fontSize: "20px", fontWeight: "600" }}>
        Boyut seç <p style={{ color: "red" }}>*</p>
      </legend>
      {["Küçük", "Orta", "Büyük"].map((size) => (
        <FormGroup check style={{ marginBottom: "20px" }} key={size}>
          <Input name="radio1" type="radio" value={size} />{" "}
          <Label check>{size}</Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
}

export default SizeSelector;
