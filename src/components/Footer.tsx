
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-lg mb-4">Copyright © 2023, Pack AEG.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-gray-300 transition-colors" style={{color: '#FA6D09'}}>
              Políticas de Privacidade
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors" style={{color: '#FA6D09'}}>
              Termos de Uso
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. 
            Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="font-semibold" style={{color: '#FA6D09'}}>
            ✨ Transforme suas redes sociais hoje mesmo! ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
