import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Gallery from '../components/ui/Gallery';
import About from '../components/ui/About';
import ContactForm from '../components/ui/ContactForm';
import BackToTopButton from '../components/common/BackToTopButton';
import Modal from '../components/common/Modal';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const mainContent = document.querySelector('main');
    const headerContent = document.querySelector('.hero-section');
    const footerContent = document.querySelector('.App-footer');
    const elementsToBlur = [mainContent, headerContent, footerContent];

    elementsToBlur.forEach(el => el?.classList.toggle('content-blur', isModalOpen));
  }, [isModalOpen]);

  return (
    <div className="App">
      <Header />
      <main>
        <Gallery onImageClick={openModal} />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <BackToTopButton />
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        imageSrc={selectedImage} 
      />
    </div>
  );
}

export default HomePage;