import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddNewCredential.module.css";

interface Credential {
  name: string;
  state: string;
  number: string;
  ce: string;
  date: string;
  fee: string;
}

const AddNewCredentials = () => {
  const [credentials, setCredentials] = useState<Credential[]>([
    { name: "", state: "", number: "", ce: "", date: "", fee: "" },
  ]);
  const [isFormValid, setIsFormValid] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const addCredentialField = () => {
    setCredentials((prevCredentials) => [
      ...prevCredentials,
      { name: "", state: "", number: "", ce: "", date: "", fee: "" },
    ]);
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleInputChange = (
    index: number,
    field: keyof Credential,
    value: string
  ) => {
    setCredentials((prevCredentials) => {
      const updatedCredentials = [...prevCredentials];
      updatedCredentials[index] = {
        ...updatedCredentials[index],
        [field]: value,
      };
      validateForm(updatedCredentials);
      return updatedCredentials;
    });
  };

  const validateForm = (updatedCredentials: Credential[]) => {
    const isValid = updatedCredentials.every((cred) =>
      Object.values(cred).every((field) => field.trim() !== "")
    );
    setIsFormValid(isValid);
  };

  const handleConfirm = () => {
    if (isFormValid) {
      const existingCredentials = JSON.parse(localStorage.getItem("credentials") || "[]");
  
      const updatedCredentials = [...existingCredentials, ...credentials];
  
      localStorage.setItem("credentials", JSON.stringify(updatedCredentials));
  
      navigate("/home");
    } else {
      alert("Please fill in all fields before confirming.");
    }
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
        <h1 className={styles.header}>Add New Credentials</h1>
        <div className={styles.credentialList} ref={listRef}>
          {credentials.map((credential, index) => (
            <div key={index} className={styles.credentialRow}>
              <input
                type="text"
                placeholder="Credential Name"
                className={styles.inputField}
                value={credential.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Credential State"
                className={styles.inputField}
                value={credential.state}
                onChange={(e) =>
                  handleInputChange(index, "state", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Credential Number"
                className={styles.inputField}
                value={credential.number}
                onChange={(e) =>
                  handleInputChange(index, "number", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Total CEs Needed"
                className={styles.inputField}
                value={credential.ce}
                onChange={(e) =>
                  handleInputChange(index, "ce", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Renewal Date"
                className={styles.inputField}
                value={credential.date}
                onChange={(e) =>
                  handleInputChange(index, "date", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Fee"
                className={styles.inputField}
                value={credential.fee}
                onChange={(e) =>
                  handleInputChange(index, "fee", e.target.value)
                }
              />
              {index < credentials.length - 1 && (
                <hr className={styles.horizontalLine} />
              )}
            </div>
          ))}
        </div>
        <button onClick={addCredentialField} className={styles.addButton}>
          +
        </button>
        <button
          onClick={handleConfirm}
          className={`${styles.confirmButton} ${
            !isFormValid ? styles.disabledButton : ""
          }`}
          disabled={!isFormValid}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewCredentials;
