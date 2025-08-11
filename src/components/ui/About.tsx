import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>PRAZER EM TE CONHECER!</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Sou de São Paulo, minha história com a fotografia começou na adolescência, quando tive meu primeiro contato com a área. Foi amor à primeira vista, e desde então não parei mais.
          </p>
          <p>
            Formada em produção Audiovisual e com 3 anos de experiência no mercado, trabalho como fotógrafa. Minha trajetória me ensinou a ser adaptável e apaixonada pelo ritmo/cultura frenética de São Paulo.
          </p>
        </div>
        {/* Opcional: Adicione uma imagem sua aqui */}
        {/* <img src={profilePic} alt="Retrato do Fotógrafo" className="about-image" /> */}
      </div>
    </section>
  );
}

export default About;