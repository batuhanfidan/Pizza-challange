import React, { useState } from "react";
import "./SizeSelector.css";

function SizeSelector({ handleSizeChange }) {
  const [sizeSelected, setSizeSelected] = useState(false);

  const handleRadioChange = (event) => {
    handleSizeChange(event);
    setSizeSelected(true);
  };

  return (
    <div>
      <span>
        <p
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: "600",
            marginLeft: "6px",
          }}
        >
          Boyutunu Seç <span style={{ color: "red" }}>*</span>
        </p>
      </span>
      <div className="radio-inputs">
        {["S", "M", "L"].map((size) => (
          <label key={size} className={`radio-label ${size.toLowerCase()}`}>
            <input
              className="radio-input"
              type="radio"
              name="engine"
              value={size}
              onChange={handleRadioChange}
            />
            <span className="radio-tile">
              <span className="radio-icon">{size}</span>
            </span>
          </label>
        ))}
      </div>
      <div>
        {!sizeSelected && (
          <p style={{ color: "red", margin: "0" }}>
            Lütfen bir boyut seçiniz.*
          </p>
        )}
      </div>
    </div>
  );
}

export default SizeSelector;
