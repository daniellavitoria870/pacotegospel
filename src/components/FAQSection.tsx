
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Por quanto tempo terei acesso ao material?",
      answer: "Você terá acesso vitalício ao material. Uma vez adquirido, o conteúdo é seu para sempre."
    },
    {
      question: "Preciso pagar algum valor mensal?",
      answer: "Não! É um pagamento único. Você paga apenas uma vez e tem acesso para sempre."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Após o pagamento, você receberá um e-mail com o link de acesso à área de membros."
    },
    {
      question: "É realmente seguro?",
      answer: "Sim! Utilizamos plataformas seguras e oferecemos garantia de 7 dias para sua tranquilidade."
    },
    {
      question: "Consigo editar no Celular?",
      answer: "Sim! Todas as artes são compatíveis com o Canva, que funciona perfeitamente no celular."
    },
    {
      question: "Qual garantia que eu tenho?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro."
    },
    {
      question: "Qual programa é necessário para editar as artes?",
      answer: "Você pode usar o Canva (gratuito) ou o Photoshop. Ambos funcionam no computador e celular."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 md:px-6 py-4 md:py-5 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-sm md:text-base text-black pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" style={{color: '#FA6D09'}} />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{color: '#FA6D09'}} />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
