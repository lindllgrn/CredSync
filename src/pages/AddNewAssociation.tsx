import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "../styles/AddNewAssociation.module.css";

const AddNewAssociation = () => {
  const [associations, setAssociations] = useState([{ name: "", url: "", date: "", fee: "" }]);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 

  const addAssociationField = () => {
    setAssociations((prevAssociations) => [...prevAssociations, { name: "", url: "", date: "", fee: "" }]);
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleInputChange = (index: number, field: "name" | "url" | "date" | "fee", value: string) => {
    setAssociations((prevAssociations) => {
      const updatedAssociations = [...prevAssociations];
      updatedAssociations[index] = { ...updatedAssociations[index], [field]: value };
      return updatedAssociations;
    });
};

const handleSave = () => {
    const savedAssociations = JSON.parse(localStorage.getItem("association") || "[]");
    localStorage.setItem("association", JSON.stringify([...savedAssociations, ...associations]));
    navigate("/home");
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
        <h1 className={styles.header}>Add New Association</h1>
        <div className={styles.credentialList} ref={listRef}>
          {associations.map((association, index) => (
            <div key={index} className={styles.credentialRow}>
              <input
                type="text"
                placeholder="Name of Association"
                className={styles.inputField}
                value={association.name}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Renewal Cycle"
                className={styles.inputField}
                value={association.date}
                onChange={(e) => handleInputChange(index, "date", e.target.value)}
              />
              <input
                type="text"
                placeholder="URL for Association"
                className={styles.inputField}
                value={association.url}
                onChange={(e) => handleInputChange(index, "url", e.target.value)}
              />
              <input
                type="text"
                placeholder="Fee"
                className={styles.inputField}
                value={association.fee}
                onChange={(e) => handleInputChange(index, "fee", e.target.value)}
              />
                {index < associations.length - 1 && (
                <hr className={styles.horizontalLine} />
              )}
            </div>
          ))}
        </div>
        <button onClick={addAssociationField} className={styles.addButton}>
          +
        </button>
        <button onClick={handleSave} className={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewAssociation;
