import React from "react";
import "../Error404Component.css"; 

const Error404Component = () => {
  return (
    <div className="error-404-container">
      <div className="error-404-icon">
        <i className="fas fa-frown"></i>
      </div>
      <div className="error-404-message">
        <h2>404 - Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default Error404Component;
