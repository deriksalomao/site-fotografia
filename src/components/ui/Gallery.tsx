import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Lógica de importação automática de imagens
const imageContext = require.context('../../assets/images/portfolio', false, /\.(png|jpe?g|svg)$/);
const allImages: string[] = imageContext.keys().map(imageContext) as string[];

const ITEMS_PER_PAGE = 6;

// Componente para cada item da galeria
const GalleryItem = ({ image, onClick, index }: { image: string; onClick: () => void; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`gallery-item ${inView ? 'is-visible' : ''}`} onClick={onClick}>
      <img src={image} alt={`Fotografia de Roberta C. de Lima ${index + 1}`} />
    </div>
  );
};

interface GalleryProps {
  onImageClick: (imageSrc: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(allImages.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentImages = allImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (  
    <section id="gallery">
      <h2>GALERIA</h2>
      <div className="gallery-wrapper">
        <button onClick={goToPrevPage} disabled={currentPage === 0} className="gallery-nav-arrow left" aria-label="Anterior">
          <FaChevronLeft />
        </button>
        
        <div className="masonry-content-wrapper">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="15px">
              {currentImages.map((image, index) => (
                <GalleryItem 
                  key={startIndex + index} 
                  image={image} 
                  onClick={() => onImageClick(image)} // Chama a função do componente pai
                  index={index} 
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>

        <button onClick={goToNextPage} disabled={currentPage >= totalPages - 1} className="gallery-nav-arrow right" aria-label="Próximo">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Gallery;