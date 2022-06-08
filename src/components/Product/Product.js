import React from "react";
import "./Product.css";
import Andes2 from "./Andes2.webp";
import Andes3 from "./Andes3.jpeg";

const products = {
  name: "Roja Ipa",
  type: "Roja",
  size: "450 ml",
  price: "250",
  origin: "Argentina",
  marca: "Andes",
};

console.log(products.name);
//ProductCard recibe como parámetro la data
const Product = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={Andes2} class="d-block w-100" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img src={Andes3} class="d-block w-100" alt="Third slide" />
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
        <div class="col-md-7">
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
            <b>Origen: </b>
            {products.origin}
          </p>

          <p>
            <b>Disponibilidad: </b> En stock
          </p>
          <label>
            <b>Cantidad: </b>
          </label>
          <button type="submit" class="btn btn-default btn-qty">
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
          <input type="text" value="1"></input>
          <button type="submit" class="btn btn-default btn-qty">
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
  );
};

export default Product;
