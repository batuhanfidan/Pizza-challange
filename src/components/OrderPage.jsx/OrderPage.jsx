import React, { useState } from "react";
import "./OrderPage.css";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="header">
      <img src="./Assets/mile1-assets/logo.svg" alt="Logo" />
    </div>
  );
}

function MainOrder() {
  let history = useHistory();
  const sendClick = () => {
    history.push("/OrderCompleted");
  };
  const pizzaPrice = 85.5;

  const [price, setPrice] = useState([pizzaPrice]);
  const [piece, setPiece] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const maxIngredients = 10;

  function upClick() {
    setPiece((piece) => piece + 1);
  }

  function downClick() {
    if (piece > 1) {
      setPiece((piece) => piece - 1);
    }
  }

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

  let totalPrice = (price + selectedIngredients.length * 5) * piece;

  return (
    <div className="nasi">
      <div className="order-container">
        <div className="information">
          <div>
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>
              Position Absolute Acı Pizza
            </p>
          </div>
          <div className="fiyat-yorum">
            <div>
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                {price}₺
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              4.9 (200)
            </div>
          </div>
          <div>
            <p style={{ fontSize: "16px", lineHeight: "28.8px" }}>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            marginTop: "10px",
          }}
        >
          <div>
            <FormGroup tag="fieldset">
              <legend
                style={{ display: "flex", fontSize: "20px", fontWeight: "600" }}
              >
                Boyut seç <p style={{ color: "red" }}>*</p>
              </legend>
              <FormGroup check style={{ marginBottom: "20px" }}>
                <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
              </FormGroup>
              <FormGroup check style={{ marginBottom: "20px" }}>
                <Input name="radio1" type="radio" /> <Label check>Orta</Label>
              </FormGroup>
              <FormGroup check style={{ marginBottom: "20px" }}>
                <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
              </FormGroup>
            </FormGroup>
          </div>
          <div>
            <div
              style={{ display: "flex", fontSize: "20px", fontWeight: "600" }}
            >
              <p>Hamur Seç</p>
              <p style={{ color: "red" }}>*</p>
            </div>
            <select name="Hamur Kalınlığı" id="Hamur Kalınlığı">
              <option value="" disabled selected>
                Hamur Kalınlığı
              </option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>Ek Malzemeler</p>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              En fazla {maxIngredients} malzeme seçebilirsiniz. 5₺
            </p>
          </div>
          <div className="secenekler">
            <FormGroup check>
              <Input
                type="checkbox"
                value="Pepperoni"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Pepperoni")}
              />
              <Label>Pepperoni</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Tavuk Izgara"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Tavuk Izgara")}
              />
              <Label>Tavuk Izgara</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Mısır"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Mısır")}
              />
              <Label>Mısır</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Sarımsak"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Sarımsak")}
              />
              <Label>Sarımsak</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Ananas"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Ananas")}
              />
              <Label>Ananas</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Sosis"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Sosis")}
              />
              <Label>Sosis</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Soğan"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Soğan")}
              />
              <Label>Soğan</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Sucuk"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Sucuk")}
              />
              <Label>Sucuk</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Biber"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Biber")}
              />
              <Label>Biber</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Kabak"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Kabak")}
              />
              <Label>Kabak</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Kanada Jambonu"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Kanada Jambonu")}
              />
              <Label>Kanada Jambonu</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Domates"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Domates")}
              />
              <Label>Domates</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Jalepeno"
                onChange={handleIngredientChange}
                checked={selectedIngredients.includes("Jalepeno")}
              />
              <Label>Jalepeno</Label>
            </FormGroup>
          </div>
        </div>
        <div className="siparis-notu">
          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "24.76px",
            }}
          >
            Sipariş Notu
          </p>
          <input
            type="text"
            className="not"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
          <div
            className="dumduz"
            style={{
              marginTop: "30px",
            }}
          ></div>
        </div>
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
      </div>
    </div>
  );
}

function OrderPage() {
  return (
    <>
      <Header />
      <MainOrder />
    </>
  );
}

export default OrderPage;
