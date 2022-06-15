import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useGlobalContext } from "../../context/globalUserContext";
import "./ProductType.css"

const ProductType = () => {
  const [typeSearch, setTypeSearch] = useState("");
  const { type } = useParams();
  console.log(useParams.type);

  const { setSearchType } = useGlobalContext();

  const onClickType = (e) => {
    e.preventDefault();
    axios
    .get(`http://localhost:8000/api/products/${type}`)
    .then((res) => console.log("SOY RES.DATA", res.data))
    .then(type => {setSearchType(type)})
  };


  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Estilos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link
                onChange={(e) => setTypeSearch(e.target.value)}
                to={`/products/${type}`}
                className="dropdown-item"
                onClick={onClickType}
              >
                Amber
              </Link>
            </li>
            <li>
              <Link
                onChange={(e) => setTypeSearch(e.target.value)}
                to={`/products/${type}`}
                className="dropdown-item"
                onClick={onClickType}
              >
                IPA
              </Link>
            </li>
            <li>
              <Link
                onChange={(e) => setTypeSearch(e.target.value)}
                to={`/products/${type}`}
                className="dropdown-item"
                onClick={onClickType}
              >
                Sin TACC
              </Link>
            </li>
            <li>
              <Link
                to={`/products/${type}`}
                className="dropdown-item"
                onClick={onClickType}
              >
                Stout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default ProductType;
