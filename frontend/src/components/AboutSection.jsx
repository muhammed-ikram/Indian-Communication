import React from 'react';
import logoImg from '../assets/logo.png';

export default function AboutSection({ lang, t }) {
  const isDual = lang === 'both';

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Text Column */}
          <div className="about-text-col">
            <div className="section-badge">
              <span>🤝</span>
              <span>{t.about.badge}</span>
            </div>

            <h2 className="section-title">
              {t.about.title}
              {isDual && (
                <span className="bilingual-sub">ప్రజల నమ్మకమే మాకు అసలైన బలం</span>
              )}
            </h2>

            <p className="about-paragraph">{t.about.p1}</p>
            <p className="about-paragraph">{t.about.p2}</p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <span className="feat-check">✓</span>
                <span>{t.about.feature1}</span>
              </div>
              <div className="about-feature-item">
                <span className="feat-check">✓</span>
                <span>{t.about.feature2}</span>
              </div>
              <div className="about-feature-item">
                <span className="feat-check">✓</span>
                <span>{t.about.feature3}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="about-visual-col">
            <div className="about-card-box">
              <img src={logoImg} alt="Indian Communication" className="about-card-logo" />
              <div className="about-card-highlight">
                <span className="highlight-tag">Authorized Center</span>
                <h4>Indian Communication Customer Care</h4>
                <p>Bringing banking and governmental digitization directly to your neighborhood with 100% transparency.</p>
                <div className="about-mini-stats">
                  <div className="mini-stat">
                    <strong>10+</strong>
                    <span>Years Experience</span>
                  </div>
                  <div className="mini-stat">
                    <strong>20+</strong>
                    <span>Active Services</span>
                  </div>
                  <div className="mini-stat">
                    <strong>100%</strong>
                    <span>Regulated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
