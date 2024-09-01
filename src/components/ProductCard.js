import React from 'react';
const ProductCard = ({ image, title, description }) => (
    <div className="product-card bg-green-100 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
  export default ProductCard;