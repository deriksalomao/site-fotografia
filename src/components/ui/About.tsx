import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Olá! Sou um fotógrafo apaixonado por capturar a essência de momentos, pessoas e lugares. Meu trabalho é focado em criar imagens que contam histórias e transmitem emoções verdadeiras.
          </p>
          <p>
            Com anos de experiência, busco sempre a luz perfeita e o ângulo ideal para transformar o ordinário em extraordinário.
          </p>
        </div>
        {/* Opcional: Adicione uma imagem sua aqui */}
        {/* <img src={profilePic} alt="Retrato do Fotógrafo" className="about-image" /> */}
      </div>
    </section>
  );
}

export default About;