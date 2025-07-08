import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/48123456789?text=${encodeURIComponent(t('whatsapp.message'))}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center z-50 animate-pulse"
      aria-label="Skontaktuj się przez WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;