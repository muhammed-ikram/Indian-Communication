import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { servicesData } from './data/servicesData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCarousel from './components/ServiceCarousel';
import InsuranceSection from './components/InsuranceSection';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyEnquireBtn from './components/StickyEnquireBtn';
import ServiceDetailModal from './components/ServiceDetailModal';
import QuickEnquiryModal from './components/QuickEnquiryModal';
import LoginModal from './components/LoginModal';

import './App.css';

function App() {
  // Language state: 'en', 'te' or 'both'
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ic_lang') || 'en';
  });

  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);

  useEffect(() => {
    localStorage.setItem('ic_lang', lang);
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
  }, [lang]);

  // Active translation dictionary
  const currentLangKey = lang === 'te' ? 'te' : 'en';
  const t = translations[currentLangKey];

  const handleSelectService = (service) => {
    setActiveServiceModal(service);
  };

  const handleEnquireForService = (service) => {
    setActiveServiceModal(null);
    setPreselectedService(service);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLogin = () => {
    setLoginModalOpen(true);
  };

  const handleOpenEnquire = () => {
    setEnquireModalOpen(true);
  };

  return (
    <div className={`app-root ${lang === 'te' ? 'font-telugu' : ''}`}>
      {/* 1. Header with Logo & Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenLogin={handleOpenLogin}
        onOpenEnquire={handleOpenEnquire}
      />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero
          lang={lang}
          t={t}
          onOpenLogin={handleOpenLogin}
        />

        {/* 3. Service Carousel - quick visual overview after hero */}
        <ServiceCarousel
          services={servicesData}
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* 4. Stats & Credibility Bar */}
        <StatsBar t={t} />

        {/* 5. Our Services Section with image cards & Know More buttons */}
        <Services
          services={servicesData}
          lang={lang}
          t={t}
          onSelectService={handleSelectService}
        />

        {/* 6. Insurance Protection Section - "Protect What Matters Most" (kept below services section) */}
        <InsuranceSection
          lang={lang}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs
          lang={lang}
          t={t}
        />

        {/* 6. About Us Section */}
        <AboutSection
          lang={lang}
          t={t}
        />

        {/* 7. Contact Us Section */}
        <ContactSection
          services={servicesData}
          lang={lang}
          t={t}
          preselectedService={preselectedService}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* 9. Floating Sticky "Enquire Now" Button (Always on side/bottom-right) */}
      <StickyEnquireBtn
        lang={lang}
        t={t}
        onOpenEnquire={handleOpenEnquire}
      />

      {/* 10. Modals */}
      {activeServiceModal && (
        <ServiceDetailModal
          service={activeServiceModal}
          lang={lang}
          t={t}
          onClose={() => setActiveServiceModal(null)}
          onEnquireForService={handleEnquireForService}
        />
      )}

      {enquireModalOpen && (
        <QuickEnquiryModal
          services={servicesData}
          lang={lang}
          t={t}
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

      {loginModalOpen && (
        <LoginModal
          lang={lang}
          t={t}
          onClose={() => setLoginModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
