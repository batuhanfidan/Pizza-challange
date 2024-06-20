import React from "react";

function PizzaDetails({ price }) {
  return (
    <div className="information">
      <div>
        <p style={{ fontWeight: "bold", fontSize: "22px" }}>
          Position Absolute Acı Pizza
        </p>
      </div>
      <div className="fiyat-yorum">
        <div>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>{price}₺</p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", fontSize: "16px" }}
        >
          <div style={{ paddingRight: "100px" }}>4.9</div>
          (200)
        </div>
      </div>
      <div>
        <p style={{ fontSize: "16px", lineHeight: "28.8px" }}>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}

export default PizzaDetails;
