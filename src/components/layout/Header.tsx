import React, { useState, useEffect } from 'react';

function Header() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <header className="hero-section">
      <div className={`hero-content ${isAnimated ? 'animate' : ''}`}>
        <h1 className="hero-title-animate">Roberta C. Lima</h1>
        <p className="hero-subtitle-animate">Fotografia Urbana & Estilo de Vida</p>
      </div>
      <nav className="main-nav">
        <a href="#gallery">Galeria</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
