import React, { useState } from "react";
import "./Comment.css";

const Comment = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Uğur/Xəta mesajı üçün

  const handleSubmit = async (e) => {
    e.preventDefault(); // səhifənin reload olmasını dayandırır

    const formData = new FormData();
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/mzdaezwg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Your message has been sent! Thank you 😊");
        setMessage(""); // textarea təmizlənir
      } else {
        setStatus("An error occurred. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="comment-container">
      <h2>
        Your feedback is valuable to us. Share your suggestions and comments
      </h2>
      <p>Receive updates directly in your inbox</p>

      <form className="comment-user" onSubmit={handleSubmit}>
        <textarea
          name="message"
          className="comment-textarea"
          placeholder="Write your feedback and suggestions"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="comment-user-btn">
          Submit
        </button>
      </form>

      {status && <p className="comment-status">{status}</p>}
    </div>
  );
};

export default Comment;
