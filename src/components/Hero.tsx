import React from 'react';
import { Clock, ArrowRight, Instagram, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                {t('hero.title')}
              </h1>
              <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold text-gray-700">
                <Clock className="w-8 h-8 text-pink-500" />
                <span>{t('hero.subtitle')}</span>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all"
              >
                {t('hero.demo')}
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">
                  Oferta wprowadzająca: €400 zamiast €800 - tylko pierwsze 50 salonów!
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6 pt-6">
              <span className="text-gray-600">{t('hero.integrates')}</span>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Nowa rezerwacja</h3>
                      <p className="text-gray-600 text-sm">Instagram → Automatyczne potwierdzenie</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-4 space-y-2">
                    <p className="text-sm text-gray-600">Dziś, 14:30</p>
                    <p className="font-semibold">Anna Kowalska</p>
                    <p className="text-sm text-gray-600">Koloryzacja + strzyżenie</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Automatycznie potwierdzone</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4 space-y-2">
                    <p className="text-sm text-gray-600">Jutro, 10:00</p>
                    <p className="font-semibold">Maria Nowak</p>
                    <p className="text-sm text-gray-600">Manicure hybrydowy</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-blue-600">Przypomnienie wysłane</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-3 rounded-lg text-white text-center">
                    <p className="text-sm font-semibold">
                      💰 Oszczędność dzisiaj: 2.5h = 75 zł
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;