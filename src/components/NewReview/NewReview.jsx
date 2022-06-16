import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './newReview.css';
import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';

const NewReview = () => {
  const { productId } = useParams();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const user = !!localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleClickStar = (e) => {
    const value = e.target.getAttribute('value');
    setRating(value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/reviews/${productId}`, {
        comment: comment,
        rating: rating,
        userId: user.id,
        productId: productId,
      })
      .then(() => {
        alert('creaste exitosamente tu comentario');
        navigate(`/product/${productId}`);
      })
      .catch(() => {
        alert('Ya dejaste tu comentario sobre este producto');
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
            <div className="star-rating">
              <label onClick={handleClickStar}>
                {' '}
                califica tu producto:
                <input type="radio" id="1-star" name="estrellas" value="1" />
                <label htmlFor="radio4" className="star">
                  <i className="starRaiting" value={1}>
                    {rating < 1 ? '☆' : '★'}
                  </i>
                </label>
                <input type="radio" id="2-stars" name="rating" value="2" />
                <label htmlFor="radio4" className="star">
                  <i className="starRaiting" value={2}>
                    {rating < 2 ? '☆' : '★'}
                  </i>
                </label>
                <input type="radio" id="3-stars" name="rating" value="3" />
                <label htmlFor="radio3" className="star">
                  <i className="starRaiting" value={3}>
                    {rating < 3 ? '☆' : '★'}
                  </i>
                </label>
                <input type="radio" id="4-stars" name="rating" value="4" />
                <label htmlFor="radio2" className="star">
                  <i className="starRaiting" value={4}>
                    {rating < 4 ? '☆' : '★'}
                  </i>
                </label>
                <input type="radio" id="5-stars" value="5" />
                <label htmlFor="radio1" className="star">
                  <i className="starRaiting" value={5}>
                    {rating > 4 ? '★' : '☆'}
                  </i>
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
