import React from 'react';
import { FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="App-footer">
      <div className="social-links">
        <a href="https://instagram.com/b_3_t_4" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.behance.net/robertacruzde" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <FaBehance />
        </a>
        <a href="https://www.linkedin.com/in/roberta-cruz-de-lima-908b63219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; {currentYear} Roberta C. Lima. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;