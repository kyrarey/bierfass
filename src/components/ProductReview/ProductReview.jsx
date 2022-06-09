import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductReview.css";

const ProductReview = () => {
  const {userId, productId } = useParams();
  const [review, setReview] = useState("");

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
          <h3>REVIEWS</h3>
        </div>

        {!review ? (
          <p>No hay comentarios aun</p>
        ) : (
          review.map((Onereview) => (
            <li>
              <div className="container">
                <div className="col">
                  <div>
                    <img src="https://moderncss.dev/img/posts/26/avatar1.png"></img>
                  </div>
                  <div id="date">
                    <p className="text-left">
                      {new Date(Onereview.createdAt).toLocaleDateString(
                        "es-AR"
                      )}{" "}
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star">{Onereview.rating}</i>
                  </div>
                </div>
                <div className="col" id="textReview">
                  <p>{Onereview.comment}</p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      <div>
        <Link to={`/newReview/${userId}/${productId}`}>
          <button type="button" class="btn btn-default cart">
            agregar review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductReview;
