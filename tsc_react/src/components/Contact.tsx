import "../Style/Contact.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    alert("Message sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={submitForm}>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;