import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mzdaezwg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Your message has been sent successfully!");
        e.target.reset();
      } else {
        setFormStatus("An error occurred. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-container-detail">
        <h2>Contact Us</h2>
        <span>Send a Message</span>
        <p>
          To get in touch with Novation, you can send us your questions or
          suggestions.
          <br />
          We are always ready to support you.
        </p>

        <form className="contact-detail-input" onSubmit={handleSubmit}>
          <div className="contact-names">
            <div className="contact-name">
              <label>First Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="contact-name">
              <label>Last Name</label>
              <input
                type="text"
                name="surname"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="contact-single">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="contact-single">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message here"
              required
            />
          </div>
          <button type="submit">Submit</button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>

      <div className="contact-map-detail">
        <div className="map-wrapper">
          <iframe
            title="Novation Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178013.48473525443!2d49.690149090376366!3d40.39473700796155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YM!5e1!3m2!1sru!2saz!4v1747425121907!5m2!1sru!2saz"
            width="600"
            height="450"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-frame"
          ></iframe>
        </div>

        <div className="follow-part">
          <h4>Follow Us</h4>
          <p>Follow us and be the first to know about our latest updates.</p>
          <div className="contact-social-network-tools">
            {/* Social media links */}
            {/* <Link>
              <FaTwitter className="contact-social-network-tool" />
            </Link>
            <Link>
              <FaInstagram className="contact-social-network-tool" />
            </Link>
            <Link>
              <FaFacebook className="contact-social-network-tool" />
            </Link> */}
            <a
              href="https://www.linkedin.com/company/novation-community/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-social-network-tool" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
