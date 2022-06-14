import firstImg from "../../assets/home1.jpeg";
import secondImg from "../../assets/home2.jpeg";
import thirdImg from "../../assets/home3.webp";
import "./Home.css";
import React from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import CustomPagination from "../CustomPagination/CustomPagination";
import { useState, useEffect } from "react";
import Header from "../Header/Header";

const Home = () => {
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(1);

  console.log(`http://localhost:8000/api/products/list/${page}`);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/list/${page}`)
      .then((data) => {
        setHome(data.data);
        console.log(home);
      });
  }, [page]);

  return (
    <div>
      <Header />
      <div class="container">
        <div class="card">
          <div class="card-body backcarousel">
            <div
              id="carouselExampleIndicators"
              class="carousel slide carousel-fade"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                  <img src={firstImg} class="d-block w-100" alt="Bud" />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src={secondImg} class="d-block w-100" alt="Hei" />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src={thirdImg} class="d-block w-100" alt="Corona" />
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
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
                  data-bs-target="#carouselExampleIndicators"
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
          </div>
        </div>
      </div>
      <section class="w-50 mx-auto text-center pt-5 pb-5">
        <div class="entry">
          <h1 class="p-3 fs-2 border-top border-bottom border-2">
            Disfruta de una buena cerveza desde tu casa
          </h1>
          <h3 class="p-3 fs-3">Nuestros productos</h3>
        </div>
      </section>
      <div class="product-card">
        <div class="container">
          {home.map((card) => (
            <div class="col">
              <ProductCard {...card} />
            </div>
          ))}
        </div>
      </div>
      <CustomPagination setPage={setPage} page={page}></CustomPagination>
    </div>
  );
};

export default Home;
