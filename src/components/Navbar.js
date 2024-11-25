import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const SidebarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar-navbar">
      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleSidebar}>
        <i className={isSidebarOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={toggleSidebar}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarNavbar;
