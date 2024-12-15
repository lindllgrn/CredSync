import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import styles from '../styles/HomePage.module.css'; 
import logo from '../assets/logo.png';  

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSignOut = () => {
    setIsModalVisible(true); 
  };

  const handleConfirmSignOut = () => {
    setIsModalVisible(false);
    navigate('/');  
  };

  const handleCancelSignOut = () => {
    setIsModalVisible(false); 
  };

  return (
    <div className={styles.homePage}>
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
      <div className={styles.overlay}> 
      <button
        onClick={() => navigate('/profile')}  
        className={styles.signOutButton}
      >
        <FaUserCircle />
        </button>

      <button
        onClick={handleSignOut}
        className={styles.profileButton}
      >
        
        <FaSignOutAlt />

      </button>
          <div className={styles.leftSection}>
            <img src={logo} alt="CredSync Logo" className={styles.logo} />
            <h1 className={styles.welcomeText}>Welcome to Your Dashboard</h1>
          </div>

          <div className={styles.buttonUnderlay}> 

          <div className={styles.buttonContainer}>
            <button onClick={() => navigate('/add-new-credential')} className={styles.actionButton}>
              Add New Credentials
            </button>
            <button onClick={() => navigate('/add-new-ce')} className={styles.actionButton}>
              Add New CE's
            </button>
            <button onClick={() => navigate('/add-new-association')} className={styles.actionButton}>
              Add New Association
            </button>
          </div>

          <div className={styles.buttonContainer2}>
            <button onClick={() => navigate('/view-current-credentials')} className={styles.actionButton}>
              View Your Current Credentials
            </button>
            <button onClick={() => navigate('/view-current-ce')} className={styles.actionButton}>
              View Your Current CE's
            </button>
            <button onClick={() => navigate('/view-current-associations')} className={styles.actionButton}>
              View Your Current Associations
            </button>
          </div>
          </div>
</div>
      {isModalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Are you sure you want to sign out?</h2>
            <div className={styles.modalButtons}>
              <button onClick={handleConfirmSignOut} className={styles.confirmButton}>Yes</button>
              <button onClick={handleCancelSignOut} className={styles.cancelButton}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
