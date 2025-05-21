import React from 'react';
import './App.css';

function Contacts() {
  return (
    <>
      {/* Hero Title */}
      <div className="hero">
        <div className="container">
          <h1>Contacts</h1>
        </div>
      </div>

      {/* Contact Details */}
      <div className="contacts">
        <div className="container">
          <p><strong>Phone:</strong> 267-227-9902</p>
          <p><strong>Fax:</strong> 215-501-5755</p>
          <p><strong>Email:</strong> televita73@gmail.com</p>

          <div className="image-section">
            <img
              src="/phonebubble.png"
              alt="Background Visual"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
