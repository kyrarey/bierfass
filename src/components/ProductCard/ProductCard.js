import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  id,
  name,
  img,
  brand,
  price,
  size,
  alcoholPercentage,
  type,
}) => {
  return (
    <div className="container">
      <div class="product-card-body">
        <Link to={`/product/${id}`} class="product-card-body">
          <div class="row">
            <div class="col-md-6">
              <img src={img} class="product-card-img" alt="beer"></img>
            </div>
            <div class="col-md-6">
              <div class="product-card-text">
                <h4 class="border-top border-bottom border-2">{name}</h4>
                <p>${price}</p>
                <p>{size}ml</p>
                <p>%{alcoholPercentage}</p>
                <p>{type}</p>
                <p>{brand}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
