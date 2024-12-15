import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/WelcomePage.module.css';  
import logo from '../assets/logo.png'; 
const WelcomePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, email } = location.state || {}; 

  const [formData, setFormData] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    home: '',
    phone: '',
  });

  useEffect(() => {
    if (!firstName || !lastName || !email) {
      navigate('/signup');  
    }
  }, [firstName, lastName, email, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');  
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.decorativeCircles}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>

      <div className={styles.overlayContainer}>
        <div className={styles.leftSection}>
          <img src={logo} alt="CredSync Logo" className={styles.logo} />
          <h1>Let's create your profile</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="home"
              placeholder="Home Address"
              value={formData.home}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Save and Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
