import React from "react";
import secondCompany from "../../../src/assets/blog-app-images/Novation.svg";
import thirdCompany from "../../../src/assets/blog-app-images/Vector-1.svg";
import fourthCompany from "../../../src/assets/blog-app-images/Vector-2.svg";
import fifthCompany from "../../../src/assets/blog-app-images/Vector-3.svg";
import sixthCompany from "../../../src/assets/blog-app-images/Vector-4.svg";
import seventhCompany from "../../../src/assets/blog-app-images/Vector-5.svg";
import eighthCompany from "../../../src/assets/blog-app-images/Vector.svg";
import "./Company.css";
const Company = () => {
  return (
    <div className="company-container">
      <h4>Tərəfdaşlar</h4>
      <div className="company-list">
        <img src={secondCompany} alt="company" className="company-logo" />
        <img src={thirdCompany} alt="company" className="company-logo" />
        <img src={fourthCompany} alt="company" className="company-logo" />
        <img src={fifthCompany} alt="company" className="company-logo" />
        <img src={sixthCompany} alt="company" className="company-logo" />
        <img src={seventhCompany} alt="company" className="company-logo" />
        <img src={eighthCompany} alt="company" className="company-logo" />
      </div>
    </div>
  );
};

export default Company;
