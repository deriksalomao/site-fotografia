import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Gallery from '../components/ui/Gallery';
import ContactForm from '../components/ui/ContactForm';

// Componente "Sobre" adicionado diretamente para simplificar
function About() {
  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <p>
        Escreva aqui uma breve biografia sobre você, seu trabalho e sua paixão pela fotografia.
      </p>
    </section>
  );
}

function HomePage() {
  return (
    <div className="App">
      <Header />
      <main>
        <Gallery />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;