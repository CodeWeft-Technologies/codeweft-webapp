import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'loading' });

    emailjs.sendForm('service_qvit3n9', 'template_2q9sfa3', form.current, 'lLUVBrKy_uGLlMZYy')
      .then(() => {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ message: 'Failed to send. Please try again.', type: 'error' });
      });
  };

  return (
    <section className="contact-us fade-in" id="contact" aria-labelledby="contact-us-heading">
      <h2 id="contact-us-heading">Contact Us</h2>
      <p>Get in touch to explore how our AI products can elevate your business.</p>

      <div className="contact-us-content">
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p className="email"><strong>Email:</strong> <a href="mailto:codeweft.ai@gmail.com">codeweft.ai@gmail.com</a></p>
          <p className="phone"><strong>Phone:</strong> <a href="tel:+919137673670">+91 9137673670</a></p>
          <p className="address">Headquarters: Mumbai, MH, India</p>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail} aria-label="Contact form">
  <div className="form-group">
    <label htmlFor="from_name">Your Name</label>
    <input type="text" id="from_name" name="from_name" placeholder="John Doe" required />
  </div>
  <div className="form-group">
    <label htmlFor="phone_number">Your Number</label>
    <input type="tel" id="phone_number" name="phone_number" placeholder="+91 9876543210" required />
  </div>
  <div className="form-group">
    <label htmlFor="message">Your Message</label>
    <input type="text" id="message" name="message" placeholder="Write your message..." required />
  </div>
  <div className="form-group">
    <select id="product" name="product" defaultValue="" required>
      <option value="" disabled>Select Product</option>
      <option value="voice-assistant">AI Voice Assistant</option>
      <option value="chat-bots">AI Chat Bots</option>
      <option value="phone-agent">AI Phone Calling Agent</option>
      <option value="appointment-booking">AI Appointment Booking</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="from_email">Your Email</label>
    <input type="email" id="from_email" name="from_email" placeholder="you@example.com" required />
  </div>
  <button type="submit" id="submit-btn" aria-label="Send contact form">Send</button>

  {status.message && (
    <div className={`form-message ${status.type}`} role="status">{status.message}</div>
  )}
</form>
      </div>
    </section>
  );
};

export default Contact;
