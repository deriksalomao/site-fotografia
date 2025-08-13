import React from 'react';
import profilePic from '../../assets/images/foto-roberta.jpg';

function About() {
  return (
    <section id="about" className="about-section container">
      <h2>SOBRE MIM</h2>
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src={profilePic} alt="Retrato do Fotógrafo" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <div className="about-text text-start">
            <p>
              Sou de São Paulo, minha história com a fotografia começou na adolescência, quando tive meu primeiro contato com a área. Foi amor à primeira vista, e desde então não parei mais.
            </p>
            <p>
              Formada em produção Audiovisual e com 3 anos de experiência no mercado, trabalho como fotógrafa. Minha trajetória me ensinou a ser adaptável e apaixonada pelo ritmo/cultura frenética de São Paulo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;