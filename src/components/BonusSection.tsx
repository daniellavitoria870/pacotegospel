const BonusSection = () => {
  const fundos = [
    { id: 1, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-8.webp' },
    { id: 2, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-14.webp' },
    { id: 3, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-15.webp' },
    { id: 4, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-16.webp' },
    { id: 5, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-17.webp' },
    { id: 6, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-18.webp' },
    { id: 7, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-19.webp' },
    { id: 8, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-20.webp' },
    { id: 9, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-21.webp' },
    { id: 10, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-22.webp' },
    { id: 11, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-23.webp' },
    { id: 12, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Fundos-Prontos-24.webp' },
  ];

  const textos3D = [
    { id: 1, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-72.webp' },
    { id: 2, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-79.webp' },
    { id: 3, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-91.webp' },
    { id: 4, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-102.webp' },
    { id: 5, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-51.webp' },
    { id: 6, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-151.webp' },
    { id: 7, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-161.webp' },
    { id: 8, src: 'https://lianesoares.com.br/wp-content/uploads/2024/06/Texto_3D_Gospel@geracaodesigner-221.webp' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-black">
          Adquira hoje e receba um <br />
          <span className="text-5xl md:text-7xl" style={{ color: '#FA6D09' }}>
            SUPER BÔNUS
          </span>{' '}
          🎁
        </h2>

        {/* Lista de bônus */}
        
        {/* Galeria de Fundos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-black">
            FUNDOS ESCOLHIDOS EXCLUSIVAMENTE PARA VOCÊ:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {fundos.map((bg) => (
              <div key={bg.id} className="aspect-square rounded-lg shadow-lg overflow-hidden">
                <img
                  src={bg.src}
                  alt={`Fundo ${bg.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Galeria de Textos 3D */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-black">
            TEXTOS 3D PRONTOS PARA UTILIZAR EM SUAS ARTES:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {textos3D.map((item) => (
              <div key={item.id} className="">
                <img
                  src={item.src}
                  alt={`Texto 3D ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
