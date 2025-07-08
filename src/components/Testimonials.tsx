import React from 'react';
import { Star, Instagram, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.1.name'),
      salon: t('testimonials.1.salon'),
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: t('testimonials.1.text'),
      rating: 5
    },
    {
      name: t('testimonials.2.name'),
      salon: t('testimonials.2.salon'),
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: t('testimonials.2.text'),
      rating: 5
    },
    {
      name: t('testimonials.3.name'),
      salon: t('testimonials.3.salon'),
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      text: t('testimonials.3.text'),
      rating: 5
    }
  ];

  const integrations = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Booksy",
      icon: Calendar,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('testimonials.title')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
              {' '}{t('testimonials.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.salon}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {t('testimonials.integrations')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${integration.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-gray-800">{integration.name}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              {t('testimonials.others')}
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>Google Reviews</span>
              <span>•</span>
              <span>Facebook</span>
              <span>•</span>
              <span>Fresha</span>
              <span>•</span>
              <span>Planity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;