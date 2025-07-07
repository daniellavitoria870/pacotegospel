
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulando imagens da galeria
  const galleryImages = [
  { id: 1, title: 'Arte 1', category: 'Post', url: 'https://lianesoares.com.br/wp-content/uploads/2025/05/DESPERTAI-FESTIVIDADE-1.webp' },
  { id: 2, title: 'Arte 2', category: 'Story', url: 'https://lianesoares.com.br/wp-content/uploads/2025/05/ATUALIZACAO-MAR-ABRIL-7.webp' },
  { id: 3, title: 'Arte 3', category: 'Banner', url: 'https://lianesoares.com.br/wp-content/uploads/2025/05/8.-Parabens-.webp' },
  { id: 4, title: 'Arte 4', category: 'Capa', url: 'https://lianesoares.com.br/wp-content/uploads/2025/01/Vitrine-22.webp' },
  { id: 5, title: 'Arte 5', category: 'Post', url: 'https://lianesoares.com.br/wp-content/uploads/2025/05/4.-CASAMENTO-BLINDADO.jpg' },
  { id: 6, title: 'Arte 6', category: 'Story', url: 'https://lianesoares.com.br/wp-content/uploads/2025/01/Vitrine-5.webp' },
  { id: 7, title: 'Arte 7', category: 'Banner', url: 'https://lianesoares.com.br/wp-content/uploads/2025/01/Vitrine-10.webp' },
  { id: 8, title: 'Arte 8', category: 'Capa', url: 'https://lianesoares.com.br/wp-content/uploads/2025/01/Vitrine-1.webp' },
  { id: 9, title: 'Arte 9', category: 'Post', url: 'https://lianesoares.com.br/wp-content/uploads/2025/01/Vitrine-15.webp' },
  { id: 10, title: 'Arte 10', category: 'Story', url: 'https://lianesoares.com.br/wp-content/uploads/2025/01/Vitrine-6.webp' },
  { id: 11, title: 'Arte 11', category: 'Banner', url: 'https://lianesoares.com.br/wp-content/uploads/2025/04/1.-ABRIL-2025.png' },
  { id: 12, title: 'Arte 12', category: 'Capa', url: 'https://lianesoares.com.br/wp-content/uploads/2025/04/5.-ABRIL-2025.png' },
];

  // Número de itens por slide (responsivo)
  const itemsPerSlide = 4; // Desktop: 4, Mobile será adaptado no CSS
  const totalSlides = Math.ceil(galleryImages.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-black px-2">
          São <span style={{color: '#FA6D09'}}>+ de 600 modelos</span> de artes editáveis
        </h2>
        <p className="text-lg md:text-xl text-center mb-10 md:mb-16 text-gray-600 px-2">
          veja alguns que você terá acesso.
        </p>

        {/* Carrossel Animado */}
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mb-8 md:mb-12">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-3 md:p-4">
                  {galleryImages.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((image) => (
  <div key={image.id} className="group relative">
    <div className="aspect-square bg-gray-100 rounded-lg shadow-lg overflow-hidden border-2 border-white group-hover:scale-105 transition-transform duration-300">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
))}
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores do carrossel */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                style={index === currentSlide ? {backgroundColor: '#FA6D09'} : {}}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-white font-bold text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 hover:opacity-90 w-full md:w-auto"
            style={{backgroundColor: '#FA6D09'}}
          >
            QUERO ACESSO A TODAS AS ARTES! 🎨
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
