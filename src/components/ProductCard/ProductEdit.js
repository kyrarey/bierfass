import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  let navigate = useNavigate();

  const onClickEdit = (e) => {
    e.preventDefault();
    navigate(`/editProduct/${id}`);
  };

  return (
    <div className="row">
      <div class="col cardSize">
        <div class="card imgProd">
          <img src={img} align="center" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">${price}</p>
            <p class="card-text">{size}ml</p>
            <p class="card-text">%{alcoholPercentage}</p>
            <p class="card-text">{type}</p>
            <p class="card-text">{brand}</p>
            <button onClick={onClickEdit} class="btn btn-secondary">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
