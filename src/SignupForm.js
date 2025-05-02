import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

function SignupForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  // Handle input changes and set state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    const { fullName, email, password } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !password) {
      return 'All fields are required';
    }

    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }

    if (!/^\d{6,}$/.test(password)) {
      return 'Password must be at least 6 digits (numbers only)';
    }

    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();

    if (validationError) {
      setError(validationError);  // Display error if any
    } else {
      setError('');
      console.log('User registered:', form);  // Mock registration
      navigate('/dashboard');  // Redirect to dashboard on success
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Zerodha Kite - Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          className="signup-input"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="signup-input"
          type="number"
          name="password"
          placeholder="Password (numbers only)"
          value={form.password}
          onChange={handleChange}
        />
        {error && <p className="signup-error">{error}</p>}
        <button className="signup-button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;
