import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useGlobalContext } from '/home/mgonidev/Desktop/BierfassV2/bierfass/src/context/globalUserContext.js';

const Search = () => {
  const { productSearch } = useGlobalContext();

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {productSearch.map((card) => (
        <ProductCard {...card} />
      ))}
    </div>
  );
};

export default Search;
