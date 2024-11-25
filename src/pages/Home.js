import React, { useEffect, useState, useCallback } from 'react';
import './Home.css';

const Home = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const services = [
    {
      title: 'POS Systems',
      description: 'Our state-of-the-art POS systems help businesses streamline their transactions...',
      icon: 'fas fa-cash-register',
    },
    {
      title: 'ERP Systems',
      description: 'Tailored ERP solutions to manage finance, supply chain, and human resources...',
      icon: 'fas fa-sitemap',
    },
    {
      title: 'Web Design',
      description: 'We create responsive, visually stunning websites tailored to your brand...',
      icon: 'fas fa-laptop-code',
    },
    {
      title: 'App Development',
      description: 'Specializing in mobile and enterprise applications for every business need...',
      icon: 'fas fa-mobile-alt',
    },
    {
      title: 'Networking Solutions',
      description: 'Secure and efficient networking solutions to keep you connected...',
      icon: 'fas fa-network-wired',
    },
    {
      title: 'Digital Marketing',
      description: 'Implementing data-driven strategies to grow your online presence...',
      icon: 'fas fa-bullhorn',
    },
    {
      title: 'Graphic Design',
      description: 'Creating unique visual identities that elevate your brand...',
      icon: 'fas fa-paint-brush',
    },
  ];

  const handleNextService = useCallback(() => {
    setActiveServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
  });

  const handlePrevService = () => {
    setActiveServiceIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextService();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNextService]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to D&S Cloud Computing</h1>
          <p>
            Transforming businesses with innovative technology solutions. Partner with us to unlock your potential!
          </p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-carousel">
          <button className="carousel-btn prev" onClick={handlePrevService}>
            &#8249;
          </button>
          <div className="service-card">
            <h3>
              <i className={`${services[activeServiceIndex].icon} service-icon`}></i>
              {services[activeServiceIndex].title}
            </h3>
            <p>{services[activeServiceIndex].description}</p>
          </div>
          <button className="carousel-btn next" onClick={handleNextService}>
            &#8250;
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <h2>About Us</h2>
        <p>
          At D&S Cloud Computing, we specialize in delivering cutting-edge POS and ERP systems, web design, app development, networking solutions, digital marketing, and graphic design. Our mission is to empower businesses with innovative and scalable solutions.
        </p>
        <a href="/about" className="cta-button">Learn More</a>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-check-circle feature-icon"></i>
            <h3>Reliability</h3>
            <p>Dependable solutions tailored to your business needs.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-cogs feature-icon"></i>
            <h3>Customization</h3>
            <p>Flexible, scalable solutions that grow with your business.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-headset feature-icon"></i>
            <h3>24/7 Support</h3>
            <p>Always-on technical support to keep your systems running.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-line feature-icon"></i>
            <h3>Innovation</h3>
            <p>Leverage the latest technology for optimal efficiency.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <p>"D&S transformed our operations with their ERP system. Highly recommend!"</p>
            <h4>- Henry G., Eeatery Business Owner</h4>
          </div>
          <div className="testimonial-card">
            <p>"Their web design gave us a modern, professional look. Great team!"</p>
            <h4>- Ivy K., Hardware Business Owner</h4>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Insights</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <h3>How POS Systems Transform Businesses</h3>
            <p>Learn how POS solutions streamline operations and enhance customer experience.</p>
            <a href="/blog/pos-transform" className="read-more-link">Read More</a>
          </div>
          <div className="blog-card">
            <h3>Top Trends in ERP for 2024</h3>
            <p>Discover the future of ERP systems and their impact on businesses.</p>
            <a href="/blog/erp-trends-2024" className="read-more-link">Read More</a>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Contact us today to learn how D&S Cloud Computing can empower your business with the best technology solutions.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
