import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "../styles/AddNewCE.module.css";

const AddNewCE = () => {
    const [ces, setCEs] = useState([
      { presenter: "", credentials: "", name: "", title: "", date: "", hours: "", organization: "", location: "" },
    ]);
    const listRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
  
    const addCEField = () => {
      setCEs((prevCEs) => [
        ...prevCEs,
        { presenter: "", credentials: "", name: "", title: "", date: "", hours: "", organization: "", location: "" },
      ]);
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTop = listRef.current.scrollHeight;
        }
      }, 100);
    };
  
    const handleInputChange = (
      index: number,
      field: "presenter" | "credentials" | "name" | "title" | "date" | "hours" | "organization" | "location",
      value: string
    ) => {
      setCEs((prevCEs) => {
        const updatedCEs = [...prevCEs];
        updatedCEs[index] = { ...updatedCEs[index], [field]: value };
        return updatedCEs;
      });
    };
  
    const handleSave = () => {
      const savedCEs = JSON.parse(localStorage.getItem("ces") || "[]");
      localStorage.setItem("ces", JSON.stringify([...savedCEs, ...ces]));
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
        <h1 className={styles.header}>Add New CE</h1>
        <div className={styles.credentialList} ref={listRef}>
          {ces.map((ce, index) => (
            <div key={index} className={styles.credentialRow}>
              <input
                type="text"
                placeholder="Presenter Name"
                className={styles.inputField}
                value={ce.presenter}
                onChange={(e) => handleInputChange(index, "presenter", e.target.value)}
              />
              <input
                type="text"
                placeholder="Presenter Credential Details"
                className={styles.inputField}
                value={ce.credentials}
                onChange={(e) => handleInputChange(index, "credentials", e.target.value)}
              />
              <input
                type="text"
                placeholder="Title of Session"
                className={styles.inputField}
                value={ce.title}
                onChange={(e) => handleInputChange(index, "title", e.target.value)}
              />
              <input
                type="text"
                placeholder="Date"
                className={styles.inputField}
                value={ce.date}
                onChange={(e) => handleInputChange(index, "date", e.target.value)}
              />
              <input
                type="text"
                placeholder="Total Hours"
                className={styles.inputField}
                value={ce.hours}
                onChange={(e) => handleInputChange(index, "hours", e.target.value)}
              />
              <input
                type="text"
                placeholder="Name of the Organization"
                className={styles.inputField}
                value={ce.organization}
                onChange={(e) => handleInputChange(index, "organization", e.target.value)}
              />
              <input
                type="text"
                placeholder="Location of the Organization Hosting the CE"
                className={styles.inputField}
                value={ce.location}
                onChange={(e) => handleInputChange(index, "location", e.target.value)}
              />
            </div>
          ))}
        </div>
        <button onClick={addCEField} className={styles.addButton}>
          +
        </button>
        <button onClick={handleSave} className={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewCE;
