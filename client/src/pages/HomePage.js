import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to NoodleWorks</h1>
          <p>Your one-stop solution for modern web applications</p>
          <Link to="/contact" className="cta-button">Contact Us Today</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Our applications work seamlessly across all devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance for the best user experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Data</h3>
              <p>Your information is always protected with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"This platform transformed our business operations completely!"</p>
              <div className="client-info">
                <h4>Eliza McClintock</h4>
                <p>CEO, Tech Solutions</p>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The support team is incredible and the product exceeds expectations."</p>
              <div className="client-info">
                <h4>Aaysuh Garg</h4>
                <p>Marketing Director, MatchmakeAI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;