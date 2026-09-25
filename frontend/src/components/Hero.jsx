import React from 'react';
import heroBg from '../assets/hero.png';

export default function Hero({ lang, t, onOpenLogin }) {
  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  return (
    <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Light Cream Translucent Tint Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Trust Badge */}
          <div className="hero-badge animate-fade-in">
            <span className="badge-pulse"></span>
            <span className="badge-icon">🏛️</span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Title / Brand Name */}
          <h1 className="hero-title animate-fade-in">
            {isDual ? (
              <>
                <span className="primary-title">Indian Communication</span>
                <span className="secondary-title">ఇండియన్ కమ్యూనికేషన్</span>
              </>
            ) : isTelugu ? (
              'ఇండియన్ కమ్యూనికేషన్'
            ) : (
              'Indian Communication'
            )}
          </h1>

          {/* Subtitle / Tagline */}
          <h2 className="hero-tagline animate-fade-in">
            {isDual ? (
              <>
                <span>Your Trusted Financial Partner</span>
                <span className="bilingual-sub">మీ విశ్వసనీయ ఆర్థిక భాగస్వామి</span>
              </>
            ) : isTelugu ? (
              'మీ విశ్వసనీయ ఆర్థిక భాగస్వామి'
            ) : (
              'Your Trusted Financial Partner'
            )}
          </h2>

          {/* Description */}
          <p className="hero-desc animate-fade-in">
            {t.hero.description}
          </p>

          {/* Feature Highlights Pills */}
          <div className="hero-trust-chips animate-fade-in">
            <div className="trust-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{t.hero.trustPill1}</span>
            </div>
            <div className="trust-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{t.hero.trustPill2}</span>
            </div>
            <div className="trust-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{t.hero.trustPill3}</span>
            </div>
          </div>

          {/* Call To Actions */}
          <div className="hero-actions animate-fade-in">
            {/* 1. Get Started Button -> takes to login page / modal */}
            <button
              type="button"
              className="btn-primary hero-btn"
              onClick={onOpenLogin}
              id="hero-get-started-btn"
            >
              <span>{t.hero.getStarted}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {/* 2. Our Services Button -> smooth scroll to services section */}
            <a
              href="#services"
              className="btn-secondary hero-btn"
              id="hero-services-btn"
            >
              <span>{t.hero.ourServices}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>

            {/* Quick Call Direct */}
            <a
              href="tel:+919440012345"
              className="hero-call-action"
              title="Direct Helpline"
            >
              <span className="call-icon-bubble">📞</span>
              <div className="call-info">
                <span className="call-label">{t.hero.callUs}</span>
                <span className="call-number">+91 94400 12345</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
