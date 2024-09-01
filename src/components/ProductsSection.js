import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      image: "https://seed2plant.in/cdn/shop/products/tomatoseeds.jpg?v=1604033216&width=1500c",
      title: "Tomatoes",
      description: "Fresh, juicy tomatoes perfect for salads and cooking."
    },
    {
      image: "https://www.simplyseed.co.uk/user/products/Bean%20Tendergreen.jpg",
      title: "French Beans",
      description: "Crisp and tender French beans, a versatile side dish."
    },
    {
      image: "https://ilovenursery.com/wp-content/uploads/2023/03/ILn_Capsicum-Green-_Seeds.jpg",
      title: "Capsicum",
      description: "Colorful and crunchy capsicum, great for stir-fries."
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
