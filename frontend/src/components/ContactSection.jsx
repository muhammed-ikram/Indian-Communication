import React, { useState, useEffect } from 'react';
import { submitEnquiry } from '../services/api';

// SVG Icon Components
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.34h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.1 6.1l1.03-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const BuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export default function ContactSection({ services, lang, t, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    language: 'English',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService.title.en
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) { setErrorMsg('Please enter your full name.'); return; }
    if (!formData.phone.trim() || formData.phone.length < 10) { setErrorMsg('Please enter a valid 10-digit mobile number.'); return; }
    setSubmitting(true);
    try {
      await submitEnquiry(formData);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', service: '', language: lang === 'te' ? 'Telugu' : 'English', message: '' });
  };

  const whatsappMessage = encodeURIComponent(`Hello Indian Communication, I would like to inquire about your financial and digital services.`);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-badge">
            <MapPinIcon />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="section-title">
            {t.contact.title}
            {lang === 'both' && (
              <span className="bilingual-sub">మా కేంద్రానికి రండి లేదా వెంటనే సంప్రదించండి</span>
            )}
          </h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Info Cards */}
          <div className="contact-info-cards">
            {/* Phone */}
            <div className="info-card">
              <div className="info-icon-box"><PhoneIcon /></div>
              <div className="info-body">
                <h4>{t.contact.callTitle}</h4>
                <p className="info-val-text">{t.contact.callValue}</p>
                <a href="tel:+919440012345" className="info-link-action">Call Now Directly →</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="info-card whatsapp-highlight">
              <div className="info-icon-box"><MessageIcon /></div>
              <div className="info-body">
                <h4>{t.contact.whatsappTitle}</h4>
                <p className="info-val-text">{t.contact.whatsappValue}</p>
                <a
                  href={`https://wa.me/919440012345?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.889-9.888 9.889m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>{t.contact.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="info-card">
              <div className="info-icon-box"><BuildingIcon /></div>
              <div className="info-body">
                <h4>{t.contact.addressTitle}</h4>
                <p className="info-val-text">{t.contact.addressValue}</p>
                <span className="badge-landmark">Opposite State Bank of India</span>
              </div>
            </div>

            {/* Hours */}
            <div className="info-card">
              <div className="info-icon-box"><ClockIcon /></div>
              <div className="info-body">
                <h4>{t.contact.hoursTitle}</h4>
                <p className="info-val-text">{t.contact.hoursValue}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper">
            <div className="form-card-box">
              <h3 className="form-title">{t.contact.formTitle}</h3>
              <p className="form-desc">Fill this quick form and our support executive will connect with you via Call or WhatsApp.</p>

              {submitted ? (
                <div className="form-success-banner animate-fade-in">
                  <div className="success-icon-badge"><CheckCircleIcon /></div>
                  <h4>{t.contact.successTitle}</h4>
                  <p>{t.contact.successDesc}</p>
                  <button type="button" className="btn-secondary" style={{ marginTop: '16px' }} onClick={handleReset}>
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {errorMsg && (
                    <div className="form-alert-error animate-fade-in">
                      <AlertIcon /> {errorMsg}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">{t.contact.nameLabel} <span className="req">*</span></label>
                    <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.namePlaceholder} className="form-input" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">{t.contact.phoneLabel} <span className="req">*</span></label>
                    <div className="input-prefix-wrap">
                      <span className="phone-prefix">+91</span>
                      <input type="tel" id="contact-phone" name="phone" maxLength="10" value={formData.phone} onChange={handleChange} placeholder={t.contact.phonePlaceholder} className="form-input with-prefix" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">{t.contact.serviceLabel}</label>
                    <select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="form-select">
                      <option value="">{t.contact.servicePlaceholder}</option>
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title.en}>{lang === 'te' ? srv.title.te : srv.title.en}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-lang" className="form-label">{t.contact.langPrefLabel}</label>
                    <select id="contact-lang" name="language" value={formData.language} onChange={handleChange} className="form-select">
                      <option value="Telugu">తెలుగు (Telugu)</option>
                      <option value="English">English</option>
                      <option value="Hindi">हिन्दी (Hindi)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">{t.contact.messageLabel}</label>
                    <textarea id="contact-message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} className="form-textarea"></textarea>
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn" disabled={submitting}>
                    {submitting ? (
                      <span>{t.contact.submitting}</span>
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <SendIcon />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
