import React, { useState } from 'react';

const productData = [
  {
    id: 'chat-bots',
    title: 'AI Appointment Booking Chat Assistant',
    iconClass: 'chat-bots',
    features: [
      'Context-aware responses',
      'Multi-language support',
      'Knowledge base integration',
      '24/7 availability',
    ],
  },
  {
    id: 'voice-assistant',
    title: 'AI Voice-Powered Hospital Assistant',
    iconClass: 'voice-assistant',
    features: [
      'Conversational AI trained for healthcare queries',
      'Supports booking, editing, and canceling appointments via voice',
      'Interactive voice feedback with multilingual support',
    ],
  },
  {
    id: 'appointment-booking',
    title: 'AI Appointment Booking Voice + Chat Assistant',
    iconClass: 'appointment-booking',
    features: [
      'Hands-free voice recognition & intuitive chat interface',
      'Multi-language support for inclusive interactions',
      '24/7 intelligent assistant for booking, rescheduling',
    ],
  },
  {
    id: 'phone-agent',
    title: 'AI Phone Calling Agent',
    iconClass: 'phone-agent',
    features: [
      'Calls potential buyers automatically',
      'Collects lead responses & preferences',
      'Works 24/7 without human effort',
    ],
    comingSoon: true,
  },
];
const scrollToContact = (e) => {
  e.preventDefault();
  const section = document.getElementById('contact');
  if (section) {
    const offset = section.offsetTop - 70; // adjust for header height
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
};

const Products = () => {
  const [filter, setFilter] = useState('all');

  const filtered = productData.filter(
    (item) => filter === 'all' || item.id === filter
  );

  return (
    <section className="products fade-in" id="products" aria-labelledby="products-heading">
      <h2 id="products-heading">Our AI solutions that transform your business</h2>
      <p className="product-subtext">
        Power smarter conversations and seamless operations with our AI tools.
      </p>

      <div className="products-filter" role="tablist" aria-label="Product filters">
  <button
    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
    onClick={() => setFilter('all')}
    role="tab"
    aria-selected={filter === 'all'}
  >
    All
  </button>
  
  <button
    className={`filter-btn ${filter === 'chat-bots' ? 'active' : ''}`}
    onClick={() => setFilter('chat-bots')}
    role="tab"
    aria-selected={filter === 'chat-bots'}
  >
    Chat Assistant
  </button>
  
  <button
    className={`filter-btn ${filter === 'voice-assistant' ? 'active' : ''}`}
    onClick={() => setFilter('voice-assistant')}
    role="tab"
    aria-selected={filter === 'voice-assistant'}
  >
    Voice Assistant
  </button>
  
  <button
    className={`filter-btn ${filter === 'appointment-booking' ? 'active' : ''}`}
    onClick={() => setFilter('appointment-booking')}
    role="tab"
    aria-selected={filter === 'appointment-booking'}
  >
    Appointment Booking Assistant
  </button>
  
  <button
    className={`filter-btn ${filter === 'phone-agent' ? 'active' : ''}`}
    onClick={() => setFilter('phone-agent')}
    role="tab"
    aria-selected={filter === 'phone-agent'}
  >
    AI Phone Agent
  </button>
</div>


      <div className={`products-content ${filtered.length === 1 ? 'center-single' : ''}`}>
        {filtered.map((product) => (
          <article className={`product ${product.id}`} id={product.id} key={product.id}>
            <div className={`product-icon ${product.iconClass}`} aria-hidden="true"></div>
            <h3>{product.title}</h3>
            <ul>
              {product.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <div className="product-buttons">
            <a href="#contact" onClick={scrollToContact} className="product-btn learn-more-btn">Learn More</a>
            <a href="#contact" onClick={scrollToContact} className="product-btn demo-btn">
            {product.comingSoon ? 'Quick Demo' : 'Free Trial'}
            </a>

            </div>
            {product.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
