import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="App-footer">
      <p>&copy; {currentYear} Nome do Fotógrafo. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;