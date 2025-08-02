import React from 'react';

const Solutions = () => (
  <section className="solutions fade-in" id="solutions" aria-labelledby="solutions-heading">
    <h2 id="solutions-heading">Industries</h2>
    <p>Tailored AI that drives impact across industries.</p>

    <div className="solutions-wrapper">
      <article className="solution-card">
        <div className="solution-icon">🏥</div>
        <h3>Healthcare & Hospitals</h3>
        <p>AI scheduling, patient support, and intelligent diagnostics.</p>
      </article>
      <article className="solution-card">
        <div className="solution-icon">🏘️</div>
        <h3>Real Estate</h3>
        <p>Property bots, lead capture, and appointment setting 24/7.</p>
      </article>
      <article className="solution-card">
        <div className="solution-icon">🎓</div>
        <h3>Education</h3>
        <p>Virtual tutors, student services, and intelligent scheduling assistants.</p>
      </article>
      <article className="solution-card">
        <div className="solution-icon">🛍️</div>
        <h3>Retail & ECommerce</h3>
        <p>Order tracking, returns processing, and product recommendation bots.</p>
      </article>
    </div>
  </section>
);

export default Solutions;
