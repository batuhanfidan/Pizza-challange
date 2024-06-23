import React, { useState } from "react";
import "./DoughSelector.css";

function DoughSelector({ handleDoughChange }) {
  const [doughSelected, setDoughSelected] = useState(false);

  const handleSelectChange = (event) => {
    handleDoughChange(event);
    setDoughSelected(event.target.value !== "");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="select-container">
        <div style={{ display: "flex", fontSize: "20px", fontWeight: "600" }}>
          <p>Hamur Seç</p>
          <p style={{ color: "red" }}>*</p>
        </div>
        <select
          name="Hamur Kalınlığı"
          id="Hamur Kalınlığı"
          className="hamur"
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>
            --Hamur Kalınlığı Seç--
          </option>
          {["İnce", "Orta", "Kalın"].map((dough) => (
            <option value={dough} key={dough}>
              {dough}
            </option>
          ))}
        </select>
      </div>
      {!doughSelected && (
        <p style={{ color: "blue", color: "red", margin: "0" }}>
          Lütfen bir kalınlık seçiniz.*
        </p>
      )}
    </div>
  );
}

export default DoughSelector;
