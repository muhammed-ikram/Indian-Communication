import React, { useState, useEffect } from 'react';
import { submitEnquiry } from '../services/api';

export default function QuickEnquiryModal({ services, lang, t, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      await submitEnquiry(formData);
    } catch {
      // safe fallback
    }
    setSubmitted(true);
  };

  const whatsappQuickMessage = encodeURIComponent(
    `Hello Indian Communication, I need quick assistance regarding your services. Name: ${formData.name || 'Customer'}`
  );

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog quick-enquiry-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="modal-header-clean">
          <div className="header-icon-circle">⚡</div>
          <div>
            <h3 className="modal-heading-text">{t.stickyEnquire.text}</h3>
            <p className="modal-subheading-text">
              {lang === 'te'
                ? 'మీ వివరాలు నమోదు చేయండి, మా ప్రతినిధి మీకు కాల్ చేస్తారు.'
                : 'Share your phone number and we will connect with you in minutes.'}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="modal-success-state animate-fade-in">
            <span className="success-emoji">🎉</span>
            <h4>{t.contact.successTitle}</h4>
            <p>{t.contact.successDesc}</p>
            <button
              type="button"
              className="btn-primary"
              style={{ marginTop: '16px' }}
              onClick={onClose}
            >
              {t.modal.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quick-enquiry-form">
            {errorMsg && <div className="form-alert-error">⚠️ {errorMsg}</div>}

            <div className="form-group">
              <label className="form-label">{t.contact.nameLabel} *</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrorMsg(''); }}
                placeholder={t.contact.namePlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t.contact.phoneLabel} *</label>
              <div className="input-prefix-wrap">
                <span className="phone-prefix">+91</span>
                <input
                  type="tel"
                  maxLength="10"
                  className="form-input with-prefix"
                  value={formData.phone}
                  onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrorMsg(''); }}
                  placeholder="10-digit number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t.contact.serviceLabel}</label>
              <select
                className="form-select"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">{t.contact.servicePlaceholder}</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title.en}>
                    {lang === 'te' ? s.title.te : s.title.en}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary btn-full-width">
              <span>Request Instant Callback</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="divider-or">
              <span>OR CONNECT IMMEDIATELY</span>
            </div>

            <div className="quick-direct-actions">
              <a href="tel:+919440012345" className="btn-outline-direct">
                📞 Call +91 94400 12345
              </a>
              <a
                href={`https://wa.me/919440012345?text=${whatsappQuickMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-direct"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
