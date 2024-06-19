import React from "react";

function OrderSummary({
  piece,
  totalPrice,
  selectedIngredients,
  downClick,
  upClick,
  sendClick,
}) {
  return (
    <div className="onay-formu">
      <div className="artı-eksi">
        <button onClick={downClick}>-</button>
        <p>{piece}</p>
        <button onClick={upClick}>+</button>
      </div>
      <div>
        <div className="tamamlandi">
          <div>
            <p
              style={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24.76px",
              }}
            >
              Sipariş Toplamı
            </p>
          </div>
          <div
            style={{
              color: "#5F5F5F",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24.76px",
            }}
          >
            <p>Seçimler</p>
            <p>{selectedIngredients.length * 5}₺</p>
          </div>
          <div
            style={{
              color: "#CE2829",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24.76px",
            }}
          >
            <p>Toplam</p>
            <p>{totalPrice}₺</p>
          </div>
        </div>
        <button className="tamamlandi-button" onClick={sendClick}>
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
