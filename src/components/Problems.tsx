import React from 'react';
import { Phone, CalendarX, AlertTriangle, UserMinus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Problems = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: Phone,
      title: t('problems.phone.title'),
      description: t('problems.phone.description')
    },
    {
      icon: CalendarX,
      title: t('problems.noshow.title'),
      description: t('problems.noshow.description')
    },
    {
      icon: AlertTriangle,
      title: t('problems.schedule.title'),
      description: t('problems.schedule.description')
    },
    {
      icon: UserMinus,
      title: t('problems.clients.title'),
      description: t('problems.clients.description')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('problems.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('problems.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('problems.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('problems.recognize')}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              {t('problems.solution')}
            </p>
            <button 
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              {t('problems.see_solution')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;