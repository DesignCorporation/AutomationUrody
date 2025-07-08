import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Euro, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Calculator = () => {
  const { t } = useLanguage();
  const [appointments, setAppointments] = useState(25);
  const [timePerAppointment, setTimePerAppointment] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(30);

  const calculateSavings = () => {
    const dailyTimeSaved = (appointments * timePerAppointment) / 60; // hours
    const monthlyTimeSaved = dailyTimeSaved * 30;
    const monthlySavings = monthlyTimeSaved * hourlyRate;
    const paybackWeeks = Math.ceil(250 / (monthlySavings / 4)); // 250 is setup cost
    
    return {
      dailyTimeSaved: dailyTimeSaved.toFixed(1),
      monthlyTimeSaved: monthlyTimeSaved.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      paybackWeeks: paybackWeeks
    };
  };

  const results = calculateSavings();

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('calculator.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('calculator.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('calculator.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                    <CalculatorIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t('calculator.params')}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {t('calculator.appointments')} {appointments}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      value={appointments}
                      onChange={(e) => setAppointments(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>10</span>
                      <span>50</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {t('calculator.time')} {timePerAppointment} {t('min')}
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="15"
                      value={timePerAppointment}
                      onChange={(e) => setTimePerAppointment(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>5 {t('min')}</span>
                      <span>15 {t('min')}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {t('calculator.rate')} €{hourlyRate}
                    </label>
                    <input
                      type="range"
                      min="15"
                      max="50"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>€15</span>
                      <span>€50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('calculator.savings')}</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-6 rounded-xl text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="w-8 h-8" />
                      <div>
                        <div className="text-3xl font-bold">{results.dailyTimeSaved}h</div>
                        <div className="text-sm opacity-90">{t('calculator.daily')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <TrendingUp className="w-8 h-8" />
                      <div>
                        <div className="text-3xl font-bold">{results.monthlyTimeSaved}h</div>
                        <div className="text-sm opacity-90">{t('calculator.monthly')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <Euro className="w-8 h-8" />
                      <div>
                        <div className="text-3xl font-bold">€{results.monthlySavings}</div>
                        <div className="text-sm opacity-90">{t('calculator.monthly')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        {t('calculator.payback')} {results.paybackWeeks} {results.paybackWeeks === 1 ? t('calculator.payback.week') : t('calculator.payback.weeks')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t('calculator.payback.then')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                {t('calculator.cta')} €{results.monthlySavings} {t('monthly')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;