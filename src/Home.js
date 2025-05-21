import React, { useState } from 'react';
import './App.css';

function Home() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      
      {/* Hero Section */}
      <main>
        <div className="hero">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls
            className="hero-video"
          >
            <source src="/Eng televita.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </main>
    </>
  );
}

export default Home;
