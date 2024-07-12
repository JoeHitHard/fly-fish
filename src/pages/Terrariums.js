import React from 'react'
import ProductCard from '../components/ProductCard';
import ProductImg from '../content/logo.png';
import '../components/Products.css';

function Terrariums() {
  const products = [
    {
      id: 1,
      image: ProductImg,
      price: '100.00',
      discountPrice: '75.00',
      description: 'This is a short description of product 1.',
    },
    {
      id: 2,
      image: ProductImg,
      price: '200.00',
      discountPrice: '150.00',
      description: 'This is a short description of product 2.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    {
      id: 3,
      image: ProductImg,
      price: '300.00',
      discountPrice: '225.00',
      description: 'This is a short description of product 3.',
    },
    // Add more products as needed
  ];

  return (
    <div className="product-container">
      <h1>Terrariums</h1>
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

export default Terrariums
