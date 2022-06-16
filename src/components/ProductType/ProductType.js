import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductType.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductType = () => {
  const [typeSearch, setTypeSearch] = useState([]);
  const type = useParams().type;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/style/${type}`)
      .then((res) => setTypeSearch(res.data));
  }, [type]);

  return (
    <>
      <div>
        <h1 class="type">Estilo de cerveza {type}</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {typeSearch.map((card) => (
            <ProductCard {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductType;
