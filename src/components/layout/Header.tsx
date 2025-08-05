import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <h1>Nome do Fotógrafo</h1>
      <nav>
        <a href="#gallery">Galeria</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;