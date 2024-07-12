import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ image, price, discountPrice, description }) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-info">
        <p className="product-description">{description}</p>
        <p className="product-price">
          <span className="original-price">₹{price}</span>
          <span className="discount-price">₹{discountPrice}</span>
        </p>
        {count === 0 ? (
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div className="cart-controls">
            <button className="decrement-button" onClick={handleDecrement}>
              -
            </button>
            <span className="count">{count}</span>
            <button className="increment-button" onClick={handleIncrement}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
