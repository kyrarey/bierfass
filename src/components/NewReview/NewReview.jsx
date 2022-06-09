import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./newReview.css";
import { useParams } from "react-router";
import { useState } from "react";


const NewReview = () => {
  
  const { userId, productId } = useParams();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");


  const handleChange = (e) => {
    const { value } = e.target;
      setComment(value);    
  };

  const handleClickStar=(e)=>{
    const value = e.target.getAttribute("value");
    setRating(value)
  }


  const handleSubmit = (e) => {
  
    e.preventDefault();
    axios
      .post(`/api/reviews/${userId}/${productId}`, {
        comment: comment,
        rating: rating,
        userId: userId,
        productId: productId,
      })
      .then(() => {
        alert("creaste exitosamente tu comentario");
      })
      .catch(() => {
        alert("no pudimos crear tu comentario, intenta de nuevo");
      });
  };

  return (
    <div className="container">
      <div className="col">
        <h1> Gracias por tu calificacion!</h1>
      </div>
      <div className="col" id="stars">
        <form onSubmit={handleSubmit}>
          <div className="col">
                   
            <div className="star-rating"   >
            <label  onClick={handleClickStar}> califica tu producto:
             

            <input type="radio" id="1-star" name="estrellas" value="1"  />
              <label htmlFor="radio4" className="star" >
              <i class="bi bi-star" name="star1 "value="1" ></i>
              </label>

            <input type="radio" id="2-stars" name="rating" value="2" />
              <label htmlFor="radio4" className="star">
              <i class="bi bi-star"  name="star2" value="2"></i>
              </label>

            <input type="radio" id="3-stars" name="rating" value="3" />
              <label htmlFor="radio3" className="star">
              <i class="bi bi-star"  name="star3" value="3" ></i>
              </label>

            <input type="radio" id="4-stars" name="rating" value="4" />
              <label htmlFor="radio2" className="star">
              <i class="bi bi-star"  name="star4" value="4"></i>
              </label>

              <input type="radio" id="5-stars" value="5" />
              <label htmlFor="radio1" className="star">
              <i class="bi bi-star" name="star5" value="5"></i>
              </label>
              </label>
            </div>

          </div>
          <div className="col-12" id="commentContainer" value={comment}>
            <input
              className="comment"
              name="comment"
              onChange={handleChange}
              placeholder="Deja tu comentario aqui"
            />
          </div>
          <div className="col" id="button">
            <button class="btn btn-default cart">agregar comentario</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewReview;
