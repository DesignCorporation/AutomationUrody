import React from 'react';
import { CheckCircle, Clock, TrendingUp, Euro } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Results = () => {
  const { t } = useLanguage();

  const results = [
    {
      icon: CheckCircle,
      number: "70%",
      title: t('results.noshow'),
      description: t('results.noshow.description'),
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Clock,
      number: "3",
      title: t('results.time'),
      description: t('results.time.description'),
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      number: "30%",
      title: t('results.bookings'),
      description: t('results.bookings.description'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Euro,
      number: "€500+",
      title: t('results.profit'),
      description: t('results.profit.description'),
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('results.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('results.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('results.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">{result.number}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl p-8 text-center text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t('results.roi.title')}
              </h3>
              <p className="text-lg opacity-90 mb-6">
                {t('results.roi.description')}
              </p>
            </div>
            <div className="bg-white/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">📊 Przykładowy salon:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Przed:</div>
                  <div>• 3h/dzień na telefony</div>
                  <div>• 30% no-show</div>
                  <div>• Stres i chaos</div>
                </div>
                <div>
                  <div className="font-semibold">Po:</div>
                  <div>• 15 min/dzień</div>
                  <div>• 5% no-show</div>
                  <div>• +500€ zysku/miesiąc</div>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {t('results.roi.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;