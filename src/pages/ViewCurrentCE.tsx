/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ViewCurrentCE.module.css";

const ViewCurrentCEs = () => {
  const [ces, setCEs] = useState<any[]>([]);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [ceToDelete, setCeToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCEs = localStorage.getItem("ces");
    if (savedCEs) {
      setCEs(JSON.parse(savedCEs));
    }
  }, []);

  const handleDelete = (index: number) => {
    setCeToDelete(index);
    setIsConfirmVisible(true);
  };

  const confirmDelete = () => {
    if (ceToDelete !== null) {
      const updatedCredentials = ces.filter((_, i) => i !== ceToDelete);
      setCEs(updatedCredentials);
      localStorage.setItem("ces", JSON.stringify(updatedCredentials)); 
    }
    setIsConfirmVisible(false);
    setCeToDelete(null);
  };

  const cancelDelete = () => {
    setIsConfirmVisible(false);
    setCeToDelete(null);
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
        <h1 className={styles.header}>View Current CEs</h1>
        <div className={styles.credentialList}>
          {ces.length === 0 ? (
            <p>No CEs available.</p>
          ) : (
            ces.map((ce, index) => (
              <div key={index} className={styles.credentialRow}>
                <div className={styles.credentialDetail}>
                  <strong>Presenter:</strong> {ce.presenter}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Credentials:</strong> {ce.credentials}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Title:</strong> {ce.title}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Date:</strong> {ce.date}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Hours:</strong> {ce.hours}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Organization:</strong> {ce.organization}
                </div>
                <div className={styles.credentialDetail}>
                  <strong>Location:</strong> {ce.location}
                </div>
                <button onClick={() => handleDelete(index)} className={styles.deleteButton}>
                  Delete
                </button>
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

export default ViewCurrentCEs;
