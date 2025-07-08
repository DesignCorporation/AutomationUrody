import React from 'react';
import { Handshake, Settings, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Handshake,
      title: t('how.consultation.title'),
      description: t('how.consultation.description'),
      details: t('how.consultation.details')
    },
    {
      icon: Settings,
      title: t('how.setup.title'),
      description: t('how.setup.description'),
      details: t('how.setup.details')
    },
    {
      icon: DollarSign,
      title: t('how.save.title'),
      description: t('how.save.description'),
      details: t('how.save.details')
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('how.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('how.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('how.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 -mt-16 relative z-10">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-sm text-pink-600 font-medium">{step.details}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('how.start.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('how.start.description')}
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              {t('how.start.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;