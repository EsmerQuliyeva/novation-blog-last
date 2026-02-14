import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin} from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-main-part">
        <div className="footer-container-left-part">
          <div className="footer-logo-container">
            <h2 className="footer-logo">Novation</h2>
            <p>
              Yenilik etmək, Ucaltmaq, <br /> Üstünlük etmək
            </p>
          </div>
          <div className="footer-links-container">
            <NavLink to="/" className="footer-link">Home</NavLink>
            <NavLink to="about" className="footer-link">About Us</NavLink>
            <NavLink to="/contact" className="footer-link">Contact</NavLink>
          </div>
          <div className="footer-contact-tools">
            <p>info@novationexample.com</p>
            <p>Telefon: +994 997 42 90 00</p>
          </div>
        </div>

        <div className="footer-container-right-part">
          {/* Klikləyəndə səhifəni yuxarıya gətir */}
          <GoArrowUp 
            className="footer-scroll-arrow" 
            onClick={scrollToTop} 
          />
        </div>
      </div>

      <div className="footer-social-network-tools">
        {/* Sosial şəbəkə ikonları */}
        {/* <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="footer-social-network-tool" />
        </a>
        <a>
          <FaInstagram className="footer-social-network-tool" />
        </a>
        <a>
          <FaFacebook className="footer-social-network-tool" />
        </a> */}
        <a
          href="https://www.linkedin.com/company/novation-community/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-social-network-tool" />
        </a>
      </div>

      <div className="footer-additional-part">
        <p>&copy;2026 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
