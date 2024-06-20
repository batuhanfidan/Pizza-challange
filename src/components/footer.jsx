import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-div">
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="adress"
            style={{ width: "360px", height: "263.56px" }}
          >
            <img
              src="./Assets/mile2-aseets/footer/insta/logo-footer.svg"
              style={{ width: "50%" }}
            />
            <span>
              <img src="./Assets/mile2-aseets/footer/icons/icon-1.png" />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </span>
            <span>
              <img src="./Assets/mile2-aseets/footer/icons/icon-2.png" />
              <p>aciktim@teknolojikyemekler.com</p>
            </span>
            <span>
              <img src="./Assets/mile2-aseets/footer/icons/icon-3.png" />
              <p>+90 216 123 45 67</p>
            </span>
          </div>
          <div className="footer-pizza-hot">
            <p
              style={{
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "32.11px",
                marginBottom: "40px",
              }}
            >
              Hot Menu
            </p>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div style={{ width: "50%" }} className="instagram-div">
          <div className="instagram">
            <p>Instagram</p>
            <img src="./Assets/mile2-aseets/footer/insta/li-0.png" />
            <img src="./Assets/mile2-aseets/footer/insta/li-1.png" />
            <img src="./Assets/mile2-aseets/footer/insta/li-2.png" />
            <img src="./Assets/mile2-aseets/footer/insta/li-3.png" />
            <img src="./Assets/mile2-aseets/footer/insta/li-4.png" />
            <img src="./Assets/mile2-aseets/footer/insta/li-5.png" />
          </div>
        </div>
      </div>
      <div className="footer-last-div" style={{ height: "89.8px" }}>
        <div className="copyright">
          <p>© 2023 Teknolojik Yemekler.</p>
          <p>
            <FaTwitter />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
