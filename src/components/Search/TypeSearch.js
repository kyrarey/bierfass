import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useGlobalContext } from '../../context/globalUserContext';

const TypeSearch = () => {
  const { searchType } = useGlobalContext();

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {searchType.map((card) => (
        <ProductCard {...card} />
      ))}
    </div>
  );
};

export default TypeSearch;
