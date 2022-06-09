import React from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import { useState, useEffect } from 'react';

const Home = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products`).then((data) => {
      setHome(data.data);
      console.log(home);
    });
  }, []);

  return (
    <div>
      <h1>la home</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {home.map((card) => (
          <ProductCard {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
