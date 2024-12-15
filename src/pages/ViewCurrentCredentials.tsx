/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ViewCurrentCredentials.module.css";

const ViewCurrentCredentials = () => {
  const [credentials, setCredentials] = useState<any[]>([]);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [credentialToDelete, setCredentialToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCredentials = localStorage.getItem("credentials");
    if (savedCredentials) {
      setCredentials(JSON.parse(savedCredentials));
    }
  }, []);

  const handleDeleteClick = (index: number) => {
    setCredentialToDelete(index);
    setIsConfirmVisible(true);
  };

  const confirmDelete = () => {
    if (credentialToDelete !== null) {
      const updatedCredentials = credentials.filter((_, i) => i !== credentialToDelete);
      setCredentials(updatedCredentials);
      localStorage.setItem("credentials", JSON.stringify(updatedCredentials)); 
    }
    setIsConfirmVisible(false);
    setCredentialToDelete(null);
  };

  const cancelDelete = () => {
    setIsConfirmVisible(false);
    setCredentialToDelete(null);
  };

  const goBack = () => {
    navigate("/home"); 
  };

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
      <div className={styles.overlay}>
        <button onClick={goBack} className={styles.backButton}>
          &#x1f808;
        </button>

        <h1 className={styles.header}>View Current Credentials</h1>
        <div className={styles.credentialList}>
          {credentials.length === 0 ? (
            <p>No credentials available.</p>
          ) : (
            credentials.map((credential, index) => (
              <div key={index} className={styles.credentialRow}>
                <div className={styles.credentialDetail}>
                  <strong>Credential Name:</strong> {credential.name}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>State:</strong> {credential.state}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Credential Number:</strong> {credential.number}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Total CEs Needed:</strong> {credential.ce}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Renewal Date:</strong> {credential.date}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Fee:</strong> {credential.fee}
                </div>
                <button onClick={() => handleDeleteClick(index)} className={styles.deleteButton}>
                  Delete
                </button>
                {index < credentials.length - 1 && <hr className={styles.horizontalLine} />}
              </div>
            ))
          )}
        </div>
        {isConfirmVisible && (
          <div className={styles.confirmPopup}>
            <p>Are you sure you want to delete this credential?</p>
            <button className={styles.confirmYesButton} onClick={confirmDelete}>
              Yes
            </button>
            <button className={styles.confirmNoButton} onClick={cancelDelete}>
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCurrentCredentials;
