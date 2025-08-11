import React from 'react';

function Header() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>ROBERTA LIMA</h1>
        <p>Fotografia Urbana, Noturna e Eventos</p>
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