import React from "react";
import "./IntroPage.css";
import introPageDetail from "../../assets/intro-page-detail.gif";
const IntroPage = () => {
  return (
    <div className="intro-page-container">
      <div className="intro-page-text">
        <h1>Novation Holding</h1>
        <p>
          Novation Holding is a global group of companies operating in
          innovation,<br /> technology, and strategic investments. We develop advanced
          solutions <br />across various sectors, support startups, and invest in
          technologies <br /> that drive sustainable growth. Our goal is to build the
          companies of the <br />future and create value on a global scale.
        </p>
      </div>
      <div className="background-container">
        <img
          src={introPageDetail}
          alt="background-detail"
          className="background-detail"
        />
      </div>
    </div>
  );
};

export default IntroPage;
