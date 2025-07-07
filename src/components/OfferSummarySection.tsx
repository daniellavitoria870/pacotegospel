
const OfferSummarySection = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#FA6D09'}}>
            Resumidamente você receberá…
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#01B848'}}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Garantia de 7 Dias</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#01B848'}}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Suporte via Whatsapp</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#01B848'}}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">+ de 400 Artes no Canva</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#01B848'}}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">+ de 400 Artes no Photoshop</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#01B848'}}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Vídeo Aula: Como editar as Artes</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#01B848'}}>
                  <span className="text-white font-bold">🎁</span>
                </div>
                <span className="text-lg font-bold" style={{color: '#FA6D09'}}>Super Bônus! </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSummarySection;
