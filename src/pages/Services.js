import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <header className="services-header"><br/>
        <h1>Our Services</h1>
        <p>
          D&S Cloud Computing offers a wide range of technology solutions to help businesses thrive. Explore our core services below.
        </p>
      </header>

      {/* Services List Section */}
      <section className="services-list">
        {/* POS Systems */}
        <div className="service-item">
          <i className="fas fa-cash-register service-icon"></i>
          <h2>Point of Sale (POS) Systems</h2>
          <p>
            Simplify business transactions with our cutting-edge POS systems. Manage sales, inventory, and customer data seamlessly, all in one platform.
          </p>
        </div>

        {/* ERP Systems */}
        <div className="service-item">
          <i className="fas fa-cogs service-icon"></i>
          <h2>Enterprise Resource Planning (ERP) Systems</h2>
          <p>
            Optimize your business operations with tailored ERP solutions that integrate finance, supply chain, and human resource management into a single system.
          </p>
        </div>

        {/* Web Design */}
        <div className="service-item">
          <i className="fas fa-laptop service-icon"></i>
          <h2>Web Design</h2>
          <p>
            Build a strong online presence with responsive and visually stunning websites designed to captivate your audience and drive conversions.
          </p>
        </div>

        {/* App Development */}
        <div className="service-item">
          <i className="fas fa-mobile-alt service-icon"></i>
          <h2>App Development</h2>
          <p>
            Bring your ideas to life with custom mobile and web applications, designed with performance and user experience in mind.
          </p>
        </div>

        {/* Networking */}
        <div className="service-item">
          <i className="fas fa-network-wired service-icon"></i>
          <h2>Networking</h2>
          <p>
            Establish reliable and secure network infrastructure for seamless communication and efficient business operations.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="service-item">
          <i className="fas fa-bullhorn service-icon"></i>
          <h2>Digital Marketing</h2>
          <p>
            Reach your target audience with data-driven digital marketing strategies, including SEO, social media management, and paid advertising.
          </p>
        </div>

        {/* Graphic Design */}
        <div className="service-item">
          <i className="fas fa-paint-brush service-icon"></i>
          <h2>Graphic Design</h2>
          <p>
            Enhance your brand with creative designs, from logos to marketing materials, crafted to leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Elevate Your Business?</h2>
        <p>
          Contact D&S Cloud Computing today to discuss how our services can help you achieve your goals.
        </p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default Services;
