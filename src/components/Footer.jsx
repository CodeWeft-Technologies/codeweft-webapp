import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaRobot, FaMicrophoneAlt, FaCalendarAlt, FaPhoneAlt, FaStethoscope, FaBuilding, FaGraduationCap, FaShoppingCart } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer-center top-center">
      <div className="footer-logo-text gradient-logo">CODE<span>WEFT</span></div>
      <div className="footer-slogan-grid">
        <p>Empowering Businesses With AI Innovation</p>
      </div>
    </div>

    <div className="footer-content new-layout">
      {/* Social Links */}
      <div className="footer-column social shift-left">
        <p className="footer-heading gradient-title">Follow Us</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/codeweft/" target="_blank" rel="noreferrer" className="social-link">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573581218159" target="_blank" rel="noreferrer" className="social-link">
            <FaFacebook size={18} /> Facebook
          </a>
          <a href="https://www.instagram.com/codeweft.ai?igsh=cmxkYThtdTRtdnds" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram size={18} /> Instagram
          </a>
        </div>
      </div>

      {/* Products with icons */}
      <div className="footer-column products shift-left">
        <p className="footer-heading gradient-title">Our Products</p>
        <div className="footer-card-links">
          <a href="#chat-bots" className="footer-card"><FaRobot size={16} /> AI Chat Assistant</a>
          <a href="#voice-assistant" className="footer-card"><FaMicrophoneAlt size={16} /> AI Voice Assistant</a>
          <a href="#appointment-booking" className="footer-card"><FaCalendarAlt size={16} /> Appointment Booking</a>
          <a href="#phone-agent" className="footer-card"><FaPhoneAlt size={16} /> Phone Calling Agent</a>
        </div>
      </div>

      {/* Industries with icons */}
      <div className="footer-column industries shift-right">
        <p className="footer-heading gradient-title">Industries</p>
        <div className="footer-card-links">
          <a href="#solutions" className="footer-card"><FaStethoscope size={16} /> Healthcare</a>
          <a href="#solutions" className="footer-card"><FaBuilding size={16} /> Real Estate</a>
          <a href="#solutions" className="footer-card"><FaGraduationCap size={16} /> Education</a>
          <a href="#solutions" className="footer-card"><FaShoppingCart size={16} /> Retail & E-Commerce</a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-column links shift-right">
        <p className="footer-heading gradient-title">Quick Links</p>
        <div className="footer-card-links">
          <a href="#home" className="footer-card">Home</a>
          <a href="#products" className="footer-card">Products</a>
          <a href="#solutions" className="footer-card">Industries</a>
          <a href="#about" className="footer-card">About</a>
          <a href="#contact" className="footer-card">Contact</a>
        </div>
      </div>
    </div>

    <p className="copyright">© 2025 Codeweft Technologies. All rights reserved.</p>
  </footer>
);

export default Footer;
