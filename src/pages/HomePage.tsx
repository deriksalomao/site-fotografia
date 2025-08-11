import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Gallery from '../components/ui/Gallery';
import About from '../components/ui/About';
import ContactForm from '../components/ui/ContactForm';
import BackToTopButton from '../components/common/BackToTopButton';

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
      <BackToTopButton /> {/* Botão Voltar ao Topo */}
    </div>
  );
}

export default HomePage;