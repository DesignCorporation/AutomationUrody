import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer')
    },
    {
      question: t('faq.5.question'),
      answer: t('faq.5.answer')
    },
    {
      question: t('faq.6.question'),
      answer: t('faq.6.answer')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('faq.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('faq.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-800 pr-8">{faq.question}</h3>
                  {openQuestion === index ? (
                    <ChevronUp className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t('faq.more.title')}
              </h3>
              <p className="text-lg opacity-90 mb-6">
                {t('faq.more.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+48123456789"
                  className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t('faq.call')}
                </a>
                <a 
                  href="https://wa.me/48123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  {t('faq.whatsapp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;