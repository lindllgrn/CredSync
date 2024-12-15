import React from 'react';
import styles from '../styles/SignInPage.module.css';  
import logo from '../assets/logo.png'; 
import illustration from '../assets/illustration.png'; 
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.decorativeCircles}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle4}></div>
        <div className={styles.circle5}></div>
        <div className={styles.circle6}></div>
        <div className={styles.circle7}></div>
        <div className={styles.circle8}></div>
        <div className={styles.circle9}></div>
        <div className={styles.circle10}></div>
      </div>

      <div className={styles.overlayContainer}>
        <div className={styles.leftSection}>
          <img src={logo} alt="CredSync Logo" className={styles.logo} />
          <h1>Welcome! Please log into your account.</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
              required
            />
            <div className={styles.buttonContainer}>
              <button type="submit" onClick={() => navigate('/home')} className={styles.signInButton}>
                Sign In
              </button>
            </div>
          </form>
          <p className={styles.signUpLink}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>

        <div className={styles.rightSection}>
          <img src={illustration} alt="Illustration" className={styles.graphic} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
