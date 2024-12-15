/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import styles from "../styles/ProfilePage.module.css";
import defaultProfilePic from "../assets/profile.png";
import { FaEdit, FaSave, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [profilePic, setProfilePic] = useState<string>(defaultProfilePic);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const user = JSON.parse(storedUserInfo);
      setUserInfo(user);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };

  const goBack = () => {
    navigate("/home");
  };

  return (
    <div className={styles.profileContainer}>
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
      {userInfo ? (
        <div className={styles.contentWrapper}>
        <button onClick={goBack} className={styles.backButton}>
          &#x1f808;
        </button>
          <div className={styles.profileHeader}>
            <h1>Welcome, {userInfo.firstName}!</h1>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.profilePictureWrapper}>
              <img
                src={profilePic}
                alt="Profile"
                className={styles.profilePicture}
              />
              {isEditing && (
                <div className={styles.uploadButton}>
                  <label htmlFor="imageUpload">
                    <FaCamera />
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              )}
            </div>

            <div className={styles.profileInfo}>
              <div className={styles.inputField}>
                <label>First Name:     </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className={styles.inputField}>
                <label>Last Name:     </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className={styles.inputField}>
                <label>Email:     </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className={styles.inputField}>
                <label>Password:     </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={handleEditProfile} className={styles.editButton}>
              {isEditing ? <FaSave /> : <FaEdit />}
              {isEditing ? " Save Changes" : " Edit Profile"}
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
