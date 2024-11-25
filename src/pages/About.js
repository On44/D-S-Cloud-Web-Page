import React from 'react';  
import './About.css';  

const About = () => (  
  <div className="about-page">  
    <header className="about-header"><br/> 
      <h1>About D&S Cloud Computing</h1>  
    </header>  

    <section className="about-content">  
      <p>  
        D&S Cloud Computing is a Kenyan-based technology company dedicated to delivering innovative and reliable technology solutions. We specialize in **Point of Sale (POS)** and **Enterprise Resource Planning (ERP)** systems, catering to businesses of all sizes to help them streamline their operations and achieve success in an ever-evolving digital landscape.  
      </p>  

      <h2>Our Mission</h2>  
      <p>  
        Our mission is to empower businesses with state-of-the-art technology solutions that foster growth, efficiency, and scalability. We aim to transform traditional systems into modern, user-friendly, and highly efficient platforms.  
      </p>  

      <h2>Our Vision</h2>  
      <p>  
        At D&S Cloud Computing, we envision a future where technology bridges gaps and brings seamless solutions to everyday business challenges. We aspire to be the leading provider of cutting-edge tech services in Kenya and beyond.  
      </p>  

      <h2>Core Values</h2>  
      <ul className="values-list">  
        <li><strong>Innovation:</strong> Continuously pushing boundaries to offer the latest and best solutions.</li>  
        <li><strong>Customer-Centric:</strong> Placing our clients' needs at the heart of everything we do.</li>  
        <li><strong>Integrity:</strong> Building trust through transparency, reliability, and ethical practices.</li>  
        <li><strong>Excellence:</strong> Delivering exceptional quality in every project and service.</li>  
      </ul>  

      <h2>What We Do</h2>  
      <p>  
        At D&S Cloud Computing, we offer a wide range of services to meet the diverse needs of our clients:  
      </p>  
      <ul className="services-list">  
        <li><strong>POS Systems:</strong> Comprehensive point-of-sale solutions tailored to various industries.</li>  
        <li><strong>ERP Systems:</strong> Streamlined enterprise resource planning for efficient business management.</li>  
        <li><strong>Web Design:</strong> Modern, responsive, and visually stunning websites for businesses.</li>  
        <li><strong>App Development:</strong> Custom mobile and web applications built to meet your specific needs.</li>  
        <li><strong>Digital Marketing:</strong> Proven strategies to boost your brand and online presence.</li>  
        <li><strong>Networking:</strong> Reliable and secure networking solutions for businesses of all sizes.</li>  
        <li><strong>Graphic Design:</strong> Eye-catching visuals that leave a lasting impression.</li>  
      </ul>  

      <h2>Why Choose Us?</h2>  
      <p>  
        Choosing D&S Cloud Computing means partnering with a team of skilled professionals who are passionate about technology and committed to your success. We offer:  
      </p>  
      <ul className="why-us-list">  
        <li>Expertise in the latest technologies and trends.</li>  
        <li>Personalized solutions tailored to your unique business needs.</li>  
        <li>Exceptional customer support available every step of the way.</li>  
        <li>Competitive pricing without compromising quality.</li>  
      </ul>  
    </section>  

    <footer className="about-footer">  
      <p>Discover how D&S Cloud Computing can transform your business today.  
        <a href="/contact" className="contact-link"> Contact us</a>.  
      </p>  
    </footer>  
  </div>  
);  

export default About;  
