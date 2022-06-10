import React from "react";
import "./Footer.css";
import SportsBarIcon from "@mui/icons-material/SportsBar";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <a class="footer-brand" href="/">
          <SportsBarIcon fontSize="large" />
          Bierfass
        </a>
        <p>
          E-commerce hecho por Matías Goñi, Fabian Lopez, Evangelina Fernández,
          Alejandra Ramos y Kyra Rey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
