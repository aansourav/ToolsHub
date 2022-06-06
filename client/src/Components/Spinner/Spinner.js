import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <>
      <div className="preloader">
        <div className="meter">
          <span className="loadtext">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
