import React from 'react';

const Hero = () => (
  <section className="hero fade-in" id="home" aria-labelledby="hero-heading">
    <div className="hero-subheading">Weaving Intelligence Into Tomorrow</div>
    <h1 id="hero-heading" className="hero-heading">
      Weaving Intelligence<br />Into The Fabric of Tomorrow
    </h1>
    <p className="hero-description">
      Cutting-edge AI solutions that transform businesses through voice bots, chatbots, and intelligent automation.
    </p>
    <div className="hero-buttons">
      <a href="#products" className="explore-products" aria-label="Explore our AI products">
        Explore Products
      </a>
      <a href="#contact" className="learn-more" aria-label="Learn more about our AI solutions">
        Learn More
      </a>
    </div>
  </section>
);

export default Hero;
