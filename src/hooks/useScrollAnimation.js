import React from 'react';
import './styles/style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Solutions from './components/Solutions';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Solutions />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
