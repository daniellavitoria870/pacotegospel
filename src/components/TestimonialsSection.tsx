
const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-black">
          Veja o que dizem nossos <span style={{color: '#FA6D09'}}>clientes</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4" style={{borderTopColor: '#FA6D09'}}>
            <div className="mb-6">
              <div className="aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/aZCuE8ovRcg?autoplay=0&controls=0&disablekb=1&playsinline=true&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Flianesoares.com.br%2Fbr-pack-aeg%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Flianesoares.com.br&widgetid=2&forigin=https%3A%2F%2Flianesoares.com.br%2Fbr-pack-aeg%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.facebook.com%2F&vf=1"
                  title="Charles"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="flex items-center">
              
              <div className="ml-4">
                <p className="font-semibold text-black text-lg">Charles</p>
                <p className="text-gray-600">Pastor</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4" style={{borderTopColor: '#FA6D09'}}>
            <div className="mb-6">
              <div className="aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/0hMvelm-MVk?autoplay=0&controls=0&disablekb=1&playsinline=true&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Flianesoares.com.br%2Fbr-pack-aeg%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Flianesoares.com.br&widgetid=3&forigin=https%3A%2F%2Flianesoares.com.br%2Fbr-pack-aeg%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.facebook.com%2F&vf=1"
                  title="Weliton"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="flex items-center">
              
              <div className="ml-4">
                <p className="font-semibold text-black text-lg">Weliton</p>
                <p className="text-gray-600">Líder de Ministério</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
