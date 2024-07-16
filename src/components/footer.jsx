import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-div">
        <div className="inside-div-footer">
          <div className="adress">
            <img
              className="adress-img"
              src="https://fontmeme.com/temporary/85fabc5d05986f12e3ac5939324d79ab.png"
            />
            <span>
              <IoLocationSharp style={{ width: "30px", height: "30px" }} />
              <p className="london">341 Londonderry Road, Istanbul Türkiye</p>
            </span>
            <span>
              <IoIosMailOpen style={{ width: "30px", height: "30px" }} />
              <p>aciktim@teknolojikyemekler.com</p>
            </span>
            <span>
              <FaPhoneVolume style={{ width: "30px", height: "30px" }} />
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
        <div className="instagram-div">
          <div className="instagram">
            <p>Instagram</p>
            <img src="https://i.hizliresim.com/se6xual.png" />
            <img src="https://i.hizliresim.com/fkyi69m.png" />
            <img src="https://i.hizliresim.com/od7tjg5.png" />
            <img src="https://i.hizliresim.com/ied9vpj.png" />
            <img src="https://i.hizliresim.com/c5r06qo.png" />
            <img src="https://i.hizliresim.com/rvh2osv.png" />
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
