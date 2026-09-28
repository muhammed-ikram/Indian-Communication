import React from 'react';
import heroBg from '../assets/hero.png';
import { FaWhatsapp, FaShieldAlt, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function Hero({ lang, t, onOpenLogin }) {
  const isTelugu = lang === 'te';
  const isDual = lang === 'both';

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Visual Ambiance & Glow Overlays */}
      {/* <div className="hero-overlay"></div>
      <div className="hero-mesh-grid"></div>
      <div className="hero-glow-orb hero-glow-1"></div>
      <div className="hero-glow-orb hero-glow-2"></div> */}

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Brand & Value Proposition */}
          <div className="hero-content">
            {/* Trust Badge */}
            <div className="hero-badge animate-hero-item hero-delay-1">
              <span className="badge-pulse"></span>
              <span className="badge-icon">🏛️</span>
              <span className="badge-text">{t.hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title animate-hero-item hero-delay-2">
              {isDual ? (
                <>
                  <span className="primary-title">Indian Communication</span>
                  <span className="secondary-title">ఇండియన్ కమ్యూనికేషన్</span>
                </>
              ) : isTelugu ? (
                <span className="primary-title">ఇండియన్ కమ్యూనికేషన్</span>
              ) : (
                <span className="primary-title">Indian Communication</span>
              )}
            </h1>

            {/* Tagline */}
            <h2 className="hero-tagline animate-hero-item hero-delay-3">
              {isDual ? (
                <>
                  <span className="tagline-primary">Your Trusted Financial Partner</span>
                  <span className="bilingual-sub-white">మీ విశ్వసనీయ ఆర్థిక భాగస్వామి</span>
                </>
              ) : isTelugu ? (
                'మీ విశ్వసనీయ ఆర్థిక భాగస్వామి'
              ) : (
                'Your Trusted Financial Partner'
              )}
            </h2>

            {/* Description */}
            <p className="hero-desc animate-hero-item hero-delay-4">
              {t.hero.description}
            </p>

            {/* Trust Pills */}
            <div className="hero-trust-chips animate-hero-item hero-delay-5">
              <div className="trust-chip">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{t.hero.trustPill1}</span>
              </div>

              <div className="trust-chip">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{t.hero.trustPill2}</span>
              </div>

              <div className="trust-chip">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{t.hero.trustPill3}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions animate-hero-item hero-delay-6">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={onOpenLogin}
                id="hero-get-started-btn"
              >
                <span>{t.hero.getStarted}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-arrow-icon"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a
                href="#services"
                className="btn-hero-outline"
                id="hero-services-btn"
              >
                <span>{t.hero.ourServices}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-down-icon"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Premium CSP Verification & Direct Reach Card */}
          <div className="hero-card-col animate-hero-card">
            <div className="hero-csp-card">
              <div className="csp-card-glow"></div>

              {/* Card Header Badge */}
              <div className="csp-card-header">
                <div className="csp-auth-tag">
                  <FaShieldAlt className="csp-shield-icon" />
                  <span>Authorized CSP Center</span>
                </div>
                <div className="csp-status-indicator">
                  <span className="csp-status-dot"></span>
                  <span className="csp-status-text">Active Now</span>
                </div>
              </div>

              {/* Card Operator Profile */}
              <div className="csp-profile-box">
                <div className="csp-avatar-ring">
                  <div className="csp-avatar">
                    <span>IC</span>
                  </div>
                  <FaCheckCircle className="csp-verified-check" title="Verified CSP Point" />
                </div>
                <div className="csp-profile-info">
                  <span className="csp-designation">Banking Correspondent & Services</span>
                  <h3 className="csp-person-name">Mulla Muneer Basha</h3>
                  <div className="csp-location-row">
                    <FaMapMarkerAlt className="csp-loc-icon" />
                    <span className="csp-address-text">
                      Opp. PTC, 4th Road (Corner), Anantapur, AP
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Fast Connect Actions */}
              <div className="csp-connect-group">
                <span className="csp-connect-title">Quick Connect & Assistance</span>
                <div className="csp-buttons-row">
                  <a
                    href="tel:+919885089488"
                    className="csp-action-btn csp-call-btn"
                    title="Direct Phone Call"
                  >
                    <div className="csp-btn-icon-wrap call-icon-bg">
                      <FaPhoneAlt size={14} />
                    </div>
                    <div className="csp-btn-details">
                      <span className="csp-btn-label">{t.hero.callUs}</span>
                      <span className="csp-btn-val">+91 98850 89488</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919885089488?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    className="csp-action-btn csp-wa-btn"
                    title="Chat on WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="csp-btn-icon-wrap wa-icon-bg">
                      <FaWhatsapp size={18} />
                    </div>
                    <div className="csp-btn-details">
                      <span className="csp-btn-label">WhatsApp</span>
                      <span className="csp-btn-val">Instant Chat</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Badges Strip at bottom of card */}
              <div className="csp-card-footer">
                <div className="csp-feature-point">
                  <span className="footer-bullet">✦</span>
                  <span>Instant Settlements</span>
                </div>
                <div className="csp-feature-point">
                  <span className="footer-bullet">✦</span>
                  <span>Govt. Regulated</span>
                </div>
                <div className="csp-feature-point">
                  <span className="footer-bullet">✦</span>
                  <span>Doorstep Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}