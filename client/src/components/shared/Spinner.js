import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: "20%", fontSize:"50px" }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
