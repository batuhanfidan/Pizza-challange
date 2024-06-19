import React from "react";

function DoughSelector() {
  return (
    <div>
      <div style={{ display: "flex", fontSize: "20px", fontWeight: "600" }}>
        <p>Hamur Seç</p>
        <p style={{ color: "red" }}>*</p>
      </div>
      <select name="Hamur Kalınlığı" id="Hamur Kalınlığı">
        <option value="" disabled selected>
          Hamur Kalınlığı
        </option>
        {["İnce", "Orta", "Kalın"].map((dough) => (
          <option value={dough} key={dough}>
            {dough}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DoughSelector;
