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
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-700 font-semibold">
              ⚠️ Średni salon traci 1800 zł miesięcznie na nieefektywnych procesach
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              <div className="mt-4 text-red-600 font-semibold text-sm">
                {index === 0 && "💸 Koszt: 450 zł/miesiąc"}
                {index === 1 && "💸 Koszt: 600 zł/miesiąc"}
                {index === 2 && "💸 Koszt: 500 zł/miesiąc"}
                {index === 3 && "💸 Koszt: 250 zł/miesiąc"}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-8 rounded-2xl shadow-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <span className="text-white">{t('problems.recognize')}</span>
            </h3>
            <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto text-lg">
              {t('problems.solution')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">15h</div>
                <div>oszczędności tygodniowo</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">70%</div>
                <div>mniej no-show</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">€400</div>
                <div>jednorazowy koszt</div>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
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