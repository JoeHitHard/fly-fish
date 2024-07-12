import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
import '../components/Products.css';

function Paintings() {
  const [showInfo, setShowInfo] = useState(false);

  const products = [
    {
      id: 1,
      image: '/paint/paint1.jpg',
      price: '100.00',
      discountPrice: '75.00',
      description: '',
    },
    {
      id: 2,
      image: '/paint/paint2.jpg',
      price: '200.00',
      discountPrice: '150.00',
      description: '',
    },
    {
      id: 3,
      image: '/paint/paint3.jpg',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 4,
      image: '/paint/paint4.jpg',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 5,
      image: '/paint/paint5.jpg',
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
        <h1>Paintings</h1>
        <button className="title-info-button" onClick={handleToggleInfo}>
          More Info
        </button> 
      </div>
      {showInfo && (
        <div className="title-info-message">
          <p>paint are miniature gardens housed inside small containers. They can be entirely enclosed or open to the atmosphere. They are a perfect way to bring greenery into small spaces and are low maintenance.</p>
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

export default Paintings
