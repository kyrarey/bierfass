import React from 'react';

const ProductCard = ({
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
            <a href="#" class="btn btn-primary">
              Info
            </a>
          </div>
        </div>
      </div>

      {/* <div class="card" style={{ width: 18 + 'rem' }}>
        <div class="col">
          <div class="card h-100">
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">${price}</p>
              <p class="card-text">{size}ml</p>
              <p class="card-text">%{alcoholPercentage}</p>
              <p class="card-text">{type}</p>
              <p class="card-text">{brand}</p>
              <a href="#" class="btn btn-primary">
                Info
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
