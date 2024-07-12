import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../components/Products.css';

function Terrariums() {
  const [showInfo, setShowInfo] = useState(false);

  const products = [
    {
      id: 1,
      image: '/terrariums/terra1.jpg',
      price: '100.00',
      discountPrice: '75.00',
      description: '',
    },
    {
      id: 2,
      image: '/terrariums/terra2.png',
      price: '200.00',
      discountPrice: '150.00',
      description: '',
    },
    {
      id: 3,
      image: '/terrariums/terra3.png',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 4,
      image: '/terrariums/terra4.png',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 5,
      image: '/terrariums/terra5.png',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 6,
      image: '/terrariums/terra6.png',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    }
  ];

  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="product-container">
      <div className="product-title">
        <h1>Terrariums</h1>
        <button className="title-info-button" onClick={handleToggleInfo}>
          More Info
        </button> 
      </div>
      {showInfo && (
        <div className="title-info-message">
          <p>Terrariums are miniature gardens housed inside small containers. They can be entirely enclosed or open to the atmosphere. They are a perfect way to bring greenery into small spaces and are low maintenance.</p>
        </div>
      )}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            price={product.price}
            discountPrice={product.discountPrice}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Terrariums;
