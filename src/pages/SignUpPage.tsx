import React, { useState } from "react";
import styles from "../styles/SignUpPage.module.css"; 
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem(
        "userInfo",
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        })
      );
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ firstName, lastName, email, password });
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

      <div className={styles.overlayContainer}>
        <div className={styles.leftSection}>
        <img src={logo} alt="Logo" className={styles.logo} />          
        <h1>Create an Account</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.inputField}
            />

            <div className={styles.buttonContainer}>
              <button type="submit" onClick={() => navigate('/home')} className={styles.signInButton}>
                Sign Up
              </button>
            </div>
          </form>
          <div className={styles.signUpLink}>
            <p>Already have an account? <a href="/">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
