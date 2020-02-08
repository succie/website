import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact">
      <div>
        <span>Your Email</span>
        <input type="email" autoComplete="email" aria-label="E-mail" />
      </div>
      <div className="Contact-message">
        <span>Message</span>
        <textarea cols={80} rows={10} aria-label="message" />
      </div>
    </div>
  );
};

export default Contact;
