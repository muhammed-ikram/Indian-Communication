import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer({ lang, setLang, t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <img src={logoImg} alt="Indian Communication" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-brand-title">Indian Communication</span>
                <span className="footer-brand-sub">
                  {lang === 'te' ? 'మీ విశ్వసనీయ ఆర్థిక భాగస్వామి' : 'Your Trusted Financial Partner'}
                </span>
              </div>
            </div>

            <p className="footer-about-text">
              {t.footer.aboutText}
            </p>

            {/* Language Selector in Footer */}
            <div className="footer-lang-box">
              <span className="footer-lang-label">Language / భాష:</span>
              <div className="lang-switcher footer-switcher">
                <button
                  type="button"
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`lang-btn ${lang === 'te' ? 'active' : ''}`}
                  onClick={() => setLang('te')}
                >
                  తెలుగు
                </button>
                <button
                  type="button"
                  className={`lang-btn ${lang === 'both' ? 'active' : ''}`}
                  onClick={() => setLang('both')}
                >
                  Dual Mode
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">{t.footer.quickLinks}</h4>
            <ul className="footer-link-list">
              <li><a href="#hero">{t.nav.home}</a></li>
              <li><a href="#services">{t.nav.services}</a></li>
              <li><a href="#why-us">{t.nav.whyUs}</a></li>
              <li><a href="#about">{t.nav.about}</a></li>
              <li><a href="#contact">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">{t.footer.servicesList}</h4>
            <ul className="footer-link-list">
              <li><a href="#services">Aadhaar & Voter Card</a></li>
              <li><a href="#services">Money Transfer (IMPS/UPI)</a></li>
              <li><a href="#services">AEPS Micro ATM Withdrawal</a></li>
              <li><a href="#services">Passport & Air Tickets</a></li>
              <li><a href="#services">Hajj & Umrah Packages</a></li>
              <li><a href="#services">Health & Motor Insurance</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">{t.contact.badge}</h4>
            <div className="footer-contact-item">
              <span className="footer-c-icon">📍</span>
              <span>Main Road, Opp. SBI Branch, Anantapur, Andhra Pradesh - 515001</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-c-icon">📞</span>
              <a href="tel:+919440012345">+91 94400 12345</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-c-icon">✉️</span>
              <a href="mailto:support@indiancommunication.com">support@indiancommunication.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-c-icon">⏰</span>
              <span>Mon - Sat: 9:00 AM - 8:30 PM</span>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="footer-disclaimer-box">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} Indian Communication. {t.footer.rights}
          </p>
          <p className="designed-note">
            {t.footer.designedFor}
          </p>
        </div>
      </div>
    </footer>
  );
}
