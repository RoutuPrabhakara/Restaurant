import React from "react";
import "./Style.css";

function Nodatafound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ maxWidth: "500px" }}>
        <img
          src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
          alt="404 Not Found"
          className="img-fluid rounded mb-3"
        />
        <a href="/" className="btn btn-success w-100">
          Go Back to Home Page <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Nodatafound;
