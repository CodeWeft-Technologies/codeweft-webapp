import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => setMenuOpen(!menuOpen);
  const closeNav = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <a href="#home" className="logo" aria-label="CODEWEFT Home">CODEWEFT</a>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleNav}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu" role="menubar">
          <a href="#home" role="menuitem" onClick={closeNav}>Home</a>
          <div className="dropdown" role="menuitem" aria-haspopup="true">
            <a href="#products" className="products-toggle" aria-label="Products menu">Products</a>
            <div className="dropdown-content" role="menu">
              <a href="#chat-bots" onClick={closeNav}>AI Chat Assistant</a>
              <a href="#voice-assistant" onClick={closeNav}>AI Voice Assistant</a>
              <a href="#appointment-booking" onClick={closeNav}>Appointment Booking</a>
              <a href="#phone-agent" onClick={closeNav}>Phone Calling Agent</a>
            </div>
          </div>
          <a href="#solutions" role="menuitem" onClick={closeNav}>Industries</a>
          <a href="#about" role="menuitem" onClick={closeNav}>About</a>
          <a href="#contact" role="menuitem" onClick={closeNav}>Contact</a>
          <a href="#contact" className="get-started" role="menuitem" onClick={closeNav}>Get Started</a>

        </div>
      </nav>
    </header>
  );
};

export default Header;
