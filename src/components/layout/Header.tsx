import React from 'react';

function Header() {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>Nome do Fotógrafo</h1>
        <p>Fotografia de Retrato & Estilo de Vida</p>
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