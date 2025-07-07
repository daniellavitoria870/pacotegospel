
import { Computer, Users } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-black px-2">
          <span style={{color: '#FA6D09'}}>Sem precisar ser Designer! </span>
        </h2>
        <p className="text-lg md:text-2xl mb-10 md:mb-16 text-gray-700 font-semibold px-2">
          Sem complicações, só clicar, editar e postar!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-10 md:mb-16">
          <div className="text-center p-6 md:p-8 bg-gray-50 rounded-xl shadow-lg">
            <Computer className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-black" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">Use no seu celular ou computador</h3>
            <p className="text-sm md:text-base text-gray-600">Acesse de qualquer dispositivo, onde e quando quiser</p>
          </div>

<div className="text-center p-6 md:p-8 bg-gray-50 rounded-xl shadow-lg">
  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center bg-white border-2 border-black">
    <svg viewBox="0 0 512 512" fill="black" className="w-8 h-8 md:w-10 md:h-10">
      <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm67.3 123.9c8.3-1.5 20.3-2.3 36.2-2.3h83.4c22.6 0 39.2 5.3 49.7 15.8 10.5 10.6 15.8 25.6 15.8 44.8 0 19.6-5.5 35-16.4 46.2-10.9 11.2-27.4 17.1-49.7 17.6h-50.6v70.8H144V155.9zm62.3 95.4h46.3c9.4 0 16.7-2.5 21.7-7.6 5-5.1 7.6-12.5 7.6-22.1 0-9.6-2.3-16.8-6.8-21.7-4.6-4.9-11.5-7.3-20.8-7.3h-48v58.7zm179.4 1.1c7.8 0 14.6 1.4 20.5 4.1s11.1 6.9 14.5 12.4h.9v-15.3h34.5v97.6c0 15.9-4.7 28.3-14.1 37.1-9.5 8.9-22.4 13.3-38.8 13.3-11.4 0-21.6-2.2-30.5-6.5s-15.8-10.5-20.2-18.6l28.1-17.2c4.2 6.6 10.7 9.9 19.6 9.9 6.6 0 11.6-1.6 15.1-4.8 3.4-3.2 5.2-7.8 5.2-13.9v-3.3h-.9c-3.4 4.9-8.3 8.5-14.5 10.8-6.3 2.2-13.3 3.3-21.1 3.3-11.7 0-21-3.3-27.8-10s-10.2-15.6-10.2-26.9c0-11.3 3.5-20.2 10.5-26.7 7.1-6.5 17-9.8 29.8-9.8z"/>
    </svg>
  </div>
  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black">
    Arte 100% editável no Canva e no Photoshop
  </h3>
  <p className="text-sm md:text-base text-gray-600">
    Templates compatíveis com as principais ferramentas
  </p>
</div>


        </div>

        <div className="text-white rounded-2xl p-6 md:p-8 shadow-xl" style={{backgroundColor: '#FA6D09'}}>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold">
            + de <span className="text-white animate-pulse">3 mil</span> membros, igrejas e cristãos
          </p>
          <p className="text-base md:text-xl mt-2 text-white opacity-90">já transformaram suas redes sociais!</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
