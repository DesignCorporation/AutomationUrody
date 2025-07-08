import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Calculator from './components/Calculator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Problems />
        <Solutions />
        <HowItWorks />
        <Results />
        <Calculator />
        <Pricing />
        <Testimonials />
        <ContactForm />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;