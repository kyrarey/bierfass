import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./newReview.css";

const NewReview = () => {



  return (
    <div className="container">
      <div className="col" >
        <h1> Gracias por tu calificacion!</h1>
        </div>
        <div className="col" >
          <form>
            <div className="star-rating">
              <input type="radio" id="5-stars" value="5" />
              <label htmlFor="radio1" className="star">
              <i class="bi bi-star"></i>
              </label>

              <input type="radio" id="4-stars" name="rating" value="4" />
              <label htmlFor="radio2" className="star">
                <i className="fas fa-star"></i>
              </label>

              <input type="radio" id="3-stars" name="rating" value="3" />
              <label htmlFor="radio3" className="star">
                <i className="fas fa-star"></i>
              </label>

              <input type="radio" id="2-stars" name="rating" value="2" />
              <label htmlFor="radio4" className="star">
                <i className="fas fa-star"></i>
              </label>

              <input type="radio" id="1-star" name="estrellas" value="1" />
              <label htmlFor="radio4" className="star">
                <i className="fas fa-star"></i>
              </label>
            </div>
            <div>
              <input className="comment" placeholder="Deja tu comentario aqui" />
            </div>
          </form>
        </div>
      </div>
  );
};

export default NewReview;
