import React from "react";
import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
