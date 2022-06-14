import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/globalUserContext";
import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user, setUser, setProductSearch } = useGlobalContext();

  const usuarioStorage = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const onClickHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/products/search`, { search })
      .then((data) => {
        setProductSearch(data.data);
        navigate("/search");
      });
  };

  const handlelogout = (e) => {
    e.preventDefault();

    axios.post("/api/users/logout").then((res) => {
      alert(`logged out`);
      localStorage.removeItem("user");
      setUser({});
      navigate("/");
    });
  };

  const onCLickHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <section className="js-section-advertising section-advertising">
        <div className="container-sm">
          <div className="row-fluid">
            <div className="col text-center">
              "BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS"
            </div>
          </div>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <SportsBarIcon fontSize="large" />
            Bierfass
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" handlelogout>
                  Cervezas
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Rubia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Negra
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Roja
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar-nav mv-auto mb-2 mb-lg-0">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  size="50"
                  placeholder="Buscar"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  onClick={onClickHandler}
                  className="btn btn-outline-light"
                  type="submit"
                >
                  <SearchIcon />
                </button>
              </form>
              <div className="navbar-nav ml-auto">
                <div className="user-nav">
                  {!usuarioStorage.firstName ? (
                    <div>
                      <Link to="/register">
                        <button className="btn btn-outline-light" type="submit">
                          Registrarse
                        </button>
                      </Link>
                      <Link to="/login">
                        <button className="btn btn-outline-light" type="submit">
                          Iniciar sesión
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Link to={`/cart/${usuarioStorage.id}`}>
                        <button className="btn btn-outline-light" type="submit">
                          <ShoppingCartIcon />
                        </button>
                      </Link>
                      <Link to="/me">
                        <button className="btn btn-outline-light" type="submit">
                          {usuarioStorage.firstName} <AccountCircleIcon />
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-light"
                        onClick={handlelogout}
                      >
                        logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
