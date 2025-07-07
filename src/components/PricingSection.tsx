import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (

    <section id="comprar" className="py-20 px-4" style={{ backgroundColor: '#FA6D09' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">

          {/* Imagem do Produto (local na pasta public) */}
          <div className="mb-8">
            <img
              src="/1500.webp" // <--- Caminho relativo à pasta public
              alt="Imagem do Produto"
              
            />
          </div>

          <div className="mb-8">
            <p className="text-2xl text-gray-600 line-through mb-2">DE R$ 197,00</p>
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl md:text-8xl font-bold" style={{ color: '#00B142' }}>R$ 27</span>
              <div className="ml-2 text-left">
                <span className="text-3xl font-bold" style={{ color: '#00B142' }}>,90</span>
                <p className="text-sm text-gray-500">à vista</p>
              </div>
            </div>
            <div className="bg-black text-white px-6 py-2 rounded-full inline-block mb-8 animate-pulse">
              <span className="font-bold">⚠️ PROMOÇÃO POR TEMPO LIMITADO</span>
            </div>
          </div>

<Button
  asChild
  size="lg"
  className="w-full text-white font-bold text-2xl py-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 mb-6 hover:opacity-90"
  style={{ backgroundColor: '#FA6D09' }}
>
  <a href="https://pay.kirvano.com/6b2ef023-e6c1-4c3e-93ed-6aa589274fb4" target="_blank" rel="noopener noreferrer">
    GARANTIR A OFERTA!
  </a>
</Button>

          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#FA6D09' }}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">🔒</span>
              </div>
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#FA6D09' }}>
                <span className="text-white text-xs font-bold">⭐</span>
              </div>
              <span>Garantia 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PricingSection;
