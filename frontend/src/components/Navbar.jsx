import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar({ lang, setLang, t, onOpenLogin, onOpenEnquire }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo & Name */}
        <a href="#hero" className="brand-link" aria-label="Indian Communication Home">
          <img src={logoImg} alt="Indian Communication Logo" className="brand-logo-img" />
          <div className="brand-text-block">
            <span className="brand-title">Indian Communication</span>
            <span className="brand-subtitle-mini">
              {lang === 'te' ? 'మీ విశ్వసనీయ ఆర్థిక భాగస్వామి' : 'Your Trusted Financial Partner'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions & Language Switcher */}
        <div className="nav-actions">
          {/* Bilingual Language Switcher Toggle */}
          <div className="lang-switcher" role="group" aria-label="Language Switcher">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'te' ? 'active' : ''}`}
              onClick={() => setLang('te')}
              title="తెలుగు (Telugu)"
            >
              <span className="lang-full-text">తెలుగు</span>
              <span className="lang-short-text">తె</span>
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'both' ? 'active' : ''}`}
              onClick={() => setLang('both')}
              title="Dual / Both Languages"
            >
              Dual
            </button>
          </div>

          {/* Login Portal Button */}
          <button
            type="button"
            className="btn-nav-login"
            onClick={onOpenLogin}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{t.nav.login}</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-lang">
            <span className="drawer-label">Language / భాష:</span>
            <div className="lang-switcher mobile">
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
              >
                English
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'te' ? 'active' : ''}`}
                onClick={() => { setLang('te'); setMobileMenuOpen(false); }}
              >
                తెలుగు
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'both' ? 'active' : ''}`}
                onClick={() => { setLang('both'); setMobileMenuOpen(false); }}
              >
                Dual (రెండు)
              </button>
            </div>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn-primary mobile-btn-full"
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>{t.nav.login}</span>
            </button>

            <button
              type="button"
              className="btn-secondary mobile-btn-full"
              onClick={() => { setMobileMenuOpen(false); onOpenEnquire(); }}
            >
              <span>{t.nav.enquire}</span>
            </button>

            <a href="tel:+919440012345" className="mobile-call-link">
              📞 +91 94400 12345 (Customer Helpline)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
