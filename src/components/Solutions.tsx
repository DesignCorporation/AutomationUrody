import React from 'react';
import { Smartphone, MessageSquare, Users, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Smartphone,
      title: t('solutions.booking.title'),
      process: t('solutions.booking.process'),
      result: t('solutions.booking.result'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: t('solutions.reminders.title'),
      process: t('solutions.reminders.process'),
      result: t('solutions.reminders.result'),
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Users,
      title: t('solutions.database.title'),
      process: t('solutions.database.process'),
      result: t('solutions.database.result'),
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Star,
      title: t('solutions.reviews.title'),
      process: t('solutions.reviews.process'),
      result: t('solutions.reviews.result'),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: t('solutions.analytics.title'),
      process: t('solutions.analytics.process'),
      result: t('solutions.analytics.result'),
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('solutions.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('solutions.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.description')}
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="flex-1">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mr-4`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{solution.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                      <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">Process</p>
                      <p className="text-gray-800 font-medium">{solution.process}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-green-600 uppercase tracking-wide mb-2">Result</p>
                      <p className="text-green-800 font-bold text-lg">{solution.result}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Active automations</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium">Today saved</span>
                          <span className="text-lg font-bold text-pink-500">2.5h</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium">Auto bookings</span>
                          <span className="text-lg font-bold text-blue-500">12</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium">Sent reminders</span>
                          <span className="text-lg font-bold text-orange-500">8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t('solutions.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;