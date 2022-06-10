import React from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import firstImg from "../../assets/home1.jpeg";
import secondImg from "../../assets/home2.jpeg";
import thirdImg from "../../assets/home3.webp";

const Home = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`).then((data) => {
      setHome(data.data);
      console.log(home);
    });
  }, []);

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src={firstImg} class="d-block w-100" alt="slide1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Peñon del águila</h5>
              <p></p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={secondImg} class="d-block w-100" alt="slide2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Antares</h5>
              <p></p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={thirdImg} class="d-block w-100" alt="slide3" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Rabieta</h5>
              <p></p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section class="w-50 mx-auto text-center pt-5 pb-5" id="home"><h1 class="p-3 fs-2 border-top border-bottom border-2">Disfruta de una buena cerveza desde tu casa</h1>
      <h3 class="p-3 fs-3">Nuestros productos</h3></section>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {home.map((card) => (
          <ProductCard {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
