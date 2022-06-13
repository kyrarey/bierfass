import React from 'react';
import ProductEdit from '../../ProductCard/ProductEdit';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`).then((data) => {
      setAllProducts(data.data);
    });
  }, []);

  return (
    <div>
      {' '}
      <div>
        <h1 align="center">Que producto desea editar?</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {allProducts.map((card) => (
            <ProductEdit {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
