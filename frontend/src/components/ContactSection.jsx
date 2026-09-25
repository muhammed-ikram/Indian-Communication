import React, { useState, useEffect } from 'react';
import { submitEnquiry } from '../services/api';

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

  // Auto-fill selected service if triggered from a "Know More" modal
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

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

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
    setFormData({
      name: '',
      phone: '',
      service: '',
      language: lang === 'te' ? 'Telugu' : 'English',
      message: ''
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Indian Communication, I would like to inquire about your financial and digital services.`
  );

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-badge">
            <span>📍</span>
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="section-title">
            {t.contact.title}
            {lang === 'both' && (
              <span className="bilingual-sub">మా కేంద్రానికి రండి లేదా వెంటనే సంప్రదించండి</span>
            )}
          </h2>

          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Phone Card */}
            <div className="info-card">
              <div className="info-icon-box">📞</div>
              <div className="info-body">
                <h4>{t.contact.callTitle}</h4>
                <p className="info-val-text">{t.contact.callValue}</p>
                <a href="tel:+919440012345" className="info-link-action">
                  Call Now Directly →
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="info-card whatsapp-highlight">
              <div className="info-icon-box">💬</div>
              <div className="info-body">
                <h4>{t.contact.whatsappTitle}</h4>
                <p className="info-val-text">{t.contact.whatsappValue}</p>
                <a
                  href={`https://wa.me/919440012345?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.889-9.888 9.889m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>{t.contact.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {/* Center Address */}
            <div className="info-card">
              <div className="info-icon-box">🏢</div>
              <div className="info-body">
                <h4>{t.contact.addressTitle}</h4>
                <p className="info-val-text">{t.contact.addressValue}</p>
                <span className="badge-landmark">Direct Landmark: Opposite State Bank of India</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="info-card">
              <div className="info-icon-box">⏰</div>
              <div className="info-body">
                <h4>{t.contact.hoursTitle}</h4>
                <p className="info-val-text">{t.contact.hoursValue}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="contact-form-wrapper">
            <div className="form-card-box">
              <h3 className="form-title">{t.contact.formTitle}</h3>
              <p className="form-desc">
                Fill this quick form and our support executive will connect with you via Call or WhatsApp.
              </p>

              {submitted ? (
                <div className="form-success-banner animate-fade-in">
                  <div className="success-icon-badge">✓</div>
                  <h4>{t.contact.successTitle}</h4>
                  <p>{t.contact.successDesc}</p>
                  <button
                    type="button"
                    className="btn-secondary"
                    style={{ marginTop: '16px' }}
                    onClick={handleReset}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {errorMsg && (
                    <div className="form-alert-error animate-fade-in">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      {t.contact.nameLabel} <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      {t.contact.phoneLabel} <span className="req">*</span>
                    </label>
                    <div className="input-prefix-wrap">
                      <span className="phone-prefix">+91</span>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phonePlaceholder}
                        className="form-input with-prefix"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">{t.contact.servicePlaceholder}</option>
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title.en}>
                          {lang === 'te' ? srv.title.te : srv.title.en}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Language */}
                  <div className="form-group">
                    <label htmlFor="contact-lang" className="form-label">
                      {t.contact.langPrefLabel}
                    </label>
                    <select
                      id="contact-lang"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Telugu">తెలుగు (Telugu)</option>
                      <option value="English">English</option>
                      <option value="Hindi">हिन्दी (Hindi)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>{t.contact.submitting}</span>
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
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
