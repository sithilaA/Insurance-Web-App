import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from '../assets/img/Logo.png';

const RECAPTCHA_SITE_KEY = '6LeVeEorAAAAAFER_s1BFd51FXLW7CPJAuUmqjk_'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [recaptchaToken, setRecaptchaToken] = useState('');

  // Load Google reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Execute reCAPTCHA and get token
    if (window.grecaptcha) {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'login' });
      setRecaptchaToken(token);
      console.log('reCAPTCHA Token:', token);
      
      // Proceed with your actual login logic here (e.g., API request)
      console.log('Login Data:', formData);
    } else {
      alert('reCAPTCHA failed to load');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="SafeNest Logo" className="logo" />
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Login</h2>
            <a href="#" className="signup-link">Don't have an account ?</a>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="keep-me-signin-checkbox"
              />
              Keep me sign in
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="footer-text">Distributed by <strong>SafeNest-Life</strong></div>
      </div>
    </div>
  );
};

export default Login;
