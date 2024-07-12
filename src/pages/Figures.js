import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
import '../components/Products.css';

function Figures() {
  const [showInfo, setShowInfo] = useState(false);

  const products = [
    {
      id: 1,
      image: '/figure/figure1.jpg',
      price: '100.00',
      discountPrice: '75.00',
      description: '',
    },
    {
      id: 2,
      image: '/figure/figure2.jpg',
      price: '200.00',
      discountPrice: '150.00',
      description: '',
    },
    {
      id: 3,
      image: '/figure/figure3.jpg',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 4,
      image: '/figure/figure4.jpg',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 5,
      image: '/figure/figure5.jpg',
      price: '300.00',
      discountPrice: '225.00',
      description: '',
    },
    {
      id: 6,
      image: '/figure/figure6.jpg',
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
        <h1>Figure</h1>
        <button className="title-info-button" onClick={handleToggleInfo}>
          More Info
        </button> 
      </div>
      {showInfo && (
        <div className="title-info-message">
          <p>figure are miniature gardens housed inside small containers. They can be entirely enclosed or open to the atmosphere. They are a perfect way to bring greenery into small spaces and are low maintenance.</p>
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


export default Figures
