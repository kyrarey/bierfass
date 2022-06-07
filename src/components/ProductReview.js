import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductReview = () => {

  const { id } = useParams();
  const [review, setReview] = useState("");

  useEffect(() => {
    axios.get(`/${id}`).then((response) => response.data);
    //      .then((reviews)=> setReview(reviews))
  }, []);

  return(
    <div>
      <lu>
        <h2>REVIEWS</h2>
        <li>
          <img src="https://moderncss.dev/img/posts/26/avatar1.png"></img>
          <h3>fecha de la review </h3>
          <div className="stars-outer">
            <div className="stars-inner"></div>
          </div>
          <div id="textReview">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </li>
      </lu>
      <div>
        <button>agregar review</button>
      </div>
    </div>
  )
};

export default ProductReview;
