import { ArrowRight } from 'lucide-react';

const BeforeAfterSection = () => {
  // 🔸 Aqui declaramos o array de comparações com as imagens
  const comparisons = [
    {
      id: 1,
      original: 'https://i.imgur.com/tJZXwxk.png',
      edited: 'https://i.imgur.com/vr11OhE.png',
    },
    {
      id: 2,
      original: 'https://i.imgur.com/EduUK2i.png',
      edited: 'https://i.imgur.com/MqCPt8Y.png',
    },
    {
      id: 3,
      original: 'https://i.imgur.com/jS3U6e2.png',
      edited: 'https://i.imgur.com/ExWeRjF.png',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span style={{ color: '#FA6D09' }}>Artes Editadas</span> 
        </h2>
        <p className="text-xl text-center mb-16 text-gray-300">
          Trabalho dos nosso clientes...
        </p>

        <div className="space-y-12">
          {comparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="flex flex-col lg:flex-row items-center justify-center gap-8"
            >
              {/* Antes */}
              <div className="flex-1 text-center">
                <div className="aspect-square max-w-xs mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-gray-600">
                  <img
                    src={comparison.original}
                    alt={`Antes ${comparison.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 font-semibold" style={{ color: '#FA6D09' }}>
                  Disponível no Pack
                </p>
              </div>

              {/* Seta */}
              <div className="flex-shrink-0">
                <ArrowRight
                  className="w-12 h-12 transform rotate-90 lg:rotate-0"
                  style={{ color: '#FA6D09' }}
                />
              </div>

              {/* Depois */}
              <div className="flex-1 text-center">
                <div
                  className="aspect-square max-w-xs mx-auto rounded-xl shadow-lg overflow-hidden border-2"
                  style={{
                    backgroundColor: '#FA6D09',
                    borderColor: '#FA6D09',
                  }}
                >
                  <img
                    src={comparison.edited}
                    alt={`Depois ${comparison.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-white font-semibold">
                  Editado por membro
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;