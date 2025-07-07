
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
          Crie Artes Incríveis a partir de
          <span className="block mt-2" style={{color: '#FA6D09'}}>Modelos Prontos e 100% Editáveis!</span>
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-200 max-w-4xl mx-auto px-2 leading-relaxed">
          Tenha acesso a <strong>+ de 600 Artes profissionais</strong>, prontas para editar no celular ou computador, através do <strong>Canva ou Photoshop</strong>.
        </p>

        <div className="mb-8 md:mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-black rounded-lg shadow-2xl border-2 md:border-4 overflow-hidden" style={{borderColor: '#FA6D09'}}>
              <iframe
                src="https://www.youtube.com/embed/HGg6RV81juY?autoplay=0&controls=1&disablekb=0&playsinline=1&cc_load_policy=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
                title="Vídeo de Boas-Vindas - Pack AEG"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-sm md:text-lg mt-3 md:mt-4 text-gray-300">Assista a aula de boas vindas:</p>
        </div>

        <Button 
          size="lg" 
          className="text-white font-bold text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 hover:opacity-90 w-full md:w-auto"
          style={{backgroundColor: '#FA6D09'}}
        >
          QUERO MEU ACESSO AGORA!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
