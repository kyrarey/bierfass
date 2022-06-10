import React from 'react';
import { Link } from 'react-router-dom';

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
      <div class="col">
        <div class="card imgProd">
          <img src={img} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">${price}</p>
            <p class="card-text">{size}ml</p>
            <p class="card-text">%{alcoholPercentage}</p>
            <p class="card-text">{type}</p>
            <p class="card-text">{brand}</p>
            <Link to={`product/${id}`}>
              <a href="#" class="btn btn-primary">
                Info
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
