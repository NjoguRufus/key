import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const HomeSection = () => (
    <section id="home" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to Key-Company Farming</h2>
        <p className="text-xl mb-8">Bringing fresh, sustainable produce to your table</p>
        <a href="#products" className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105 inline-flex items-center">
          Explore Our Products
          <FiArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
  export default HomeSection;