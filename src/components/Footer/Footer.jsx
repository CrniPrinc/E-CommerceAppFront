import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            excepturi ab debitis odit quae minima, deserunt provident ad itaque,
            cumque aperiam obcaecati atque ipsam sint dolores soluta pariatur
            doloremque ratione.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            excepturi ab debitis odit quae minima, deserunt provident ad itaque,
            cumque aperiam obcaecati atque ipsam sint dolores soluta pariatur
            doloremque ratione.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Stefanstore</span>
          <span className="copyright">
            {" "}
            Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
