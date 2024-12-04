// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} VND</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
};

export default ProductCard;
