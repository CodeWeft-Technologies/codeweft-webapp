import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Solutions />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;