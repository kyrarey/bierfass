import React from "react";
import "./Header.css";
import SportsBarIcon from "@mui/icons-material/SportsBar";

const Header = () => {
  return (
    <header>
      <div class="welcome">
        <div class="container">
          <SportsBarIcon style={{ fontSize: 60 }} />
          <h1 class="display-4">Bierfass</h1>
          <p class="lead">
            Bierfass es una distribuidora de cervezas, donde podes encontrar
            cervezas de todo tipo.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
