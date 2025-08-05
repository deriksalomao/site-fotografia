import React from 'react';
// Exemplo de como importar imagens da pasta de assets
// import photo1 from '../../assets/images/portfolio/photo1.jpg';

function Gallery() {
    // Array de imagens - substitua pelos caminhos reais das suas imagens
  const images: string[] = [/* photo1 */];

  return (
    <section id="gallery">
      <h2>Galeria</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
        {/* Adicione placeholders se não tiver imagens ainda */}
        {images.length === 0 && <p>Sua galeria de fotos aparecerá aqui.</p>}
      </div>
    </section>
  );
}

export default Gallery;