import React, { useState, useEffect } from "react";
import "./Product.css";
import ProductReview from "../ProductReview/ProductReview";
import alcohol from "../../assets/iconAlcohol.png";
import location from "../../assets/location.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const usuarioStorage = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  const { productId } = useParams();

  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  let sum = 0;

  useEffect(() => {
    axios
      .get(`/api/reviews/${productId}`)
      .then((response) => response.data)
      .then((comments) => setReviews(comments));
  }, []);

  reviews.map((object) => {
    sum += object.rating;
  });

  const starRating = sum / reviews.length;

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
      .get(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        console.log("SOY DATA", res.data[0]);
        return res.data[0];
      })
      .then((product) => setProduct(product));
  }, []);

  // add to shopping cart

  const handleAdd = (e) => {
    e.preventDefault();
    if (Object.keys(usuarioStorage).length != 0) {
      axios
        .post("/api/cart/add", {
          productId: productId,
          userId: usuarioStorage.id,
          price: product.price,
          quantity: quantity,
        })
        .then(() => {
          alert("producto agregado con exito");
        });
    } else {
      alert("debes estar conectado antes de agregar productos a tu carrito");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <span class="container_img">
              <img class="image" src={product.img} alt="cerveza" />
            </span>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h1 class="title">{product.type}</h1>
                <h2 class="subtitle text-md-left">{product.name}</h2>
                <p>
                  <b>Marca: </b>
                  {product.brand}
                </p>
                <p>
                  <b>Tamaño: </b>
                  {product.size}
                </p>
                <p class="price">$ {product.price}</p>
                <p>
                  <img src={location} width="35" />
                  {product.origin}
                </p>
                <p>
                  <img src={alcohol} width="35" />
                  {product.alcoholPercentage} %
                </p>
                <p>
                  <b>Disponibilidad: </b> 150 unidades
                </p>
                <p>
                  <b>Puntuación: </b> {starRating} estrellas
                  <i className="bi bi-star"></i>
                </p>
                <span class="quantity">
                  <span>
                    <b>Cantidad: </b>
                  </span>
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
                  <span class="form-control-plaintext">{quantity} </span>
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
                  <button
                    type="button"
                    class="btn btn-default cart"
                    onClick={handleAdd}
                  >
                    Agregar al carrito
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductReview></ProductReview>
    </>
  );
};

export default Product;
