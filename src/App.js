import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-green-50">
        <HomeSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
