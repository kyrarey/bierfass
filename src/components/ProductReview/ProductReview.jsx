import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductReview.css';

const ProductReview = () => {
  const { productId } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    axios
      .get(`/api/reviews/${productId}`)
      .then((response) => response.data)
      .then((reviews) => setReview(reviews));
  }, []);

  return (
    <div>
      <ul>
        <div className="subtitle">
          <h3 align="center">REVIEWS</h3>
        </div>

        {review.length === 0 ? (
          <div align="center">
            <p>No hay comentarios aun</p>
          </div>
        ) : (
          review.map((Onereview) => (
            <li>
              {console.log(Onereview)}
              <div className="container">
                <div class="row">
                  <div className="col-2">
                    <div>
                      <img
                        id="img"
                        src="https://moderncss.dev/img/posts/26/avatar1.png"
                      ></img>
                    </div>
                    <div id="date">
                      <p className="text-left">
                        {new Date(Onereview.createdAt).toLocaleDateString(
                          'es-AR'
                        )}{' '}
                      </p>
                    </div>
                    <div>
                      <i>{'⭐'.repeat(Onereview.rating)}</i>
                    </div>
                  </div>
                  <div className="col-8" id="textReview">
                    <p>"{Onereview.comment}"</p>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="pb-5" align="center">
        <Link to={`/newReview/${productId}`}>
          <button type="button" class="btn btn-default cart">
            agregar review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductReview;
