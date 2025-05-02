import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
     <div className="logo-section">
  {[
    "DEPARTMENT OF <br/> EXAMINATIONS",
    "TERTIARY & VOCATIONAL <br/>EDUCATION COMMISSION",
    "NATIONAL INSTITUTE <br/>OF EDUCATION",
    "MINISTRY OF <br/>HIGHER EDUCATION",
    "TERTIARY & VOCATIONAL <br/>EDUCATION COMMISSION",
  ].map((text, index) => (
    <div key={index} className="logo-item">
      <img
        src="/logo1.jpg"
        alt="Logo"
        className="logo-img"
      />
      <span
        className="logo-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  ))}
</div>

      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-col">
            <p>
              ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය <br/>
              இலங்கை ஜனநாயக சோசலிசக் குடியரசு <br/>
              Educational Publications Department
            </p>
          </div>

          <div className="footer-col">
            <p>
              Educational Publications Department <br/>
              Isurupaya, Battaramulla. <br/>
              Sri Lanka. 10120
            </p>
          </div>

          <div className="footer-col">
            <p>
              Tel. 0112 784815 <br/>
              Fax. 0112 784815 <br/>
              Email. commissioner_epd@yahoo.com
            </p>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Book Store</a>
            <a href="#">Gallery</a>
            <a href="#">Site Map</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
         </div>

        <div className="footer-bottom">
        <div className="footer-bottom-text">
        <p> Copyright © 2020 Educational Publications Department. All Rights Reserved.
          Design & Developed by SLIIT</p> </div>
        </div>
      
    </footer>
  );
};

export default Footer;
