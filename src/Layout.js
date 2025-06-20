// Layout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Layout({ children }) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const handleLinkClick = () => {
  setIsMobileMenuActive(false);
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">
              <div className="logo-container">
                <img src="/TeleVitaLogo(White).png" alt="TeleVita Logo" width="100" height="100" />
                <span className="logo-text">TeleVitaLLC</span>
              </div>
            </Link>
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul id="nav-links" className={isMobileMenuActive ? 'active' : ''}>
              <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>ABOUT</Link></li>
              <li><Link to="/services" onClick={handleLinkClick}>SERVICES</Link></li>
              <li><Link to="/contacts" onClick={handleLinkClick}>CONTACTS</Link></li>
              <li>
                <a
                  href="https://us.fullscript.com/welcome/emetreveli1734212743"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  SUPPLEMENT STORE
                </a>
              </li>
              <li>
                <a
                  href="https://practice.kareo.com/televita"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  SCHEDULE APPOINTMENT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <div className="footer">
        <p>Copyright © 2025 Televitallc. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Layout;
