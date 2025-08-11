import React, { useState } from 'react';
import Modal from '../common/Modal';

// Suas imagens importadas
import photo1 from '../../assets/images/portfolio/imagem-1.jpg';
import photo2 from '../../assets/images/portfolio/imagem-2.jpg';
import photo3 from '../../assets/images/portfolio/imagem-3.jpg';
import photo4 from '../../assets/images/portfolio/imagem-4.jpg';
import photo5 from '../../assets/images/portfolio/imagem-5.jpg';
import photo6 from '../../assets/images/portfolio/imagem-6.jpg';

function Gallery() {
  const images: string[] = [photo1, photo2, photo3, photo4, photo5, photo6];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="gallery">
        <h2>Galeria</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image} alt={`Fotografia de Roberta C. de Lima ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </>
  );
}

export default Gallery;