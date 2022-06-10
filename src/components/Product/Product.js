import React, { useState, useEffect } from "react";
import "./Product.css";
import ProductReview from "../ProductReview/ProductReview";
import alcohol from "../../assets/iconAlcohol.png";
import location from "../../assets/location.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const products = {
  name: "Roja Ipa",
  type: "Roja",
  size: "450 ml",
  price: "250",
  origin: "Argentina",
  marca: "Andes",
  qty: 150,
  img1: "/Users/eva/Plataforma5/proyecto/bierfass/src/components/Product/Andes2.webp",
  img2: "/Users/eva/Plataforma5/proyecto/bierfass/src/components/Product/Andes3.jpeg",
  alcohol_porcentaje: "5,6%",
};

const Product = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => console.log("SOY DATA", res.data))
      .then((product) => setProduct(product));
    console.log("SOY PRODUCT", product);
  }, [id]);

  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-4">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img src={product} class="d-block w-100" alt="First slide" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-8">
            <p class="information text-md-left">{products.type}</p>
            <h2>{products.name}</h2>
            <p>
              <b>Marca: </b>
              {products.marca}
            </p>
            <p>
              <b>Tamaño: </b>
              {products.size}
            </p>
            <p class="price">$ {products.price}</p>
            <p>
              <img src={location} />
              {products.origin}
            </p>
            <p>
              <img src={alcohol} />
              {products.alcohol_porcentaje}
            </p>
            <p>
              <b>Disponibilidad: </b> 150 unidades
            </p>
            <label>
              <b>Cantidad: </b>
            </label>
            <button
              type="submit"
              onClick={handleDecrease}
              class="btn btn-default btn-qty"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <div className="form-control text-center">{quantity}</div>
            <button
              type="submit"
              onClick={handleIncrease}
              class="btn btn-default btn-qty"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
            <button type="button" class="btn btn-default cart">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <ProductReview></ProductReview>
    </>
  );
};

export default Product;
