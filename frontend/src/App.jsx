import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { servicesData } from './data/servicesData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCarousel from './components/ServiceCarousel';
import InsuranceSection from './components/InsuranceSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyEnquireBtn from './components/StickyEnquireBtn';
import ServiceDetailModal from './components/ServiceDetailModal';
import QuickEnquiryModal from './components/QuickEnquiryModal';
import LoginModal from './components/LoginModal';
import ServiceLeadModal from './components/ServiceLeadModal';
import AdminDashboard from './components/AdminDashboard';

import './App.css';

// ─── Helper: check if user has submitted their details within the last 2 days ──
function hasRecentLead() {
  try {
    const raw = localStorage.getItem('ic_lead_submitted');
    if (!raw) return false;
    const { expiry } = JSON.parse(raw);
    return Date.now() < expiry;
  } catch {
    return false;
  }
}

// ─── Helper: check if admin is logged in (session in sessionStorage) ──────────
function getAdminSession() {
  try {
    const raw = sessionStorage.getItem('ic_admin');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function App() {
  // Language state: 'en', 'te' or 'both'
  const [lang, setLang] = useState(() => localStorage.getItem('ic_lang') || 'en');

  // Modal states
  const [activeServiceModal, setActiveServiceModal]   = useState(null); // ServiceDetailModal
  const [pendingService, setPendingService]           = useState(null); // Service waiting after lead capture
  const [serviceLeadModal, setServiceLeadModal]       = useState(false); // First-time service popup
  const [loginModalOpen, setLoginModalOpen]           = useState(false);
  const [enquireModalOpen, setEnquireModalOpen]       = useState(false);
  const [preselectedService, setPreselectedService]   = useState(null);

  // Admin session
  const [adminSession, setAdminSession] = useState(() => getAdminSession());

  useEffect(() => {
    localStorage.setItem('ic_lang', lang);
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
  }, [lang]);

  const currentLangKey = lang === 'te' ? 'te' : 'en';
  const t = translations[currentLangKey];

  // ── Called when user clicks any service card or "Know More" button ─────────
  const handleSelectService = (service) => {
    if (hasRecentLead()) {
      // Already submitted within 2 days → go straight to detail modal
      setActiveServiceModal(service);
    } else {
      // First time (or expired) → show lead capture popup first
      setPendingService(service);
      setServiceLeadModal(true);
    }
  };

  // Called after the ServiceLeadModal is submitted successfully
  const handleLeadCaptured = () => {
    setServiceLeadModal(false);
    if (pendingService) {
      setActiveServiceModal(pendingService);
      setPendingService(null);
    }
  };

  const handleEnquireForService = (service) => {
    setActiveServiceModal(null);
    setPreselectedService(service);
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenLogin = () => setLoginModalOpen(true);
  const handleOpenEnquire = () => setEnquireModalOpen(true);

  // Admin login success callback
  const handleAdminLoginSuccess = ({ token, email }) => {
    const session = { token, email };
    sessionStorage.setItem('ic_admin', JSON.stringify(session));
    setAdminSession(session);
    setLoginModalOpen(false);
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('ic_admin');
    setAdminSession(null);
  };

  // ── If admin is logged in, show the dashboard ─────────────────────────────
  if (adminSession) {
    return (
      <AdminDashboard
        token={adminSession.token}
        adminEmail={adminSession.email}
        onLogout={handleAdminLogout}
      />
    );
  }

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
        <Hero lang={lang} t={t} onOpenLogin={handleOpenLogin} onOpenEnquire={handleOpenEnquire} />

        {/* 3. Service Carousel */}
        <ServiceCarousel
          services={servicesData}
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* 4. Our Services Section */}
        <Services
          services={servicesData}
          lang={lang}
          t={t}
          onSelectService={handleSelectService}
        />

        {/* 5. Insurance Section */}
        <InsuranceSection lang={lang} onOpenEnquire={handleOpenEnquire} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs lang={lang} t={t} />

        {/* 7. About Us */}
        <AboutSection lang={lang} t={t} />

        {/* 8. Contact Us */}
        <ContactSection
          services={servicesData}
          lang={lang}
          t={t}
          preselectedService={preselectedService}
        />
      </main>

      {/* 9. Footer */}
      <Footer lang={lang} setLang={setLang} t={t} />

      {/* 10. Floating Sticky "Enquire Now" Button */}
      <StickyEnquireBtn lang={lang} t={t} onOpenEnquire={handleOpenEnquire} />

      {/* ── Modals ──────────────────────────────────────────────────────── */}

      {/* First-time service lead capture popup */}
      {serviceLeadModal && pendingService && (
        <ServiceLeadModal
          serviceName={pendingService.title?.en || ''}
          onClose={() => { setServiceLeadModal(false); setPendingService(null); }}
          onProceed={handleLeadCaptured}
        />
      )}

      {/* Service detail modal (shown after lead captured or if user already submitted) */}
      {activeServiceModal && (
        <ServiceDetailModal
          service={activeServiceModal}
          lang={lang}
          t={t}
          onClose={() => setActiveServiceModal(null)}
          onEnquireForService={handleEnquireForService}
        />
      )}

      {/* Quick Enquire Now modal */}
      {enquireModalOpen && (
        <QuickEnquiryModal
          services={servicesData}
          lang={lang}
          t={t}
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

      {/* Login / Admin login modal */}
      {loginModalOpen && (
        <LoginModal
          lang={lang}
          t={t}
          onClose={() => setLoginModalOpen(false)}
          onAdminLoginSuccess={handleAdminLoginSuccess}
        />
      )}
    </div>
  );
}

export default App;
