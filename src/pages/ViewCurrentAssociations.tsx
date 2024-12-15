/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ViewCurrentAssociations.module.css";

const ViewCurrentAssociations = () => {
  const [associations, setAssociations] = useState<any[]>([]);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [associationToDelete, setAssociationToDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAssociations = localStorage.getItem("association");
    if (savedAssociations) {
      setAssociations(JSON.parse(savedAssociations));
    }
  }, []);

  const handleDelete = (index: number) => {
    setAssociationToDelete(index);
    setIsConfirmVisible(true);
  };

  const confirmDelete = () => {
    if (associationToDelete !== null) {
      const updatedAssociations = associations.filter((_, i) => i !== associationToDelete);
      setAssociations(updatedAssociations);
      localStorage.setItem("association", JSON.stringify(updatedAssociations));
    }
    setIsConfirmVisible(false);
    setAssociationToDelete(null);
  };

  const cancelDelete = () => {
    setIsConfirmVisible(false);
    setAssociationToDelete(null);
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
        <h1 className={styles.header}>View Current Associations</h1>
        <div className={styles.associationList}>
          {associations.length === 0 ? (
            <p>No associations available.</p>
          ) : (
            associations.map((association, index) => (
              <div key={index} className={styles.associationRow}>
                <div className={styles.associationDetail}>
                  <strong>Name:</strong> {association.name}
                </div>
                <div className={styles.associationDetail}>
                  <strong>Renewal Cycle:</strong> {association.date}
                </div>
                <div className={styles.associationDetail}>
                  <strong>URL:</strong>{" "}
                  <a href={association.url} target="_blank" rel="noopener noreferrer">
                    {association.url}
                  </a>
                </div>
                <div className={styles.associationDetail}>
                  <strong>Fee:</strong> {association.fee}
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
            <p>Are you sure you want to delete this association?</p>
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

export default ViewCurrentAssociations;
