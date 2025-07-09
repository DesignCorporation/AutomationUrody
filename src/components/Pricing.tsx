import React from 'react';
import { CheckCircle, Gift, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5'),
    t('pricing.feature6'),
    t('pricing.feature7')
  ];

  const bonuses = [
    t('pricing.bonus1'),
    t('pricing.bonus2'),
    t('pricing.bonus3')
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('pricing.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('pricing.subtitle')}
            </span>
            <br />{t('pricing.all_included')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl p-8 text-white relative overflow-hidden mb-8">
            <div className="absolute top-4 right-4 bg-white text-pink-500 px-4 py-2 rounded-full text-sm font-bold">
              {t('pricing.special')}
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-sm opacity-90">{t('pricing.standard')}</div>
                    <div className="text-2xl line-through opacity-70">€800</div>
                  </div>
                  <div className="text-6xl font-bold mb-2">€400</div>
                  <div className="text-lg opacity-90 mb-4">{t('pricing.setup')}</div>
                  <div className="text-xl font-semibold mb-2">€50/miesiąc</div>
                  <div className="text-sm opacity-90">{t('pricing.monthly')}</div>
                  <div className="bg-white/20 rounded-full px-4 py-2 mt-4 text-sm font-medium">
                    Oszczędzasz €400! Pierwszych 50 salonów
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      {t('pricing.includes')}
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Gift className="w-6 h-6 mr-2" />
                      {t('pricing.bonuses')}
                    </h3>
                    <ul className="space-y-3">
                      {bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="w-5 h-5 mr-3 flex-shrink-0" />
                          <span>{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 mr-4"
              >
                {t('pricing.cta')}
              </button>
            </div>
          </div>

          {/* Competitor comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              💰 Porównanie z konkurencją
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-4">Konkurencja</h4>
                <div className="text-3xl font-bold text-red-500 mb-2">€2000+</div>
                <div className="text-sm text-gray-600 mb-4">+ €100/miesiąc</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>❌ Długoterminowe zobowiązania</li>
                  <li>❌ Ukryte koszty</li>
                  <li>❌ Skomplikowana instalacja</li>
                  <li>❌ Płatne wsparcie</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-xl transform scale-105">
                <h4 className="font-bold mb-4">Beauty Automation</h4>
                <div className="text-3xl font-bold mb-2">€400</div>
                <div className="text-sm opacity-90 mb-4">+ €50/miesiąc</div>
                <ul className="text-sm space-y-2">
                  <li>✅ Bez zobowiązań</li>
                  <li>✅ Przejrzysta cena</li>
                  <li>✅ Instalacja w 24h</li>
                  <li>✅ Bezpłatne wsparcie</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-4">Bez automatyzacji</h4>
                <div className="text-3xl font-bold text-red-500 mb-2">€0</div>
                <div className="text-sm text-gray-600 mb-4">ale tracisz 1800 zł/miesiąc</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>❌ 15h tygodniowo na telefony</li>
                  <li>❌ 30% no-show</li>
                  <li>❌ Chaos w terminarzach</li>
                  <li>❌ Stres i przepracowanie</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">{t('pricing.guarantee1')}</h4>
              <p className="text-sm text-gray-600">{t('pricing.guarantee1.desc')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">{t('pricing.guarantee2')}</h4>
              <p className="text-sm text-gray-600">{t('pricing.guarantee2.desc')}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">{t('pricing.guarantee3')}</h4>
              <p className="text-sm text-gray-600">{t('pricing.guarantee3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;