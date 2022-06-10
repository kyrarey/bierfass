import React from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import CustomPagination from '../CustomPagination/CustomPagination';
import { useState, useEffect } from 'react';

const Home = () => {
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(1);

  console.log(`http://localhost:8000/api/products/list/${page}`);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/list/${page}`)
      .then((data) => {
        setHome(data.data);
        console.log(home);
      });
  }, [page]);

  return (
    <div>
      <h1 align="center">Ofertas</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {home.map((card) => (
          <ProductCard {...card} />
        ))}
      </div>
      <CustomPagination setPage={setPage} page={page}></CustomPagination>
    </div>
  );
};

export default Home;
