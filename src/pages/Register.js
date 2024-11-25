import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  // State to manage form data and error/success messages
  const [formData, setFormData] = useState({
    name: '',          // Full Name
    email: '',         // Email Address
    password: '',      // Password
    confirmPassword: '', // Confirm Password
  });

  const [error, setError] = useState('');              // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state
  const navigate = useNavigate();                      // Hook for navigation

  // Handles form field changes and updates the corresponding state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update state dynamically based on field name
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents default form submission

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Check password length (min 6 characters)
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return;
    }

    setError(''); // Reset error message if validation passes
    setSuccessMessage(''); // Reset success message

    try {
      // Making the POST request to the backend API
      const response = await fetch('http://localhost:5000/register', {  // URL to your backend register endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,      // Sending name as part of the request
          email: formData.email,    // Sending email as part of the request
          password: formData.password, // Sending password as part of the request
        }),
      });

      // Check if the response is successful (status 200-299)
      if (response.ok) {
        const result = await response.json();  // Parse the response JSON

        console.log(result);  // Optional: Log the result for debugging or inspection

        setSuccessMessage('Registration successful! Redirecting to login...');
        
        // Redirect after 2 seconds to login page
        setTimeout(() => {
          navigate('/login'); // Redirect to login page
        }, 2000);
      } else {
        // Handle errors returned from the backend
        const errorData = await response.json();  // Parse error message from response
        setError(errorData.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      
      {/* Display error message */}
      {error && <p className="error">{error}</p>}

      {/* Display success message */}
      {successMessage && <p className="success">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email input field */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password input field */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Confirm Password input field */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Submit button */}
        <button type="submit" className="auth-btn">Register</button>
      </form>

      {/* Link to login page if user already has an account */}
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
