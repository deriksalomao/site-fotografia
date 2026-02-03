import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <header className={`hero-section main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className={`hero-content ${isAnimated ? 'animate' : ''}`}>
          <h1 className="hero-title-animate">Roberta C. Lima</h1>
          <p className="hero-subtitle-animate">Fotografia Urbana & Estilo de Vida</p>
        </div>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#gallery" onClick={closeMenu}>Galeria</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#orcamento" onClick={closeMenu}>Orçamento</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </nav>
        
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;