import React from "react";
import "./Footer.css";
import Logo from "./assets/LogoBlue.png";
import LinkedInIcon from "./assets/Shape.png"; 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="logo-container">
          <img src={Logo} alt="MobuisEngine Logo" />
        </div>
      <div className="top-section">

        <div className="info-columns">
          <div className="column">
            <span className="column-title">Address</span>
            <span>1875 Mission St Ste 103 #450</span>
            <span>San Francisco, CA 94103</span>
          </div>

          <div className="column">
            <span className="column-title">Email</span>
            <a href="mailto:finance@mobiusengine.ai" className="link">
              finance@mobiusengine.ai
            </a>
          </div>

          <div className="column">
            <span className="column-title">Telephone</span>
            <a href="tel:6508896026" className="link">
              650–889–6026
            </a>
          </div>
          <div style={{justifySelf:"right"}} className="column">
            <span className="column-title">Socials</span>
            <div className="socials">
              <a href="#">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div>© 2023 Mobiusservices LLC</div>
        <div className="legal-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
